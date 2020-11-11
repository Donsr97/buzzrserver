# buzzrserver



Ya se la saben:
Asegurense de tener su servidor sql corriendo. el server NO tiene contraseña, así que pueden 
ponerle una SI ustedes quieren, pero también deberán cambiarla en las configuraciones del server (yo recomiendo que solo no le pongan contraseña y ya) 


Yo estuve simulando todo con XAMPP y POSTMAN, todos los metodos funcionan, aunque es posible que se me haya ido algo.

Puntos importantes:

1.- No puse más que una Unique key (y las primary keys) en la tabla de usuarios porque no quería que tuvieran restricciones muy "pickys" a la hora de estar metiendo información

2.- La tabla de usuario tiene ID y Usuario, ambos son unicos, pero es el ID el que se utiliza para encontrarlos.

3.- La tabla de post tiene ID (del post) ID del usuario que lo sube y el texto del post. La columna del ID de usuario no es una foreign key por lo mismo que les decía en el primer punto, no quiero que les aviente errores de restricciones y esas cosas.

4.- Basicamente toda la info es accesible. Cuenta con metodos para acceder de uno en uno o agarrar todos de una.
Metodos:

FindOne: Le das el ID y te devuelve el post/usuario con ese ID

Create: Hace un post con el objeto que le den

findAll: Regresa TODOS los usuarios/posts en la base de datos

FindUsers: (Este solo lo tiene los posts) regresa los posts con el ID del usuario

Update: Hace un PUT al objeto con el ID que se le de

Delete: Borra el objeto con el ID que se le de

DeleteAll: Borra todos los posts o todos los usuarios


Para iniciar/correr el server. 

      1.- npm install

      2.- node server.js
