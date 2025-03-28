import express, { json } from "express";
import cors from "cors";
import { conectandoSmtp } from "./Enviar_email.js";
import { read, Insert, Verificar, Checar_key } from './database/crud.js'; // Caminho correto considerando a estrutura
import { templateAlerta, templateBemVindo, templatePlano } from "./templates_email/templates_email.js";
import { enviarPromocao } from "./orcamento.js";
const app = express();

// Configuração mais robusta do CORS
const corsOptions = {
    origin: 'https://createc.com.br',
    methods: ['POST', 'PUT', 'OPTIONS'], // Adicione OPTIONS
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    optionsSuccessStatus: 200 // Para navegadores antigos
};

// A ordem dos middlewares é importante!
app.use(cors(corsOptions));
app.use(json()); // Body parser depois do CORS

// Adicione tratamento explícito para OPTIONS
app.options('*', cors(corsOptions));



app.post("/", async(request, response ) => {
    try {
        
    let data = request.body
    if(!data){
	    return response.status(403).send({error:403,Message:"Chave Invalido"})
}
    if(!data["key"] || !data["email"] || !data["nome"] || !data["texto"] || !data["telefone"]){
        return response.status(403).send({error:403,Message:"dados invalidos"})
    }
    if(data["key"] != "5938237AB"){

        return response.status(403).send({error:403,Message:"Chave Invalido"})
    }


    if (!data["email"] || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data["email"])) {
        return response.status(400).json({ error: 403, message: "Email Inválido" });
    }

    if(data["nome"]?.length > 60 || data["nome"]?.length < 2){

        return response.status(403).send({error:403,Message:"Nome Invalido"})
    }
    if(data["texto"]?.length > 70 || data["texto"]?.length < 1){

        return response.status(403).send({error:403,Message:"Texto Invalido"})
    }
    if(data["telefone"]?.length < 4 || data["telefone"]?.length > 15){

        return response.status(403).send({error:403,Message:"Numero Invalido"})
    }
    let verificacao = await Verificar(data["email"])

    if(verificacao == undefined){
        Insert(data["nome"],data["email"],data["telefone"])

    }
        console.log(data["nome"])
        conectandoSmtp("Createc contato@createc.com.br",data["email"],"Solicitação de Orçamento ",await templateBemVindo(data["nome"]))
        conectandoSmtp(" Solicitação de Orçamento contato@createc.com.br","suporte@createc.com.br","Solicitação de Orçamento ", await templateAlerta(data["nome"],data["telefone"],data["email"],data["texto"]),"gmail")

        return response.status(200).send({Success:"Email recebido com sucesso"})
        
    }catch (error) {
        return response.status(500).send({Success:"Erro no servidor"})

            
    }
    
})
app.post("/:plano", async (request,response) => {
    try{
    let planos = request.params.plano
    let data = request.body
    if(!data){
	    return response.status(403).send({error:403,Message:"Chave Invalido"})
}
    if(!data["key"] || !data["email"] || !data["nome"] || !data["texto"] || !data["telefone"]){
        return response.status(403).send({error:403,Message:"dados invalidos"})
    }
    if(data["key"] != "5938237AB"){

        return response.status(403).send({error:403,Message:"Chave Invalido"})
    }


    if (!data["email"] || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data["email"])) {
        return response.status(400).json({ error: 403, message: "Email Inválido" });
    }

    if(data["nome"]?.length > 60 || data["nome"]?.length < 2){

        return response.status(403).send({error:403,Message:"Nome Invalido"})
    }
    if(data["texto"]?.length > 70 || data["texto"]?.length < 1){

        return response.status(403).send({error:403,Message:"Texto Invalido"})
    }
    if(data["telefone"]?.length < 4 || data["telefone"]?.length > 15){

        return response.status(403).send({error:403,Message:"Numero Invalido"})
    }
    let verificacao = await Verificar(data["email"])

    if(verificacao == undefined){
        Insert(data["nome"],data["email"],data["telefone"])

    }
        console.log(data["nome"])
        conectandoSmtp("Createc contato@createc.com.br",data["email"],"Solicitação de Orçamento ",await templateBemVindo(data["nome"]))
        conectandoSmtp(" Solicitação de Orçamento contato@createc.com.br","suporte@createc.com.br","Solicitação de Orçamento ", await templatePlano(data["nome"],planos,data["telefone"],data["texto"],data["email"]),"gmail")

        return response.status(200).send({Success:"Email recebido com sucesso"})
        
    }catch (error) {
        return response.status(500).send({Success:"Erro no servidor"})

            
    }

})

app.post("/promocao", async(request, response ) => {
    try {
    let dados = request.body
    console.log(dados)
    if(!dados["titulo"] || !dados["key"]){
        return response.status(403).send({error:403,Message:"dados invalidos"})
    }
    let verificacao = await Checar_key(dados["key"])
    if(verificacao == undefined){
        console.log(verificacao)
        return response.status(403).send({Error:403,Message:"Chave API Invalida"})
    }

    if(dados["titulo"].length > 30 || dados["titulo"].length < 1){
        return response.status(403).send({Error:403,Message:"Chave API Invalida"})

    }

    if(await enviarPromocao(data["nome"] + ", temos algo especial para você! ","22/05/2025","CREATEC5")){
        return response.status(200).send({Success:200,Message:"Promocao Enviada com sucesso"})
    }
    }catch{
        return response.status(500).send({Error:500,Message:"Ocorreu um erro no servidor"}) }})




export default app;
