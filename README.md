Author : Ashima Arora

# Contacts List Example
### Last Update: 2/28/2019
This program is technical exercise Contact MEAN stack.

<p align="center">
    <img width="700" height="440" src="./src/assets/pics/home.PNG"><br>
</p>
<p align="center">
    <img width="700" height="440" src="./src/assets/pics/contactList.png"><br>
</p>
<p align="center">
    <img width="700" height="440" src="./src/assets/pics/datePicker.PNG"><br>
</p>
<p align="center">
    <img width="700" height="440" src="./src/assets/pics/contactDetail.PNG"><br>
</p>

## Versions
* MongoDB v3.6.2 (Mongoose v5.0.3)
* Express v4.16.2
* Angular v5.2.3
* Node.js v9.5.0


### Installation
1. Run `yarn install` to install dependencies
1. Configure your keys file `config/keys.js`
    * From the root directory, create the keys file `touch config/keys.js`
    * Enter your mongoURI for `MongoDB` into `keys.js`

        ```typescript
        module.exports = {
        mongoURI: '<your-mongodb-url-goes-here>',
        };
        ```
1. Start your local MongoDB instance
1. Choose to run the development or production server
    * Development
        * Front End (Angular)
            * Run `ng serve`, and navigate to `http://localhost:4200/`. 
        * Back End (MongoDB, Express, Node.js)
            * Run `yarn run dev`, and navigate to `http://localhost:3000/`.
    * Production
        * Run `yarn run build`, and navigate to `http://localhost:3000/`.

## Built-in scripts
* `yarn run dev`
    * Builds the Angular project without build optimization into the `dist/` folder
    * Runs the `server.js` node app
* `yarn run build`
    * Builds the Angular project into the `dist/` folder
    * Runs the `server.js` node app

## Installed Packages
### Front-end
* [Angular 5](https://angular.io/)
* [Bulma CSS Framework v0.62](https://bulma.io/)
* [Font-Awesome v5.0.6](https://fontawesome.com/)
* [Angular Material](https://material.angular.io/) For data table supports sorting, pagination and filtering.

### Back-end
* [Express](https://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)
* [Body-Parser](https://github.com/expressjs/body-parser)

### Development
* [Angular CLI v1.6.7](https://github.com/angular/angular-cli)
* [Morgan Logging library](https://github.com/expressjs/morgan)
* [Typescript](https://www.typescriptlang.org/)
