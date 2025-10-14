# Archivos de entorno

Archivos que guardan variables o infromación que cambian cuando cambia el entrono.

Entorno de desarrollo -> Pruebas del DEV.
Entorno de QA -> Para pruebas y análasis de seguridad
Entorno de testing -> Para puerbas
Entrono de producción -> Lo que usan los usuarios.


        frontend        -> backend
DEV:    localhost:5050  -> localhost:3000  -> STRING_DB="mysql://root:123456@localhost:3307/autos_2025_c2"
QA:     192.481.984.21  -> 189.1020.200.009 -> STRING_DB="mysql://QA:QA@lQA:3307/autos_2025_c2"
PROD:   192.485.684.21  -> 189.1026.500.609 -> STRING_DB="mysql://PROD:PROD@PROD:3306/autos_2025_c2"