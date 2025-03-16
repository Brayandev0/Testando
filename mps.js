import express, { json } from "express";
import nodemail from "nodemailer"
import fs from "fs"
import date from "dayjs"
const app = express();
const mailer =  nodemail;

app.use(json())
app.post("/", async(request, response ) => {
    let data = request.body
    if(!data || !data.key){
        return response.status(403).response.send(json({error:403,Message:"Dados invalidos"}))
    }
    if(data.key != "5938237AB"){
        return response.send({error:403,Message:"Chave Invalido"})
    }
    if(!data.email?.includes("@") || !data.email?.includes(".com")){
        return response.status(403).send({error:403,Message:"Email Invalido"})
    }
    if(data.nome?.length > 60 || data.nome?.length < 2){
        return response.status(403).send({error:403,Message:"Nome Invalido"})
    }
    if(data.texto?.length > 70 || data.texto?.length < 1){
        return response.status(403).send({error:403,Message:"Texto Invalido"})
    }
    if(data.telefone?.length < 4 || data.telefone?.length > 15){
        return response.status(403).send({error:403,Message:"Numero Invalido"})
    }
    try {
        await Conectando_smtp(data.nome,data.telefone,data.email,data.texto)
        return response.status(200).send({Success:"Email recebido com sucesso"})
        
    } catch (error) {
        fs.writeFileSync("log.txt",` \n Data : ${date().format('YYYY-MM-DD HH:mm:ss')} |  ${error}`,{flag:"a"})
        return response.status(500).send({error:500,message:"Ocorreu um erro no servidor "})
    }
    
})
async function Conectando_smtp(nome,telefone,email,texto){

    let teste = mailer.createTransport({
        host: 'smtp.gmail.com', // Substitua pelo servidor SMTP que você está usando
        port: 587, // Porta do servidor SMTP
        secure: false, // Use true se o servidor suportar TLS/SSL
        auth: {
            user: 'bitjoin.services@gmail.com', // Seu endereço de e-mail
            pass: 'qsiwfijkdttgsarm'  }})
            await teste.sendMail({
                from:"Alerta de Orcamento bitjoin.services@gmail.com",
                to:"contato@createc.com.br",
                subject:"Orcamento solicitado",
                html:(`<div style="max-width: 600px; margin: 20px auto; font-family: Arial, sans-serif; color: #333;">
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 25px;">
            📬 Nova Solicitação de Contato
        </h2>

        <div style="margin-bottom: 20px;">
            <h3 style="color: #3498db; margin-bottom: 15px;">Informações do Cliente</h3>
            
            <div style="margin-bottom: 12px;">
                <span style="display: inline-block; width: 80px; font-weight: bold; color: #7f8c8d;">Nome:</span>
                <span style="color: #2c3e50;">${nome}</span>
            </div>
            
            <div style="margin-bottom: 12px;">
                <span style="display: inline-block; width: 80px; font-weight: bold; color: #7f8c8d;">Telefone:</span>
                <span style="color: #2c3e50;">${telefone}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <span style="display: inline-block; width: 80px; font-weight: bold; color: #7f8c8d;">Email:</span>
                <span style="color: #2c3e50;">${email}</span>
            </div>
        </div>

        <div style="background-color: #e8f4fc; padding: 15px; border-radius: 6px;">
            <h4 style="color: #3498db; margin-top: 0; margin-bottom: 10px;">Mensagem:</h4>
            <p style="margin: 0; line-height: 1.5; color: #34495e;">${texto}</p>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #ecf0f1; text-align: center;">
            <small style="color: #95a5a6;">
                Este e-mail foi gerado automaticamente - favor não responder
            </small>
        </div>
    </div>
</div>`)
            })}



export default app;