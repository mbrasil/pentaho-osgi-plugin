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
import com.hitachivantara.dashboards.impl.component.access.model.analyzer.AnalyzerComponent;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.pentaho.platform.api.repository2.unified.RepositoryFile;

import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.List;

public class AnalyzerComponentConnector extends ComponentConnector {

  private static final Log logger = LogFactory.getLog( AnalyzerComponentConnector.class );

  static final String ANALYZER_COMPONENT_EXTENSION = "xanalyzer";

  public AnalyzerComponentConnector() {}

  @Override
  public IDashboardComponentType getComponentType() {
    return IDashboardComponentType.ANALYZER;
  }

  @Override
  public IBaseComponent getComponent( String id ) {
    AnalyzerComponent analyzerComponent = null;

    try {
      //it's expected to receive the id base64 encoded
      final String path = id != null ? new String( Base64.getDecoder().decode( id ) ) : null;

      if ( path != null && path.endsWith( ANALYZER_COMPONENT_EXTENSION ) ) {
        final RepositoryFile file = this.getRepositoryAccess().getFileByPath( path );

        analyzerComponent = new AnalyzerComponent( getComponentPropertyList( file ) );
      }
    } catch ( Exception ex ) {
      logger.error( String.format( "Could not get the Analyzer Component with id %s.", id ), ex );
    }

    return analyzerComponent;
  }

  @Override
  public Collection<IBaseComponent> getComponents() {
    List<IBaseComponent> analyzerComponents = new ArrayList<>();

    try {
      final List<RepositoryFile> fileList = this.getRepositoryAccess().collectFiles( ANALYZER_COMPONENT_EXTENSION );

      fileList.forEach( file -> {
        final AnalyzerComponent component = new AnalyzerComponent( getComponentPropertyList( file ) );

        analyzerComponents.add( component );
      } );
    } catch ( Exception e ) {
      logger.error( "Could not get list of Analyzer components. " + e.getMessage() );
    }

    return analyzerComponents;
  }
}
