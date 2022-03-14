# Swapi Endpoint - Serverless
Este proyecto tiene como finalidad:
 - Generar un endopoint GET para obtener propiedades adaptadas del api SWAPI.
 - Generar un endpoint POST para almacenar data en DynamoDB, y GET para visualizar los datos almacenados.
 - Elaborado con el framework Serverless con NodeJs.

## Instalacion
Realice una clonacion del proyecto con ayuda de git, mediante el siguiente comando
```
   git clone https://github.com/cjeanMa/serverless_swapi.git
```
Ingrese a la carpeta del proyecto y realice la instalacion de dependencias;
 ```
    npm install 
 ```
Para la instalacion y prueba del proyecto es necesario tener:
 - Tener instalado serverless de manera global, en caso no lo tenga, usar el siguiente script
 ```
    npm install -g serverless
 ```
 - Tener un usuario aws con privilegios sobre lambda, dynamoDB, s3, apiGateway, o por defecto uno con privilegios de admin, con los credenciales del usuario usaremos el siguiente script:
 ```
 serverless config credentials --provider aws --key "ID_DE_USUARIO" --secret "SECRET_KEY_USUARIO" --profile swapi-deploy-aws
 ```
 - Para el despliegue puede usar uno de estos comandos
 ```
 serverless deploy
   or
 npm run deploy
 ```

## Resultados

 Se generarán 3 endpoints, de los cuales:
 - El endpoint get **'/swapi'** puede agregarse paginacion, mediante el query param 'page'; **'/swapi?page=2'**.
 - El endpoint post **'/employees'** acepta un json con dos parametros **{"nombre": "XXXX", "apellido": "XXXX"}**.
 - El endpoint get **'/employees'** funciona sin argumentos adicionales.

## Testing
Se generó los archivos para testear las funciones helpers que colaboran con los controllers, para visualizar su funcionamiento usar el siguiente comando;
```
npm test
```
