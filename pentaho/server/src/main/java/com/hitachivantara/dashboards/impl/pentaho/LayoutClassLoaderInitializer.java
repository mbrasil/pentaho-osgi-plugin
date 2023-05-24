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

package com.hitachivantara.dashboards.impl.pentaho;

import org.pentaho.platform.api.engine.IPentahoObjectReference;
import org.pentaho.platform.api.engine.IPentahoObjectRegistration;
import org.pentaho.platform.engine.core.system.PentahoSystem;
import org.pentaho.platform.engine.core.system.objfac.references.SingletonPentahoObjectReference;
import org.pentaho.platform.plugin.services.pluginmgr.PluginClassLoader;

import java.io.File;
import java.util.Collections;

/**
 * Initializes a classLoader for this jar and registers it in PentahoSystem for this plugin
 */
public class LayoutClassLoaderInitializer {

  public static final String PLUGIN_ID_KEY = "plugin-id";
  public static final String PLUGIN_ID_VALUE = "layout-editor";

  private IPentahoObjectRegistration registration;

  public void init() {
    if( PentahoSystem.getInitializedOK() ) {
      this.registration = PentahoSystem.registerReference( getPluginReference(), ClassLoader.class );
    }
  }

  public void destroy() {
    final IPentahoObjectRegistration registration = getPluginRegistration();

    if( registration != null ) {
      registration.remove();
    }
  }

  public IPentahoObjectRegistration getPluginRegistration() {
    return this.registration;
  }

  private PluginClassLoader getPluginClassLoader() {
    return new PluginClassLoader( new File(""), this.getClass().getClassLoader() );
  }

  private IPentahoObjectReference<ClassLoader> getPluginReference() {
    final PluginClassLoader pluginClassLoader = getPluginClassLoader();

    return new SingletonPentahoObjectReference.Builder<>( ClassLoader.class )
      .object( pluginClassLoader ).attributes( Collections.singletonMap( PLUGIN_ID_KEY, PLUGIN_ID_VALUE ) ).build();
  }
}
