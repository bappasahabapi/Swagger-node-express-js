`Install Packages:`

    npm i nodemon swagger-ui-express express yamljs

`Make`  **index.js**

```js
// http://localhost:2000/limit

const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./api.yaml");
const app = express();
app.use(express.json());
app.use("/limit", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));


app.listen(2000, () => console.log("Server is Running on port 2000"));

```