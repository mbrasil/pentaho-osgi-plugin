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
package com.hitachivantara.dashboards.api.pentaho.access;

import java.util.Collection;

/**
 * A dashboard store provides a place where the available {@link IDashboard dashboards} can be accessed from.
 */
public interface IDashboardStore {

  /**
   * Registers a dashboard in the store.
   *
   * If the dashboard does not have an {@link IDashboard#getId() identifier} then the store assigns
   * a new one to the dashboard.
   *
   * If there is a dashboard with the same identifier of the passed in {@code dashboard} then the stored
   * dashboard for that identifier is substituted with the new object.
   *
   * @param dashboard the dashboard to be stored.
   *
   * @return the identifier of the dashboard.
   */
  String add( IDashboard dashboard );

  /**
   * Gets a stored dashboard.
   *
   * @param identifier the identifier of the dashboard to get.
   *
   * @return the stored dashboard if the given identifier is stored, null otherwise.
   */
  IDashboard get( String identifier );

  /**
   * Updates a stored dashboard.
   *
   * @param identifier the identifier of the dashboard to update.
   * @param dashboard the dashboard to be updated with.
   *
   * @return the stored dashboard if the given identifier is stored, null otherwise.
   */
  IDashboard update( String identifier, IDashboard dashboard );

  /**
   * Unstores a dashboard from the store.
   *
   * @param identifier the identifier of the dashboard to unstore.
   *
   * @return true if the dashboard was successfully removed, false if no dashboard was stored for the
   * specified {@code identifier}.
   */
  boolean remove( String identifier );

  /**
   * List of currently stored dashboards.
   *
   * @return the stored dashboards (read only).
   */
  Collection<IDashboard> list();
}
