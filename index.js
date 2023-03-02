
// http://localhost:2000/limit


const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./api.yaml");
const app = express();
app.use(express.json());
app.use("/limit", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

app.get("/string", (req, res) =>{
    res.status(200).send('This is string');
});

app.get("/user", (req, res) => {
  const obj ={id: 1, name: "Bappa Saha"}
  res.status(200).send(obj);
});



app.listen(2000, () => console.log("Server is Running on port 2000"));



// var users = [
//   { id: 1, name: "Tom, Cruise" },
//   { id: 2, name: "John Cena" },
// ];






// app.get("/users/:id", (req, res) => {
//   res.status(200).send(users.find((x) => x.id === parseInt(req.params.id)));
// });

// app.post("/create", (req, res) => {
//   users = [req.body, ...users];
//   res.send(users);
// });

// app.get("/usersQuery", (req, res) => {
//   res.send(users.find((x) => x.id === parseInt(req.query.id)));
// });

// app.post("/upload", (req, res) => {
//   const file = req.files.file;
//   let uploadPath = __dirname + "/upload/" + "file" + Date.now() + ".jpg";
//   file.mv(uploadPath, (err) => {
//     if (err) {
//       return res.send(Err);
//     }
//   });
//   res.send(200);
// });

// app.listen(9000, () => console.log("Up & RUnning"));