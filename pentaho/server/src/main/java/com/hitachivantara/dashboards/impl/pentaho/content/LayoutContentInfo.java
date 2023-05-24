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
package com.hitachivantara.dashboards.impl.pentaho.content;

import org.pentaho.platform.api.engine.IContentInfo;
import org.pentaho.platform.api.engine.IPluginOperation;

import java.util.List;

public class LayoutContentInfo implements IContentInfo {
  private String extension;

  private String mimeType;

  private String iconUrl;

  private List<IPluginOperation> operations;

  @Override
  public String getExtension() {
    return this.extension;
  }

  @Override
  public String getTitle() {
    return "layout-editor";
  }

  @Override
  public String getDescription() {
    return "Layout Editor Plugin";
  }

  @Override
  public String getMimeType() {
    return this.mimeType;
  }

  @Override
  public String getIconUrl() {
    return iconUrl;
  }

  @Override
  public List<IPluginOperation> getOperations() {
    return this.operations;
  }

  public void setOperations( List<IPluginOperation> operations ) {
    this.operations = operations;
  }

  @Override
  public boolean canImport() {
    return true;
  }

  @Override
  public boolean canExport() {
    return true;
  }

  public void setExtension( String extension ) {
    this.extension = extension;
  }

  public void setMimeType( String mimeType ) {
    this.mimeType = mimeType;
  }

  public void setIconUrl( String iconUrl ) {
    this.iconUrl = iconUrl;
  }
}
