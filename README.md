<br />
<p align="center">
  <div align="center">
    <img height="150" src="https://img.freepik.com/free-vector/vector-two-designed-cinema-tickets-close-up-top-view-isolated-white-background_1284-47320.jpg?w=740&t=st=1702879765~exp=1702880365~hmac=eb0c4d800c67bf906f0f2ea97ca0622e2604c9d8c07eef90d8dd8916e2c78d94" alt="blanja" border="0"/>
  </div>
  <h3 align="center">Tickitz</h3>
  <p align="center">
    <a href="https://github.com/arsyad12/tickets_BE"><strong>Explore the docs »</strong></a>
    <br />
  <a href="https://documenter.getpostman.com/view/30080582/2s9Ykn9hXP">View Documentation</a>
    ·
    <a href="https://tickets-be.vercel.app/"">Api Demo</a> -->
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)
  - [Related Project](#related-project)
- [Contributors](#contributors)
  - [Meet The Team Members](#meet-the-team-members)

# About The Project

Tickitz is a movie web application designed for users to discover, explore and enjoy movies. With an intuitive and user-friendly interface, Tickitz offers information about all the films showing, and upcoming ones. 

Tickitz provides you with film details, just click on the image of the film you want to know information about, and of course you can order the film also on the web here, but don't forget to log in first

To create Tickitz, Im using cutting-edge technologies like React Js, Bootstrap, Moment, Axios, PostMan, Redux toolkit, which will provide efficient experience.

## Built With

These are the libraries and service used for building this backend API

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Json Web Token](https://jwt.io)

# Installation

1. Clone this repository

```sh
git clone https://github.com/arsyad12/tickets_BE.git
```

2. Change directory to Be_Blanja

```sh
cd tickets_BE
```

3. Install all of the required modules

```sh
npm install
```

4. Create PostgreSQL database, query are provided in [query.sql](./query.sql)

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

```sh
npm run start
```

- Or run this command for running in development environment

```sh
npm run dev
```


## Documentation

Documentation files are provided in the [docs](./docs) folder

- [Postman API colletion](https://documenter.getpostman.com/view/30080582/2s9Ykn9hXP)
- [PostgreSQL database query](./query.sql)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/30080582/2s9Ykn9hXP)

## Related Project

:rocket: [`Backend Tickitz`](https://github.com/arsyad12/tickets_BE)

:rocket: [`Frontend Tickitz`](https://github.com/arsyad12/Tickets-Web-App)

:rocket: [`Demo Tickitz`](https://tickets-web-app.vercel.app/)
