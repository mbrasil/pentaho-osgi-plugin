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

import org.apache.commons.logging.Log;
import org.pentaho.platform.engine.services.solution.SimpleContentGenerator;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;
import java.io.OutputStream;

public class LayoutContentGenerator extends SimpleContentGenerator {
  private String redirectUrl;

  @Override
  public void createContent( OutputStream outputStream ) throws Exception {
    getHttpResponse().sendRedirect( getRedirectUrl() + getLayoutPath() );
  }

  @Override
  public String getMimeType() {
    return MediaType.TEXT_HTML;
  }

  @Override
  public Log getLogger() {
    return null;
  }

  public String getRedirectUrl() {
    return this.redirectUrl;
  }

  public void setRedirectUrl( String url ) {
    this.redirectUrl = url;
  }

  HttpServletResponse getHttpResponse() {
    return (HttpServletResponse) parameterProviders.get( "path" ).getParameter( "httpresponse" );
  }

  String getLayoutPath() {
    return parameterProviders.get( "path" ).getStringParameter( "path", "" );
  }
}
