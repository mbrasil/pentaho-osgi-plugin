# Pentaho Layout Editor

## Build
To build the project just run the command below.

At this time the project is not fully integrated into a shipped Pentaho product,
so you will need to manually copy the project assembly into a Pentaho server.

```
$ mvn clean package
```
This command will generate:
 - assemblies/pentaho-feature/target/pentaho-osgi-plugin.kar

## Install Guide

### Pre-requisites:
* Pentaho Server 9.0 or higher

### First time installation:

1. Stop Pentaho server

2. Delete folder ```<pentaho installation directory>/server/pentaho-server/pentaho-solutions/system/karaf/caches```

3. Copy *pentaho-osgi-plugin.kar* **into** ```<pentaho installation directory>/pentaho-solutions/system/karaf/deploy```

4. Edit *fully-qualified-server-url* **inside** ```<pentaho installation directory>/pentaho-solutions/system/server.properties```
    - Change the value from this property to your domain

5. Activate CORS for Pentaho Server
    - ```<pentaho installation directory>/pentaho-solutions/system/pentaho.xml```
      ```xml
      <pentaho-system>
        ...
        
        <cors-requests-allowed>true</cors-requests-allowed>
        <cors-requests-allowed-domains><!-- your domain --></cors-requests-allowed-domains>
      
        ...
      </pentaho-system>
      ```

6. Activate CORS for Ctools
    - ```<pentaho installation directory>/pentaho-solutions/system/cda/settings.xml```
      ```xml
      <settings>
        ...
      
        <allow-cross-domain-resources>true</allow-cross-domain-resources>
       	<cross-domain-resources-whitelist><!-- your domain --></cross-domain-resources-whitelist>
      
        ...
      </settings>
      ```

    - ```<pentaho installation directory>/pentaho-solutions/system/pentaho-cdf/settings.xml```
      ```xml
      <settings>
        ...
      
        <allow-cross-domain-resources>true</allow-cross-domain-resources>
        <cross-domain-resources-whitelist><!-- your domain --></cross-domain-resources-whitelist>
      
        ...
      </settings>
      ```

    - ```<pentaho installation directory>/pentaho-solutions/system/pentaho-cdf-dd/settings.xml```
      ```xml
      <settings>
        ...
      
        <allow-cross-domain-resources>true</allow-cross-domain-resources>
        <cross-domain-resources-whitelist><!-- your domain --></cross-domain-resources-whitelist>
      
        ...
      </settings>
      ```

7. Start Pentaho Server

8. Access Pentaho User Console (PuC) and start using Layout Editor, by going to 'File > New > Layout'

### Update installation:

1. Stop Pentaho server

2. Delete folder ```<pentaho installation directory>/server/pentaho-server/pentaho-solutions/system/karaf/caches```

3. Copy *pentaho-osgi-plugin.kar* **into** ```<pentaho installation directory>/pentaho-solutions/system/karaf/deploy```
