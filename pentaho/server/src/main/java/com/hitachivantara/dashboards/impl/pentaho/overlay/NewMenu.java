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
package com.hitachivantara.dashboards.impl.pentaho.overlay;

import org.pentaho.ui.xul.impl.DefaultXulOverlay;

public class NewMenu extends DefaultXulOverlay {
  private final static String OVERLAY = "<overlay id=\"%s\" resourceBundle=\"%s\">%s</overlay>";
  private final static String MENU =
    "<menubar id=\"newmenu\"><menuitem id=\"new-layout\" label=\"%s\" command=\"%s\"></menuitem></menubar>";
  private final static String COMMAND = "mantleXulHandler.openUrl('%s','%s','%s')";

  private String label;
  private String commandUri;

  public NewMenu(String id, String resourceBundle ) {
    super( id, id, null, resourceBundle );
  }

  @Override
  public String getSource() {
    return String.format( OVERLAY, getId(), getResourceBundleUri(), getMenuXml() );
  }

  public void setLabel( String label ) {
    this.label = label;
  }

  public String getLabel() {
    return this.label;
  }

  public void setCommandUri( String uri ) {
    this.commandUri = uri;
  }

  public String getCommandUri() {
    return this.commandUri;
  }

  private String getMenuXml() {
    final String command = String.format( COMMAND, getLabel(), getLabel(), getCommandUri() );

    return String.format( MENU, getLabel(), command );
  }
}
