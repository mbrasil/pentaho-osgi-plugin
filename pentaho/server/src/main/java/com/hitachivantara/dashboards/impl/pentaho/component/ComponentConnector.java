/*
 * Copyright 2018 - 2019 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 */
package com.hitachivantara.dashboards.impl.pentaho.component;

import com.hitachivantara.dashboards.api.component.access.connector.IComponentConnector;
import com.hitachivantara.dashboards.api.component.access.connector.model.IBaseComponentProperty;
import com.hitachivantara.dashboards.impl.component.access.model.BaseComponent.PropertyKeys;
import com.hitachivantara.dashboards.impl.component.access.model.BaseComponentProperty;
import com.hitachivantara.dashboards.impl.pentaho.utils.RepositoryAccess;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.pentaho.platform.api.repository2.unified.RepositoryFile;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

public abstract class ComponentConnector implements IComponentConnector {

  private static final Log logger = LogFactory.getLog( ComponentConnector.class );
  private static final DateTimeFormatter dtf = DateTimeFormatter.ofPattern( "yyyy-MM-dd HH:mm:ss" );

  private boolean useRelativeServerUrls = false;
  private String serverURL;
  private RepositoryAccess repositoryAccess;

  public void setUseRelativeServerUrls( boolean useRelativeServerUrls ) {
    this.useRelativeServerUrls = useRelativeServerUrls;
  }

  public void setRepositoryAccess( RepositoryAccess repositoryAccess ) {
    this.repositoryAccess = repositoryAccess;
    this.serverURL = repositoryAccess.getFullyQualifiedUrl();
  }

  public RepositoryAccess getRepositoryAccess() {
    return this.repositoryAccess;
  }

  private String convertUrlForRelativeUrls( String endpoint ) {
    if ( useRelativeServerUrls ) {
      return "";
    }

    try {
      final URL url = new URL( endpoint );

      return url.getProtocol() + "://" + url.getHost() + ":" + url.getPort();
    } catch ( MalformedURLException e ) {
      logger.error( "Wrong endpoint", e );

      throw new RuntimeException( e );
    }
  }

  List<IBaseComponentProperty> getComponentPropertyList( RepositoryFile file ) {
    List<IBaseComponentProperty> properties = new ArrayList<>();

    final String server = convertUrlForRelativeUrls( this.serverURL );
    properties.add( createComponentProperty( PropertyKeys.SERVER, server ) );

    final String path = file.getPath();
    properties.add( createComponentProperty( PropertyKeys.PATH, path ) );

    // TODO better identifier?
    properties.add( createComponentProperty( PropertyKeys.ID, encodeComponentId( path ) ) );

    properties.add( createComponentProperty( PropertyKeys.TITLE, file.getTitle() ) );
    properties.add( createComponentProperty( PropertyKeys.DESCRIPTION, file.getDescription() ) );

    final String lastModifiedDate = getPrettyDate( file.getLastModifiedDate() );
    properties.add( createComponentProperty( PropertyKeys.MODIFIED, lastModifiedDate ) );

    return properties;
  }

  String encodeComponentId( String path ) {
    return Base64.getEncoder().encodeToString( path.getBytes() );
  }

  String getPrettyDate( Date date ) {
    LocalDateTime localDate = LocalDateTime.ofInstant( date.toInstant(), ZoneId.systemDefault() );

    return localDate.format( dtf );
  }

  private IBaseComponentProperty createComponentProperty( PropertyKeys name, String value ) {
    return new BaseComponentProperty( name.getKey(), value );
  }
}
