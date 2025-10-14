
1. Crear el proyecto:
        npm init -y 

2. Instalar los paquetes
        npm install express

3. Crear el index.js

4. Crear la instancia del servidor en el index.
        const express = require("express");
        const app = express();

        app.listen(3000, () => {
        console.log("Levató");
        });

5. Instalar el ORM
        https://sequelize.org/docs/v6/getting-started/


6. Encontrar nuestro string de conexion:

        dialecto://usario:contraseña@host:puerto/base_de_datos

        mysql://root:123456@127.0.0.1:3307/autos_2025_c2
        mysql://root:123456@localhost:3307/autos_2025_c2
        mysql://root:@localhost:3307/autos_2025_c2 // Sin contraseña