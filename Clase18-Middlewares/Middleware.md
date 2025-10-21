# Middlewares 

## ¿Qué es un middleware?

"En el medio"

Permite ejecutar código entre dos momentos.

"Tomo algo, hago algo, paso a lo siguiente"

## En express

- Ejecutar código antes de cualquier ruta de la app, o conjunto de rutas o ruta particular.

- Modificar la req y res.

- Cortar / Terminar la ejecución y devolver una respuesta.

- Pueden hacer la llamada para que se ejecute el siguiente middleware (MW)

## Ejemplo

-> Petición -> Cors -> Express.json -> MW guarda en la DB que se hizo una petición -> MW valida los datos del body -> MW Revisa qué usuario hace la petición -> Hace la acción.