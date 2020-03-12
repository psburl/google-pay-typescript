This project aims to provider a TypeScript encapsulation to google pay api. 

Google provides google pay api in JavaScript and these documentation could be found [here](https://developers.google.com/pay/api/web/overview).

This encapsulation depends on:

### Dependencies ###

* [@types/googlepay](https://www.npmjs.com/package/@types/googlepay) npm package 

### How do I get set up? ###

To run this project locally, first of all you need to clone this repository, the project had the following requirements: 

#### Requirements ####

* npm
* webpack and webpack-dev
* docker
* docker compose

The second step its to run the folowing command to install dependencies:

```
npm install --save @types/googlepay
```

After that, run the following command to generate an updated bundle: 

```
webpack
```

now you can run the following command to up your container: 

```
docker-compose up -d
```

An important issue its that you need to install a SSL certificate to access this site on a HTTPS environment. That is required because Google Pay only runs on HTTPs. 