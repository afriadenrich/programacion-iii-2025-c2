# Ejercicio para practicar ruteo

## Todas las rutas deben devolver un objeto json con el siguiente formato:

    { mensaje: "..." } 
    // aclarar en el mensaje lo que debería ser devuelto o el error a notificar

## Generar un enrutador que puede ser /libros o /libro. (ambas deben funcionar)

    1. Por GET, devuelve status 200 solo si se recibe el query param "limit". Caso contrario devuelve status 400.

    2. Por POST, devuelve status 201.

    3. Por PUT y DELETE devuelve status 501.
    
    4. Por PATCH devuelve status 405.

    5. Agregar la subruta /id, donde el id sea un parámetro de ruta. Devuelve status 200 si id es numérico y mayor a 0. Devuelve 400 si no cumple con dicha validación.

## Generar una ruta /admin

    Todas las rutas deben devolver un status 401, sin importar el caso.

## Probar todas las rutas en postman

    Guardar todas las pruebas en una collection.

## Desplegar la api

    Probar el postman con el deploy.