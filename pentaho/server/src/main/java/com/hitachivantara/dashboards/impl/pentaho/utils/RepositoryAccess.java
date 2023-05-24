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
package com.hitachivantara.dashboards.impl.pentaho.utils;

import org.pentaho.platform.api.engine.IPentahoSession;
import org.pentaho.platform.api.repository2.unified.IUnifiedRepository;
import org.pentaho.platform.api.repository2.unified.RepositoryFile;
import org.pentaho.platform.api.repository2.unified.RepositoryFileTree;
import org.pentaho.platform.api.repository2.unified.RepositoryRequest;
import org.pentaho.platform.api.repository2.unified.data.simple.SimpleRepositoryFileData;
import org.pentaho.platform.engine.core.system.PentahoSessionHolder;
import org.pentaho.platform.engine.core.system.PentahoSystem;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Pentaho Repository Access
 *
 * Handle access to the Pentaho Repository for file based interactions.
 */
public class RepositoryAccess {
  private Boolean includeHidden = false;

  private static final Integer ALL_CHILDREN = -1;

  static final String REPOSITORY_ROOT = "/";

  public void setIncludeHidden( Boolean value ) {
    this.includeHidden = value;
  }

  public InputStream getFileInputStream( String fileId ) {
    final SimpleRepositoryFileData data = getRepository().getDataForRead( fileId, SimpleRepositoryFileData.class );

    if (data != null) {
      return data.getInputStream();
    }

    return null;
  }

  public RepositoryFile getFileByPath( String path ) {
    return getRepository().getFile( path );
  }

  public List<RepositoryFile> collectFiles( String extension ) {
    return this.collectFiles( REPOSITORY_ROOT, extension );
  }

  public List<RepositoryFile> collectFiles( String path, String extension ) {
    List<RepositoryFile> result = new ArrayList<>();

    RepositoryRequest request = createFilesRepositoryRequest( path, extension );
    RepositoryFileTree tree = getRepository().getTree( request );

    populateList( result, tree );

    return result;
  }

  private void populateList( List<RepositoryFile> list, RepositoryFileTree tree ) {
    RepositoryFile file = tree.getFile();

    if ( file.isFolder() ) {
      for ( RepositoryFileTree actualFileTree : tree.getChildren() ) {
        populateList( list, actualFileTree );
      }
    } else {
      list.add( file );
    }
  }

  /**
   *  Obtain the Repository instance for the current Pentaho session.
   *  It is used so that all methods in this class respect the current active session permissions.
   */
  public IUnifiedRepository getRepository() {
    final IPentahoSession session = PentahoSessionHolder.getSession();

    return PentahoSystem.get( IUnifiedRepository.class, session );
  }

  public String getFullyQualifiedUrl() {
    return PentahoSystem.getApplicationContext().getFullyQualifiedServerURL();
  }

  RepositoryRequest createFilesRepositoryRequest( String path, String extension ) {
    return new RepositoryRequest( path, includeHidden, ALL_CHILDREN, "*" + extension );
  }
}
