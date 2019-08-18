## Introduction

This is a CRUD = {Create, Read, Update, Delete} Application created with use of es7 Javascript, Babel and Webpack. 

## Live Demo
https://todo-app-rehaan.netlify.com/

![todo](https://user-images.githubusercontent.com/20107730/63225438-a3248400-c1ed-11e9-88fb-1aa325c09a4e.PNG)



## Installation
This command will install all the npm_modules.
```bash
npm install
```
## Running In Local Machine
```bash
npm run dev-server
```

## Libraries Used
```bash
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "dev-server": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "live-server": "^1.2.0",
    "uuid": "^3.2.1",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.3"
  }
}


```

## Important
-> If you perform any changes in the src/ directory, make sure to run
```bash
npm run build
```
This will generate two bundle.js[index.js] file in public/scripts .

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
