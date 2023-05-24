/*
 * Copyright 2019 - 2020 Hitachi Vantara. All rights reserved.
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
package com.hitachivantara.dashboards.impl.pentaho.content;

import org.pentaho.platform.api.engine.IPluginManager;
import org.pentaho.platform.engine.core.system.PentahoSystem;
import org.pentaho.platform.plugin.services.importer.IPlatformImportHandler;
import org.pentaho.platform.plugin.services.importer.IPlatformImporter;

import java.util.List;

public class LayoutContentTypeRegister {
  private List<IPlatformImportHandler> importHandlers;

  public void start() {
    final IPluginManager manager = PentahoSystem.get( IPluginManager.class );

    manager.addPluginManagerListener( () -> {
      if ( this.importHandlers != null ) {
        final IPlatformImporter importResolver = PentahoSystem.get( IPlatformImporter.class );

        for ( IPlatformImportHandler handler : this.importHandlers ) {
          importResolver.addHandler( handler );
        }
      }
    } );
  }

  public void setImportHandlers( List<IPlatformImportHandler> importHandlers ) {
    this.importHandlers = importHandlers;
  }
}
