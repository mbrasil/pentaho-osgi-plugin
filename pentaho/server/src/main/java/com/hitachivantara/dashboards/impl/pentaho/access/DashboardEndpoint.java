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
import com.hitachivantara.dashboards.impl.pentaho.utils.RestError;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Endpoint for accessing the list of stored dashboards.
 */
@Path( "/dashboards" )
public class DashboardEndpoint {
  private IDashboardStore dashboardStore;

  /**
   * Sets the dashboard Store the endpoint will use.
   *
   * @param dashboardStore Data source Store service
   */
  public void setDashboardStore( IDashboardStore dashboardStore ) {
    this.dashboardStore = dashboardStore;
  }

  @GET
  @Produces( MediaType.APPLICATION_JSON )
  public Response listDashboards() {
    try {
      return Response.ok( this.dashboardStore.list() ).build();
    } catch ( Exception e ) {
      RestError error = new RestError( e );
      return Response.serverError().entity( error ).build();
    }
  }

  @GET
  @Path( "/{dashboard-path: .+}" )
  @Produces( MediaType.APPLICATION_JSON )
  public Response readDashboard( @PathParam( "dashboard-path" ) String dashboardPath ) {
    try {
      final IDashboard dashboard = getDashboard( dashboardPath );
      if ( dashboard == null ) {
        return Response.status( Response.Status.NOT_FOUND ).build();
      }

      return Response.ok( dashboard ).build();
    } catch ( Exception e ) {
      RestError error = new RestError( e );

      return Response.serverError().entity( error ).build();
    }
  }

  @PUT
  @Path( "/{dashboard-path: .+}" )
  @Consumes( MediaType.APPLICATION_JSON )
  @Produces( MediaType.APPLICATION_JSON )
  public Response updateDashboard( @PathParam( "dashboard-path" ) String dashboardPath,
                                   IDashboard dashboard ) {
    try {
      if ( dashboardPath == null ) {
        return Response.status( Response.Status.NOT_FOUND ).build();
      }

      final IDashboard storedDashboard = getDashboard( dashboardPath );
      if ( storedDashboard == null ) {
        this.dashboardStore.add( dashboard );

        return Response.ok( dashboardPath ).build();
      }

      this.dashboardStore.update( dashboardPath, dashboard );

      return Response.ok().build();
    } catch ( Exception e ) {
      RestError error = new RestError( e );

      return Response.serverError().entity( error ).build();
    }
  }

  @Path( "/{dashboard-path: .+}" )
  @DELETE
  public Response deleteDashboard( @PathParam( "dashboard-path" ) String dashboardPath ) {
    try {
      final IDashboard dashboard = getDashboard( dashboardPath );
      if ( dashboard == null ) {
        return Response.status( Response.Status.NOT_FOUND ).build();
      }

      this.dashboardStore.remove( dashboardPath );

      return Response.noContent().build();
    } catch ( Exception e ) {
      RestError error = new RestError( e );

      return Response.serverError().entity( error ).build();
    }
  }

  private IDashboard getDashboard( String path ) {
    if ( path == null ) {
      return null;
    }

    if ( !path.startsWith( "/" ) ) {
      path = "/" + path;
    }

    return this.dashboardStore.get( path );
  }
}
