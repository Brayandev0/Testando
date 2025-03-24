import { conectandoSmtp } from "./Enviar_email.js";

export async function enviarPromocao(assunto,template){
            conectandoSmtp("Createc contato@createc.com.br",data["email"],assunto,await template)
    
}