#!/bin/bash

# Script para configurar y ejecutar la aplicación

# configuraciones de la aplicacion
NOMBRE_APP_BACKEND="notes"
NOMBRE_APP_FRONTEND="Frontend"
DB_HOST="localhost"
DB_PORT="8889"
USUARIO_DB="root"
CONTRASENA_DB="root"
NOMBRE_DB="dbnotes"
PUERTO_BACKEND=300
PUERTO_FRONTEND=4200

# configuracion de la base de datos
configurar_base_datos() {
    echo "Configurando el esquema de la base de datos..."
    mysql -h $DB_HOST -P $DB_PORT -u $USUARIO_DB -p$CONTRASENA_DB $NOMBRE_DB < "$(dirname "$0")/dbnotes.sql"
}

# Función para precrear archivos de configuración u otras configuraciones previas
preconfiguracionfront() {
    echo "Realizando tareas de preconfiguración..."
    npm install -g @angular/cli
}

# Función para instalar dependencias
instalar_dependenciasback() {
    echo "Instalando dependencias..."   
    #BACKEND
    npm install cors
    npm install express
    npm install mysql2
    npm install sequelize
    npm install validator
}

# Función para instalar dependencias
instalar_dependenciasfront() {
    echo "Instalando dependencias..."
    #FRONT END
    npm install --save @angular/animations@^16.2.0 
    npm install --save @angular/common@^16.2.0 
    npm install --save @angular/compiler@^16.2.0 
    npm install --save @angular/core@^16.2.0 
    npm install --save @angular/forms@^16.2.0 
    npm install --save @angular/platform-browser@^16.2.0 
    npm install --save @angular/platform-browser-dynamic@^16.2.0 
    npm install --save @angular/router@^16.2.0 
    npm install --save bootstrap@^5.3.2 
    npm install --save rxjs@~7.8.0 
    npm install --save tslib@^2.3.0 
    npm install --save zone.js@~0.13.0

}

# Función para ejecutar la aplicación
ejecutar_app_back() {
    echo "Ejecutando la aplicación..."
    npm start &
}

ejecutar_app_front() {
    echo "Ejecutando la aplicación..."
    ng serve -o &
}

# Ejecución principal
echo "Configurando $NOMBRE_APP_BACKEND..."
echo "Configurando $NOMBRE_APP_FRONTEND..."

# Llama a tus funciones de configuración
configurar_base_datos
preconfiguracionfront
instalar_dependenciasback
instalar_dependenciasfront

# Ejecuta la aplicación
ejecutar_app_back
ejecutar_app_front

echo "Configuración completada. $NOMBRE_APP_BACKEND está ahora en ejecución."
echo "Configuración completada. $NOMBRE_APP_FRONTEND está ahora en ejecución."
