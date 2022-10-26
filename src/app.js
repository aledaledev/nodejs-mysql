//const express = require('express')  //modulos common js != modulos de ecmascript
import express from "express"; //node version > 16
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
//los datos que recibe los convierte a json
app.use(express.json());

app.use(indexRoutes);
//usar ruta importada con metodos ya implementados
//antes de todas esas rutas va haber una en comun
app.use("/api/employees", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;