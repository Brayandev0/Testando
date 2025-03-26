import nodemailer from "nodemailer";
import fs from "fs"
import date from "dayjs";


function criandoTransporter(tipo){
    if(tipo == "gmail"){
        return nodemailer.createTransport({
            host: 'smtp.gmail.com', // Substitua pelo servidor SMTP que você está usando
            port: 587, // Porta do servidor SMTP
            auth: {
                user: 'verificar254@gmail.com', // Seu endereço de e-mail
                pass: 'czunttelghukcwvj'  },
    })  }

    return nodemailer.createTransport({
        host: 'smtp.titan.email', // Substitua pelo servidor SMTP que você está usando
        port: 587, // Porta do servidor SMTP
        auth: {
            user: 'contato@createc.com.br', // Seu endereço de e-mail
            pass: 'SenacTec12'  },
    })  }

    

export async function conectandoSmtp(remetente, destinatario,assunto,template,tipo){
    try {
            let teste = await criandoTransporter(tipo)
        await teste.sendMail({
            from:remetente,
            to:destinatario,
            subject:assunto,
            html: template
        })
        
        teste.close()
    } catch (error) {
        fs.writeFileSync("log.txt",` \n Data : ${date().format('YYYY-MM-DD HH:mm:ss')} |  ${error}`,{flag:"a"})
        
    }
            }
