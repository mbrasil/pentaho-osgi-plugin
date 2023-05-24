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

import com.hitachivantara.dashboards.api.component.access.connector.model.IBaseComponent;
import com.hitachivantara.dashboards.api.component.access.IDashboardComponentStore;
import com.hitachivantara.dashboards.api.component.access.IDashboardComponentType;
import com.hitachivantara.dashboards.impl.pentaho.utils.RestError;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Endpoint for accessing the list of stored components.
 */
@Path( "/components" )
public class DashboardComponentEndpoint {
  private IDashboardComponentStore componentStore;

  /**
   * Sets the component Store the endpoint will use.
   *
   * @param componentStore Data source Store service
   */
  public void setDashboardComponentStore( IDashboardComponentStore componentStore ) {
    this.componentStore = componentStore;
  }

  @GET
  @Produces( MediaType.APPLICATION_JSON )
  public Response listComponents( @QueryParam( "type" ) @DefaultValue( "ALL" ) String type ) {
    try {
      final IDashboardComponentType componentType = IDashboardComponentType.valueOf( type.toUpperCase() );

      return Response.status( Response.Status.OK )
        .entity( this.componentStore.list( componentType ) ).build();
    } catch ( Exception e ) {
      final RestError error = new RestError( e );

      return Response.serverError().entity( error ).build();
    }
  }

  @GET
  @Path( "/{component-uid : .+}" )
  @Produces( MediaType.APPLICATION_JSON )
  public Response getComponent( @PathParam( "component-uid" ) String componentId ) {
    try {
      final IBaseComponent component = this.componentStore.get( componentId );
      if ( component == null ) {
        return Response.status( Response.Status.NOT_FOUND ).build();
      }

      return Response.ok( component ).build();
    } catch ( Exception e ) {
      final RestError error = new RestError( e );

      return Response.serverError().entity( error ).build();
    }
  }

}
