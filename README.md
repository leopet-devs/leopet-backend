# Back

Backend del proyecto de Materia Integradora
Grupo #3

## Instalacion

1. git clone "url_repositorio"
2. Crear DB, en la carpeta **scripts** esta el script para crear la DB en **mysql**
3. Instalar dependencias **npm i**
4. Correr el proyecto **npm start**

## Consideraciones

Solicitar archivo **.env** para las varibles de entorno


## Jenkins CI/CD
1. Levantar Jenkins con `sudo systemctl start jenkins`
2. Ingresar a la url `http://localhost:8080/`
3. Ingresar con el usuario `admin` y la contraseña que se encuentra en el archivo `/var/lib/jenkins/secrets/initialAdminPassword` 
4. Levantar el servidor de node con `npm start`
5. Exponer el servidor de node con `ngrok http --domain=piglet-apparent-scorpion.ngrok-free.app 80`
6. Dirigirse a la url del paso 5 para usar la herramienta.
