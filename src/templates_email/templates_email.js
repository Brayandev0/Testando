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
        <header style="padding: 18px 10px 10px;">

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
export function templatePromocao(nome,data,codigo){
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Createc - Inovação com Desconto!</title>
    <style type="text/css">
        /* Reset styles */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }

        /* Responsive max-width */
        img { max-width: 100%; height: auto; }

        /* Global Styles */
        body {
            width: 100% !important;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        /* Container */
        .email-container {
            max-width: 640px;
            margin: 0 auto;
        }

        /* Header */
        .header {
            background-color: #8C1D40;
            padding: 30px 20px;
            text-align: center;
        }

        .logo-main {
            color: white !important;
            font-size: 26px;
            font-weight: bold;
            text-decoration: none;
            margin-bottom: 10px;
        }

        .slogan {
            color: rgba(255,255,255,0.9) !important;
            font-size: 16px;
        }

        /* Content */
        .content {
            background-color: white;
            padding: 30px 20px;
        }

        .hero-text {
            color: #2D2D2D !important;
            font-size: 20px;
            text-align: center;
            margin-bottom: 25px;
            line-height: 1.5;
        }

        .discount-text {
            color: #8C1D40 !important;
            font-weight: bold;
            font-size: 22px;
            display: block;
            margin: 15px 0;
        }

        .code-text {
            color: #8C1D40 !important;
            font-size: 24px;
            text-align: center;
            padding: 15px;
            font-weight: bold;
            margin: 25px 0;
            background-color: #f8f8f8;
            border-radius: 8px;
        }

        .cta-button {
            background-color: #8C1D40;
            color: white !important;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 8px;
            display: inline-block;
            margin: 25px auto;
            text-align: center;
            font-size: 18px;
        }

        /* Feature List */
        .feature-item {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f8f8;
            border-radius: 8px;
        }

        .feature-title {
            color: #2D2D2D !important;
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 10px;
        }

        .feature-description {
            color: #666666 !important;
            font-size: 16px;
        }

        /* Footer Specific Styles */
        .footer {
            background-color: #2D2D2D;
            color: white !important;
            padding: 40px 20px;
            text-align: center;
        }

        .footer-description {
            color: white !important;
            margin-bottom: 35px;
            font-size: 16px;
            line-height: 1.6;
        }

        .footer-links {
            margin: 35px 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .footer-link {
            color: white !important;
            text-decoration: none;
            margin: 10px 15px;
            font-size: 16px;
            flex-grow: 0;
        }

        /* Media Query for Responsiveness */
        @media only screen and (max-width: 480px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .content, .header, .footer {
                padding: 20px 10px !important;
            }
            .hero-text {
                font-size: 18px !important;
            }
            .footer-links {
                flex-direction: column;
                align-items: center;
            }
            .footer-link {
                margin: 10px 0;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td>
                <table class="email-container" border="0" cellpadding="0" cellspacing="0" width="640" align="center">
                    <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #8C1D40; padding: 30px 20px; text-align: center;">
                            <div class="logo-main" style="color: white; font-size: 26px; font-weight: bold; margin-bottom: 10px;">
                                <span style="color: #FF6B6B;">C</span>REATEC
                            </div>
                            <div class="slogan" style="color: rgba(255,255,255,0.9); font-size: 16px;">
                                sua visão, nosso software
                            </div>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td class="content" style="background-color: white; padding: 30px 20px;">
                            <div class="hero-text" style="color: #2D2D2D; font-size: 20px; text-align: center; margin-bottom: 25px; line-height: 1.5;">
                                🚀 Olá ${nome}, Transforme seu negócio com
                                <span class="discount-text" style="color: #FF6B6B; font-weight: bold; font-size: 22px; display: block; margin: 15px 0;">
                                    5% DE DESCONTO
                                </span>
                                em soluções tecnológicas
                            </div>

                            <div class="code-text" style="color: #8C1D40; font-size: 24px; text-align: center; padding: 15px; font-weight: bold; margin: 25px 0; background-color: #f8f8f8; border-radius: 8px;">
                                ${codigo}
                            </div>

                            <div style="text-align: center; margin: 25px 0;">
                                <a href="https://www.createc.com.br/servicos" class="cta-button" style="background-color: #8C1D40; color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; display: inline-block; font-size: 18px;">
                                    ATIVAR OFERTA
                                </a>
                            </div>

                            <!-- Features -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 25px;">
                                <tr>
                                    <td class="feature-item" style="margin-bottom: 20px; padding: 15px; background-color: #f8f8f8; border-radius: 8px;">
                                        <div class="feature-title" style="color: #2D2D2D; font-weight: bold; font-size: 18px; margin-bottom: 10px;">
                                            💻 Tecnologia Personalizada
                                        </div>
                                        <div class="feature-description" style="color: #666666; font-size: 16px;">
                                            Soluções sob medida para suas necessidades específicas
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="feature-item" style="margin-bottom: 20px; padding: 15px; background-color: #f8f8f8; border-radius: 8px;">
                                        <div class="feature-title" style="color: #2D2D2D; font-weight: bold; font-size: 18px; margin-bottom: 10px;">
                                            📈 Escalabilidade Garantida
                                        </div>
                                        <div class="feature-description" style="color: #666666; font-size: 16px;">
                                            Crescimento modular acompanhando sua evolução
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="feature-item" style="margin-bottom: 20px; padding: 15px; background-color: #f8f8f8; border-radius: 8px;">
                                        <div class="feature-title" style="color: #2D2D2D; font-weight: bold; font-size: 18px; margin-bottom: 10px;">
                                            🛡️ Suporte Especializado
                                        </div>
                                        <div class="feature-description" style="color: #666666; font-size: 16px;">
                                            Assistência técnica 24/7 com experts
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="footer" style="background-color: #2D2D2D; color: white; padding: 30px 20px; text-align: center;">
                            <div style="color: white; margin-bottom: 25px; font-size: 16px;">
                                Oferta válida até ${data} • Não acumulativo com outras promoções
                            </div>
                            <div class="footer-links" style="margin: 20px 0;">
                                <a href="#" class="footer-link" style="color: white; text-decoration: none; margin: 0 15px; font-size: 16px;">
                                    Políticas de Privacidade
                                </a>
                                <a href="#" class="footer-link" style="color: white; text-decoration: none; margin: 0 15px; font-size: 16px;">
                                    Cancelar Assinatura
                                </a>
                                <a href="#" class="footer-link" style="color: white; text-decoration: none; margin: 0 15px; font-size: 16px;">
                                    Suporte
                                </a>
                            </div>
                            <div style="margin-top: 25px; color: rgba(255,255,255,0.8); font-size: 14px;">
                                © 2024 Createc • Transformando Ideias em Realidade Digital
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`
}
export function templatePlano(nome, plano,numero,mensagem,email){
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
                <span style="display: inline-block; width: 80px; font-weight: bold; color: #7f8c8d;">Plano:</span>
                <span style="color: #2c3e50;">${plano}</span>
            </div>
            <div style="margin-bottom: 12px;">
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