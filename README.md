# Entorno de desarrollo desde 0

> para **VanillaJS**, sin ningún framework de moda (Angular, React, Vue)
> incluye:

- [x] Server
- [x] Automatización
- [x] Transpilación
- [x] Bundling
- [x] Linting
- [x] Testing
- [ ] Integración Contínua

1. Server
   ```json
   "express": "4.17.1"
   ```
2. Automatización
   ```json
   "scripts": {
      "start": "babel-node ./src/server/server.js",
      "lint": "eslint ./src",
      "lint:fix": "eslint ./src --fix",
      "test": "jest --watch"
    },
   ```
3. Transpilación
   ```json
    "@babel/cli": "7.8.4",
    "@babel/core": "7.9.0",
    "@babel/node": "7.8.7",
    "@babel/preset-env": "7.9.5",
   ```
4. Bundling
   ```json
    "webpack": "4.42.1",
    "webpack-dev-middleware": "3.7.2"
   ```
5. Linting
   ```json
    "eslint": "6.8.0",
    "prettier": "2.0.4",
   ```
6. Testing
   ```json
    "jest": "25.3.0",
   ```
