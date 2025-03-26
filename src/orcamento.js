import { read } from "./database/crud.js";
import { templatePromocao } from "./templates_email/templates_email.js";
import nodemailer from "nodemailer";
import fs from "fs"
import date from "dayjs";


export async function enviarPromocao(assunto){
        var smtp = criandoTransporter();

        let emails = await read()      
        emails.forEach(data => {
                console.log(data.email)
                conectandoSmtp(smtp,"Createc contato@createc.com.br",data.email,`${data.nome}, temos algo especial para você!`,templatePromocao(data.nome,"22/5/2025","CREATEC5"))
        })
        smtp.close()
        return true
        
    
}


function criandoTransporter(){
    return nodemailer.createTransport({
        host: 'smtp.titan.email', // Substitua pelo servidor SMTP que você está usando
        port: 587, // Porta do servidor SMTP
        auth: {
            user: 'contato@createc.com.br', // Seu endereço de e-mail
            pass: 'SenacTec12'  },
})
    
}
export async function conectandoSmtp(tt,remetente, destinatario,assunto,template){
    try {

        await tt.sendMail({
            from:remetente,
            to:destinatario,
            subject:assunto,
            html: template
        })
        

    } catch (error) {
        fs.writeFileSync("log.txt",` \n Data : ${date().format('YYYY-MM-DD HH:mm:ss')} |  ${error}`,{flag:"a"})
        
    }
            }
