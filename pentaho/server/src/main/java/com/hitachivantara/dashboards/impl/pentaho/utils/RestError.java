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
package com.hitachivantara.dashboards.impl.pentaho.utils;

public class RestError {
  private String code;
  private String message;

  public RestError( String code, String message ) {
    this.code = code;
    this.message = message;
  }

  public RestError( String code, Exception e ) {
    this( code, e.getMessage() != null ? e.getMessage() : e.toString() );
  }

  public RestError( Exception e ) {
    this( "500", e );
  }

  public String getCode() {
    return this.code;
  }

  public String getMessage() {
    return this.message;
  }
}
