/*
 * Copyright 2019 Hitachi Vantara. All rights reserved.
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

import com.hitachivantara.dashboards.api.component.access.IDashboardComponentType;
import com.hitachivantara.dashboards.api.component.access.connector.model.IBaseComponent;
import com.hitachivantara.dashboards.impl.component.access.model.cde.CdeComponent;
import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.pentaho.platform.api.repository2.unified.RepositoryFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.List;

public class CdeComponentConnector extends ComponentConnector {

  private static final Log logger = LogFactory.getLog( CdeComponentConnector.class );

  static final String CDE_COMPONENT_REQUIRE_SUPPORT = "<require>true</require>";
  static final String CDE_COMPONENT_EXTENSION = "wcdf";

  public CdeComponentConnector() {}

  @Override
  public IDashboardComponentType getComponentType() {
    return IDashboardComponentType.CDE;
  }

  @Override
  public IBaseComponent getComponent( String id ) {
    CdeComponent cdeComponent = null;

    try {
      //it's expected to receive the id base64 encoded
      final String path = id != null ? new String( Base64.getDecoder().decode( id ) ) : null;

      if ( path != null && path.endsWith( CDE_COMPONENT_EXTENSION ) ) {
        final RepositoryFile file = this.getRepositoryAccess().getFileByPath( path );

        cdeComponent = isRequireComponent( file ) ? new CdeComponent( getComponentPropertyList( file ) ) : null;
      }
    } catch ( Exception ex ) {
      logger.error( String.format( "Could not get the CDE dashboard with id %s.", id ), ex );
    }

    return cdeComponent;
  }

  @Override
  public Collection<IBaseComponent> getComponents() {
    List<IBaseComponent> cdeComponents = new ArrayList<>();

    try {
      final List<RepositoryFile> fileList = this.getRepositoryAccess().collectFiles( CDE_COMPONENT_EXTENSION );

      fileList.forEach( file -> {
        if ( isRequireComponent( file ) ) {
          final CdeComponent component = new CdeComponent( getComponentPropertyList( file ) );

          cdeComponents.add( component );
        }
      } );
    } catch ( Exception e ) {
      logger.error( "Could not get list of CDE components. " + e.getMessage() );
    }

    return cdeComponents;
  }

  private boolean isRequireComponent( RepositoryFile file ) {
    final String content = getWcdfContent( (String) file.getId() );

    return content != null && content.contains( CDE_COMPONENT_REQUIRE_SUPPORT );
  }

  String getWcdfContent( String identifier ) {
    String content = null;

    try {
      content = IOUtils.toString( this.getRepositoryAccess().getFileInputStream( identifier ), StandardCharsets.UTF_8 );

    } catch ( IOException ioe ) {
      // does nothing
    }

    return content;
  }
}
