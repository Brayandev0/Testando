import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Servir arquivos estáticos corretamente
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.render("index");
});

export default app;
