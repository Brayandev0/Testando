import { Database } from "./config_db.js";
import dayjs from "dayjs";

export async function Insert(nome,email,numero) { 
    await Database().then(db => db.run("INSERT INTO Usuarios (nome, numero,email,data) VALUES (?,?,?,?)",[nome,numero,email,`${dayjs().format('YYYY-MM-DD HH:mm:ss')}`]))
    
}
export async function read(){
    await Database().then(db => db.all("SELECT * FROM Usuarios")).then(a => console.log(a[0]["nome"]))
}

export async function Verificar(email) {                                           
    return await Database().then(db => db.get("SELECT * FROM Usuarios WHERE email = ?",[email]))
    
}
export async function Checar_key(chave){
    return await Database().then(db => db.get("SELECT chave INTO Keys WHERE key = ?",[chave]))
}
    
