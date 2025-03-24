export function templateAlerta(nome, numero,email, mensagem){
    return `<div style="max-width: 600px; margin: 20px auto; font-family: Arial, sans-serif; color: #333;">
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
                <span style="color: #2c3e50;">${numero}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <span style="display: inline-block; width: 80px; font-weight: bold; color: #7f8c8d;">Email:</span>
                <span style="color: #2c3e50;">${email}</span>
            </div>
        </div>

        <div style="background-color: #e8f4fc; padding: 15px; border-radius: 6px;">
            <h4 style="color: #3498db; margin-top: 0; margin-bottom: 10px;">Mensagem:</h4>
            <p style="margin: 0; line-height: 1.5; color: #34495e;">${mensagem}</p>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #ecf0f1; text-align: center;">
            <small style="color: #95a5a6;">
                Este e-mail foi gerado automaticamente - favor não responder
            </small>
        </div>
    </div>
</div>`
}
export function templateBemVindo(nome){
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Confirmação de Recebimento - Createc</title>
</head>
<body style="margin: 0; padding: 12px; background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.65; -webkit-text-size-adjust: 100%;">
    <!-- Container Principal -->
    <div style="max-width: 680px; min-width: 300px; width: 100%; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); overflow: hidden;">
        
        <!-- Cabeçalho -->
        <header style="background: linear-gradient(to bottom, #ffffff 80%, #f8f8f8 100%); text-align: center; padding: 18px 10px 10px;">
            <img src="logo.png" alt="Logo Createc" 
                 style="max-width: 200px; width: 60%; height: auto; display: block; margin: 0 auto;">
        </header>

        <!-- Conteúdo -->
        <div style="padding: 8% 6%; color: #4a4a4a;">
            <h1 style="text-align: center; padding: 4% 0; color: #800020; margin: 0 0 6% 0; font-size: clamp(20px, 5vw, 26px); font-weight: 700; border-top: 3px solid #f0f0f0;">
                📨 Mensagem Recebida com Sucesso!
            </h1>
            
            <p style="margin: 4% 0; font-size: 16px; line-height: 1.5;">Prezado(a) <strong>${nome}</strong>,</p>
            
            <p style="margin: 5% 0; font-size: 16px; color: #666; line-height: 1.6;">Agradecemos por entrar em contato com a <strong style="color: #800020;">Createc</strong>. Sua mensagem já está em análise por nossa equipe especializada.</p>
            
            <!-- Card de Destaque -->
            <div style="background: #fafafa; padding: 6%; margin: 8% 0; border-radius: 8px; border-left: 5px solid #800020;">
                <p style="margin: 0 0 3% 0; color: #800020; font-weight: 700; font-size: clamp(16px, 4vw, 17px);">⏳ Prazo de Resposta: <span style="color: #5a5a5a;">8 Horas Úteis</span></p>
                <p style="margin: 0; font-size: 15px; color: #777; line-height: 1.5;">Nossa prioridade é fornecer uma resposta completa e personalizada para seu caso.</p>
            </div>

            <!-- Botões -->
            <div style="background: #fff9fb; padding: 6%; margin: 8% 0; text-align: center; border: 1px solid #ffe5eb;">
                <h3 style="color: #800020; margin: 0 0 5% 0; font-size: clamp(17px, 4.5vw, 19px); font-weight: 600;">📌 Acesso Rápido</h3>
                <a href="https://createc.com.br/atendimento" 
                   style="color: #800020; text-decoration: none; display: inline-block; width: 90%; max-width: 240px; margin: 2% 3%; padding: 12px 0; border: 2px solid #800020; border-radius: 6px; font-size: 15px; font-weight: 500;">
                    Central de Ajuda
                </a>
                <a href="https://createc.com.br/faq" 
                   style="color: #ffffff; background-color: #800020; text-decoration: none; display: inline-block; width: 90%; max-width: 240px; margin: 2% 3%; padding: 12px 0; border-radius: 6px; font-size: 15px; font-weight: 500;">
                    Perguntas Frequentes
                </a>
            </div>
        </div>

        <!-- Rodapé -->
        <footer style="background: #800020; padding: 22px 24px; color: #ffffff; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 12px; flex-wrap: wrap;">
                <div style="display:inline-block; align-items: center;">
                    <span style="margin-right: 8px;">✉️</span>
                    <a href="mailto:contato@createc.com.br" 
                       style="color: #ffffff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease;">
                        contato@createc.com.br
                    </a>
                </div>
                <div style="display: inline-block; align-items: center;">
                    <span style="margin-right: 8px;">🌐</span>
                    <a href="https://www.createc.com.br" 
                       style="color: #ffffff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease;">
                        www.createc.com.br
                    </a>
                </div>
            </div>

            <p style="font-size: 12px; color: #ffd9d9; margin: 16px 0 0 0;">
                *Este é um e-mail automático. Para novos assuntos, utilize nosso canal de atendimento.
            </p>
        </footer>
    </div>
</body>
</html>`
}