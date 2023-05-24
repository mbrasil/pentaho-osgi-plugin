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

import com.hitachivantara.dashboards.impl.pentaho.utils.RepositoryAccess;
import org.pentaho.platform.plugin.services.importexport.StreamConverter;

public class LayoutStreamConverter extends StreamConverter {
  public LayoutStreamConverter( RepositoryAccess access ) {
    super( access.getRepository() );
  }
}
