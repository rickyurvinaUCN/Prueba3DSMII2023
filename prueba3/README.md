# Introducción
Para la instalación del proyecto se necesita:

```bash
    git clone https://github.com/VicenteA18UCN/ALARCON_VICENTE_PRACTICA3.git
```
# Instalación Backend

**Importante:**
Abrir el proyecto en el Visual Studio Code, copiar el _".env.example"_ y pegarlo en el proyecto. O cambiar el nombre de _".env.example"_ a _".env"_.

Una vez hecho eso, proceder a abrir la consola y ejecutar los siguientes comandos en orden:

```bash
    cd backend
    composer install
    php artisan key:generate
```

Luego de eso, modificar las credenciales de la base de datos en el .env:

```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT="puerto"
    DB_DATABASE="nombre de la base de datos"
    DB_USERNAME=root
    DB_PASSWORD="contraseña"
```

Finalmente en la consola ejecutan el siguiente comando para migrar la base de datos junto con las semillas:

```bash
    php artisan migrate --seed
```

Y para ejecutar el proyecto:

```bash
   php artisan serve --host=0.0.0.0
```

# Instalación Frontend

Para la instalación del frontend es necesario tener instalado Node.js.

**Importante:**
Abrir el proyecto en el Visual Studio Code.
Una vez instalado proceder a lo siguiente en una consola de comandos en la carpeta raíz del proyecto:

```bash
    npm install
    npx expo start --web
```


