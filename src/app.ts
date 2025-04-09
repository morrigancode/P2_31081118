import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configura EJS como el motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Ruta para la página inicial
app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        nombre: "Luisa Mota",
        cedula: "31081118",
        seccion: "3"
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});