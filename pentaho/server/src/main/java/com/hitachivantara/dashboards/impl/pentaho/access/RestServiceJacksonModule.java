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

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

import com.hitachivantara.dashboards.api.pentaho.access.IDashboard;

public class RestServiceJacksonModule {
  public static ObjectMapper getMapper() {
    SimpleModule module = new SimpleModule( "Dashboards Service REST API" );
    module.addAbstractTypeMapping( IDashboard.class, Dashboard.class );

    ObjectMapper mapper = new ObjectMapper();
    mapper.registerModule( module );

    mapper.disable( DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES );
    mapper.setSerializationInclusion( JsonInclude.Include.NON_NULL );

    return mapper;
  }
}
