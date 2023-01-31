# Movies App NodeMongo

Movie centeres una simple app web en la cual podran navegar y ver distintas carteleras de peliculas. Esta app fue creada con tecnologias JS

![](docs/screenshot.png)

### Installation

```sh
git clone https://github.com/MatiasCantero/proyectofinal
cd proyecto-final
npm i
npm run dev # run in development mode
npm start # run in production mode
```

> You need to have Mongodb installed Locally or stablish a MONGODB_URI environment variable in order to connect to any mongodb instance (using Mongodb Atlas for example)

### Environment Variables

This app needs the following environment Variables

- `MONGOATLAS` this is the Mongodb URI string
- `PORT` the server http port for the application
- `NODE_ENV` node environment

### docker-compose

The most easy way to install the entire project is using docker-compose:

```shell
git clone https://github.com/MatiasCantero/proyectofinal
cd nodejs-reviews-app
docker-compose up
```

### Default User

when the app is lauched, this will create an Admin user with the following credentials:

- email: `test@localhost`
- password: `testpassword`





