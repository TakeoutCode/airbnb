# Airbnb
### Descripción
##### _Este proyecto es una réplica total de Airbnb, diseñada para brindarte una experiencia similar y familiar. Aquí encontrarás todas las funcionalidades principales de Airbnb, lo que te permitirá autenticarte con tu cuenta, marcar alojamientos como favoritos, realizar reservas y, además, tendrás la capacidad de agregar tus propias propiedades al sistema._

##### Visita la página web oficial de [Airbnb](https://airbnb.takeoutcode.com/)

### Tecnologías usadas
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

# Requisitos
- Node.js
- 
> Para este proyecto se utilizó yarn como administrador de paquetes.
> En caso de no tener yarn, puedes instalarlo con el siguiente comando:

```
npm install --global yarn
```
#### _Instalación del repositorio_
> Clonar Repositorio con HTTPS:
```
git clone https://github.com/TakeoutCode/airbnb.git
```

> Clonar Repositorio con SSH:
```
git clone git@github.com:TakeoutCode/airbnb.git
```
> En caso de que se haga un fork, instalar con el enlace que se generó.

#### _Instalación de dependencias_

```
yarn install
```
#### _Renombra el archivo para las variables de entonrno_
En la raiz del proyecto, renombra el archivo **.env.template** a **.env.local**

| Variable de entorno | Ejemplo | Descripcion |
| --- | --- | ---|
MONGO_URL= | mongodb+srv://<username>:<password>@<cluster> | [MongoDB](https://www.mongodb.com/)
NEXTAUTH_SECRET= | cualquier-seed-para-NEXTAUTH | Secret de nuestra authentication
GITHUB_ID= | id-github | ID de nuestro proyecto que nos proporciona [Github](https://github.com/settings/apps)
GITHUB_SECRET= | secret-github | Secret que nos proporciona [GitHub](https://github.com/settings/apps)
GOOGLE_CLIENT_ID= | id-google | ID de nuestro proyecto que nos proporciona [Google](https://console.cloud.google.com/)
GOOGLE_CLIENT_SECRET= | secret-github | Secret que nos proporciona [Google](https://console.cloud.google.com/)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= | ncloud-name | Cloud Name que nos proporciona [Cloudinary](https://cloudinary.com/)


Una vez que tengas las claves, agrega cada una a su respectivo campo sin agregar espacios ni comillas de ningún tipo.

#### _Inicializar app_
```
  yarn dev
```

# Contribuir
- Si deseas contribuir al desarrollo de Airbnb, siéntete libre de hacer un fork de este repositorio y enviar un pull request con tus mejoras.

# Autor
- Airbnb fue desarrollado por **Braulio Quezada @TakeoutCode**.- 

# Licencia
- Airbnb se distribuye bajo la licencia (MIT). Para más información, revisa el archivo LICENSE en este repositorio.

**_Espero que esta información te sea útil. Si necesitas más ayuda, no dudes en preguntar. ¡Que tengas un buen día!_**
