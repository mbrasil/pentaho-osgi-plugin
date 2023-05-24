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
package com.hitachivantara.dashboards.impl.pentaho.access;

import com.hitachivantara.dashboards.api.pentaho.access.IDashboard;
import com.hitachivantara.dashboards.api.pentaho.access.IDashboardStore;
import com.hitachivantara.dashboards.impl.pentaho.utils.RepositoryAccess;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.pentaho.platform.api.repository2.unified.IUnifiedRepository;
import org.pentaho.platform.api.repository2.unified.RepositoryFile;
import org.pentaho.platform.api.repository2.unified.data.simple.SimpleRepositoryFileData;

import javax.ws.rs.core.MediaType;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Serializable;

import java.nio.charset.StandardCharsets;
import java.util.Collection;

public class PentahoRepositoryDashboardStore implements IDashboardStore {
  private static final Log logger = LogFactory.getLog( PentahoRepositoryDashboardStore.class );

  private static final String DEFAULT_ENCODING = "UTF-8";
  public static final String DASH_EXTENSION = ".dsb";

  private RepositoryAccess repositoryAccess;

  public void setRepositoryAccess( RepositoryAccess repositoryAccess ) {
    this.repositoryAccess = repositoryAccess;
  }

  public String add( IDashboard dashboard ) {
    if ( dashboard == null ) {
      throw new IllegalArgumentException( "Argument 'dashboard' is required." );
    }

    String id = dashboard.getId();
    if ( id == null ) {
      throw new IllegalArgumentException( "Dashboard must have an id." );
    }

    if( !id.endsWith( DASH_EXTENSION ) ) {
      throw new IllegalArgumentException( "Dashboard id must be a path that ends with the '" +  DASH_EXTENSION + "'." );
    }

    final InputStream contents = new ByteArrayInputStream( dashboard.getContent().getBytes() );

    if ( this.createFile( id, contents ) ) {
      return id;
    }

    return null;
  }

  public IDashboard get( String id ) {
    final Dashboard dashboard = new Dashboard();

    final IUnifiedRepository repository = this.repositoryAccess.getRepository();

    if ( !id.startsWith( "/" ) ) {
      id = "/" + id;
    }

    final Serializable fileId = getDashboardFileId( id );
    if ( fileId == null ) return null;

    InputStream dashboardStream = repository.getDataForRead( fileId, SimpleRepositoryFileData.class ).getInputStream();

    StringBuilder stringBuilder = new StringBuilder();

    try ( BufferedReader bufferedReader = new BufferedReader( new InputStreamReader( dashboardStream, StandardCharsets.UTF_8 ) ) ) {
      String line;

      while ( ( line = bufferedReader.readLine() ) != null ) {
        stringBuilder.append( line );
      }
    } catch ( IOException e ) {
      logger.error( "Error getting a dashboard by Path", e);
    }

    String content = stringBuilder.toString();

    dashboard.setId( id );
    dashboard.setContent( content );

    return dashboard;
  }

  public IDashboard update( String id, IDashboard dashboard ) {
    if ( id == null ) {
      throw new IllegalArgumentException("Argument 'id' is required.");
    }

    if ( dashboard == null ) {
      throw new IllegalArgumentException("Argument 'dashboard' is required.");
    }

    if( !id.endsWith( DASH_EXTENSION ) ) {
      throw new IllegalArgumentException( "Dashboard id must be a path that ends with the '" +  DASH_EXTENSION + "'." );
    }

    if ( !id.startsWith( "/" ) ) {
      id = "/" + id;
    }

    final Dashboard updatedDashboard = new Dashboard();
    updatedDashboard.setId( id );
    updatedDashboard.setContent( dashboard.getContent() );

    final InputStream contents = new ByteArrayInputStream( updatedDashboard.getContent().getBytes() );

    if ( !this.updateFile( id, contents ) ) {
      return null;
    }

    return updatedDashboard;
  }

  public boolean remove( String path ) {
    return false;
  }

  public Collection<IDashboard> list() {
    return null;
  }

  private boolean createFile(String path, InputStream contents ) {
    final IUnifiedRepository repository = this.repositoryAccess.getRepository();

    final String folderAndFileRegx = String.format( "^(.+)/(.+\\%s)$", DASH_EXTENSION );
    final String fileRegx = String.format( "^(.+)\\%s$", DASH_EXTENSION );

    try {
      String parentFolderPath = path.replaceAll( folderAndFileRegx, "$1" );
      Serializable parentFolderId = repository.getFile( parentFolderPath ).getId();

      String filename = path.replaceAll( folderAndFileRegx, "$2" );
      String fileNameWithoutExtension = filename.replaceAll( fileRegx, "$1" );

      final RepositoryFile file = new RepositoryFile.Builder( filename )
          .versioned( false )
          .title( RepositoryFile.ROOT_LOCALE, fileNameWithoutExtension )
          .description( RepositoryFile.ROOT_LOCALE, "" )
          .build();

      final SimpleRepositoryFileData data = new SimpleRepositoryFileData( contents, DEFAULT_ENCODING, MediaType.APPLICATION_JSON );

      repository.createFile( parentFolderId, file, data, null );

    } catch ( Exception ex ) {
      // TODO: LOG!
      return false;
    }

    return true;
  }

  private boolean updateFile(String path, InputStream contents ) {
    final IUnifiedRepository repository = this.repositoryAccess.getRepository();

    try {
      final RepositoryFile file = repository.getFile( path );
      if ( file == null ) {
        return false;
      }

      final SimpleRepositoryFileData data = new SimpleRepositoryFileData( contents, DEFAULT_ENCODING, MediaType.APPLICATION_JSON );

      repository.updateFile( file, data, null );

    } catch ( Exception ex ) {
      // TODO: LOG!
      return false;
    }

    return true;
  }

  private Serializable getDashboardFileId( String path ) {
    final IUnifiedRepository repository = this.repositoryAccess.getRepository();

    RepositoryFile file = repository.getFile( path );
    if ( file != null ) {
      return file.getId();
    }

    return null;
  }
}
