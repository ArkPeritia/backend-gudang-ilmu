// Import the express module
import generator from "./src/api/index.js";
import express from "express";
import cors from "cors";
import { MikroORM } from "@mikro-orm/postgresql";

// Create an instance of the express application
const app = express();

// Specify a port number for the server
const port = 5000;

app.use(cors());

// Start the server and listen to the port
app.use(express.json());

app.use(express.urlencoded());

app.use('/api', generator());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

MikroORM.init({
  user: 'postgres',
  password: 'mag123gany',
  dbName: 'Gudang-ilmu',
  host: 'localhost',
  port: '5432',
  entities: ['./dist/entities'],
}).then(()=>{
  console.log('db connected');
})

// const data = [
//   {
//     name: "arkan",
//     umur: 18,
//   },
//   {
//     name: "arco",
//     umur: 17,
//   },
//   {
//     name: "nufail",
//     umur: 17,
//   },
// ];

// // membuat API
// app.get("/data", (req, res) => {
//   res.status(200).json(data);
// });

// // ambil param
// app.get("/data/:name", (req, res) => {
//   const name = req.params.name;

//   const dataSpecific = data.filter((x) => x.name == name);
//   res.status(200).json(dataSpecific);
// });

// app.post("/data", (req, res) => {
//   const dataDariUser = req.body
//   res.status(201).json(`nama saya ${dataDariUser.name}, umur saya ${dataDariUser.umur}`);
// });

// app.put("/data/:name", (req, res) => {
//   const name = req.params.name
//   const dataDariUser = req.body

//   const index = data.findIndex((val)=> val.name == name)
//   data[index].name = dataDariUser.name

//   if(index < 0){
//     res.status(404).json({message: 'data tidak ada'})
//   }
  
//   res.status(201).json(data[index]);
// })

// app.delete("/data/:name", (req, res) => {
//   const name = req.params.name

//   const index = data.findIndex((val)=> val.name == name)

//   if(index < 0){
//     res.status(404).json({message: 'data tidak ada'})
//   }
  
//   data.splice(index, 1)

//   res.status(200).json(data);
// })

const data = [
  {
    username: "ark",
    name: "arkan",
    age: 18,
    password: 1234,
    address: "jaktim",
  },
  {
    username: "random",
    name: "fulan",
    age: 20,
    password: 1234,
    address: "jakpus",
  },
  {
    username: "secret",
    name: "fulana",
    age: 19,
    password: 1234,
    address: "jakbar",
  },
];

app.get("/data", (req, res) => {
  const username = req.params.username;

  const dataSpecific = data.filter((x) => x.username == username);
  res.status(200).json({
    result: data
  });
});

app.get("/data/:username", (req, res) => {
  const username = req.params.username;

  const dataSpecific = data.filter((x) => x.username == username);
  res.status(200).json(dataSpecific);
});

app.post("/data", (req, res) => {
  const dataDariUser = req.body
  res.status(201).json(
    `nama saya ${dataDariUser.name}, 
    umur saya ${dataDariUser.age}, 
    username saya ${dataDariUser.username},
    address saya ${dataDariUser.address},
    password saya rahasia`);
});