const variaveis = {
    nome: 'Wendel',
    telefone: '1195678-2312',
};

let userContext = {}

const menu = {
    globalVariables: {
        defaultErrorMessage: 'Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.',
        invalidOptionMessage: 'Opção inválida. Por favor, escolha uma opção válida.',
        introductoryMessage: '🤖 Olá! Eu sou o assistente virtual da Leste Lovers, pronto para ajudar você.',
        serviceTimeout: 5
    },
    mainMenu: {
        message: 'Digite o número da opção desejada:\n',
        options: {
            1: {
                nextStep: 'selecionarBairroComercio',
                label: 'Quero divulgar meu comércio nas páginas da Leste Lovers.\n'
            },
            2: {
                nextStep: 'selecionarBairroNoticias',
                label: 'Quero enviar uma notícia.\n'
            },
            3: {
                nextStep: 'selecionarBairroGrupos',
                label: 'Quero entrar nos grupos do WhatsApp.'
            }
        }
    },
    selecionarBairroNoticias: {
        type: 'stepDefault',
        message: 'Qual o seu bairro? (Digite o número da opção desejada)\n',
        options: {
            1: {
                nextStep: 'DescreverNoticiaGS',
                label: 'Guaianases\n'
            },
            2: {
                nextStep: 'DescreverNoticiaCT',
                label: 'Cidade Tiradentes\n'
            },
            9: {
                nextStep: 'mainMenu',
                label: 'Voltar ao menu principal'
            }
        }
    },
    DescreverNoticiaCT: {
        type: 'stepTextOption',
        variables: {
            FinalDestination: '120363377627253338@g.us',
            finalDestinationSubject: '*Acontecimento na Cidade Tiradentes.*\n\n',
            noticiaDescricao: '{{stepTextOption.content}}'
        },
        message: 'Preciso que você descreva o que aconteceu com detalhes.\n\n *Obs: Não se esqueça de informar também o local, por favor (nome da rua, ponto de referência, etc.).*',
        responseMessage: 'Muito bem, anotei o ocorrido aqui.',
        nextStep: 'CapturarMedia',
        options: {}
    },
    DescreverNoticiaGS: {
        type: 'stepTextOption',
        variables: {
            FinalDestination: '120363377627253338@g.us',
            finalDestinationSubject: '*Acontecimento em Guaianases.*\n\n',
            noticiaDescricao: '{{stepTextOption.content}}'
        },
        message: 'Preciso que você descreva o que aconteceu com detalhes.\n\n *Obs: Não se esqueça de informar também o local, por favor (nome da rua, ponto de referência, etc.).*',
        responseMessage: 'Muito bem, anotei o ocorrido aqui.',
        nextStep: 'CapturarMedia',
        options: {}
    },
    CapturarMedia: {
        type: 'stepMedia',
        message: 'Envie os arquivos necessários, como áudios, fotos ou vídeos. Quando terminar, digite "ok".',
        responseMessage: 'Arquivo recebido. Envie mais ou finalize com "ok".',
        FinalDestination: '120363377627253338@g.us',
        keyWord: 'ok',
        nextStep: 'finalizar',
        options: {}
    },
    selecionarBairroComercio: {
        type: 'stepDefault',
        message: 'Qual o seu bairro? (Digite o número da opção desejada)\n',
        options: {
            1: {
                nextStep: 'selecionarPlanosGuainases',
                label: 'Guaianases\n'
            },
            2: {
                nextStep: 'selecionarPlanoCT',
                label: 'Cidade Tiradentes\n'
            },
            9: {
                nextStep: 'mainMenu',
                label: 'Voltar ao menu principal'
            }
        }
    },
    selecionarPlanosGuainases: {
        type: 'stepTextOption',
        FinalDestination: '5511949555409@s.whatsapp.net',
        finalDestinationSubject: '*Usuário com interesse em anunciar em Guaianases.*\n\n',
        message: 'Qual o plano você deseja? (Digite o número da opção desejada)\n\n',
        responseMessage: 'Plano escolhido! iremos te retornar em instantes.',
        nextStep: 'finalizar',
        options: {
            1: {
                label: '🎯 1 Story avulso: *R$ 30*\n\n===========================\n\n'
            },
            2: {
                label: '🎯 2 Stories: *R$ 45*\n\n===========================\n\n'
            },
            3: {
                label: '🎯 4 Stories \n\n ➕\n\n 🤩 *Bônus*\n\n* O primeiro post será impulsionado para maior alcance do anúncio\n\n`De:` ~R$150~\n\n`Por:` *R$85*\n\n===========================\n\n'
            },
            4: {
                label: '🎯 *Plano Essencial*\n\n_Facebook / Instagram_\n\n* 1 post por dia no Story durante 30 dias no Facebook e Instagram\n\n_Os links usados nos stories devem ser direcionados para WhatsApp_\n\n🤩 Bônus\n\n* Os 2 primeiros posts serão impulsionados para maior alcance do anúncio\n\n`De:` ~R$510~\n\n`Por:` *R$250*\n\n'
            },
            9: {
                nextStep: 'mainMenu',
                label: 'Voltar ao menu principal'
            }
        }
    },
    selecionarPlanoCT: {
        type: 'stepTextOption',
        FinalDestination: '5511949555409@s.whatsapp.net',
        finalDestinationSubject: '*Usúario com interesse em anunciar na Cidade Tiradentes.*\n\n',
        message: 'Qual o plano você deseja? (Digite o número da opção desejada)\n',
        responseMessage: 'Plano escolhido! iremos te retornar em instantes.',
        nextStep: 'finalizar',
        options: {
            1: {
                label: '🎯 1 Story avulso: *R$ 20*\n\n===========================\n'
            },
            2: {
                label: '🎯 2 Stories: *R$ 30*\n\n===========================\n'
            },
            3: {
                label: '🎯 3 Stories: *R$ 40*\n\n===========================\n'
            },
            4: {
                label: '🎯 4 Stories \n\n ➕\n\n 🤩 *Bônus*\n\n* O primeiro post será impulsionado para maior alcance do anúncio\n\n`De:` ~R$80~\n\n`Por:` *R$50*\n\n===========================\n'
            },
            5: {
                label: '🎯 *Plano Essencial*\n\n_Facebook / Instagram_\n\n* 1 post por dia no Story durante 30 dias no Facebook e Instagram\n\n_Os links usados nos stories devem ser direcionados para WhatsApp_\n\n🤩 Bônus\n\n* Os 2 primeiros posts serão impulsionado para maior alcance do anúncio\n\n`De:` ~R$510~\n\n`Por:` *R$250*\n'
            },
            9: {
                nextStep: 'mainMenu',
                label: 'Voltar ao menu principal'
            }
        }
    },
    selecionarBairroGrupos: {
        type: 'stepDefault',
        message: 'Qual o seu bairro? (Digite o número da opção desejada)\n',
        options: {
            1: {
                nextStep: 'gruposGS',
                label: 'Guaianases\n'
            },
            2: {
                nextStep: 'gruposCT',
                label: 'Cidade Tiradentes\n'
            },
            9: {
                nextStep: 'mainMenu',
                label: 'Voltar ao menu principal'
            }
        }
    },
    gruposCT: {
        type: 'stepInfo',
        message: '📲 Compartilhe o link dos grupos da Cidade Tiradentes no WhatsApp com seus amigos e familiares:\n\n👉 Acesse o link: https://www.lestelovers.com/p/grupos-whatsapp-cidade-tiradentes.html\n\n👥 Escolha o grupo que deseja participar e clique em "entrar no grupo".\n\n⏳ Agora, é só aguardar a aprovação de um ADM.\n\n⚠️ Lembrando: só aceitamos membros com DDD',
        nextStep: 'finalizar',
        options: {}
    },
    gruposGS: {
        type: 'stepInfo',
        message: '📲 Compartilhe o link dos grupos de Guaianases no WhatsApp com seus amigos e familiares:\n\n👉 Acesse o link: https://www.lestelovers.com/p/grupos-whatsapp-guaianases.html\n\n👥 Escolha o grupo que deseja participar e clique em "entrar no grupo".\n\n⏳ Agora, é só aguardar a aprovação de um ADM.\n\n⚠️ Lembrando: só aceitamos membros com DDD',
        nextStep: 'finalizar',
        options: {}
    },
    enviarNoticiaDestino: {
        type: 'sendMessage',
        message: '{{finalDestinationSubject}}\n\n Descrição:{{noticiaDescricao}}\n\n Usuário: {{remoteJid}}',
        nextStep: 'finalizar',
        destination: '{{FinalDestination}}@s.whatsapp.net',
        options: {}
    },
    finalizar: {
        type: 'finishedStep',
        message: 'Seu atendimento foi concluído. Obrigado por usar nossos serviços! Caso precise de algo mais, fique à vontade.',
        nextStep: 'mainMenu',
        options: {}
    }
};

userContext['user123'.menu.globalVariables = menu.globalVariables
    
console.log(userContext);

function traverseObject(obj, callback) {
    if (typeof obj !== 'object' || obj === null) return obj;

    const result = Array.isArray(obj) ? [] : {};

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
            result[key] = traverseObject(value, callback);
        } else {
            result[key] = callback(value);
        }
    }

    return result;
}

function replacePlaceholders(input, variables) {
    if (typeof input !== 'string') return input;
    return input.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        const value = variables[key.trim()];
        return value !== undefined ? value : `{{${key.trim()}}}`;
    });
}

function processObjectVariables(obj, variables) {
    return traverseObject(obj, (value) => replacePlaceholders(value, variables));
}

// Exemplo de uso
const processedMenu = processObjectVariables(menu, variaveis);

console.log(processedMenu);

function replaceDynamicVariables(input, variables) {
    if (typeof input !== 'string') return input; // Retorna valores não string sem processamento
    // Procura por {{variavel}} no template e substitui pelos valores correspondentes
    return input.replace(/\{\{(.*?)}\}/g, (_, key) => {
        // Remove espaços desnecessários e busca no objeto de variáveis
        const value = variables[key.trim()];
        return value !== undefined ? value : `{{${key.trim()}}}`; // Mantém o placeholder se não encontrar valor
    }
    );
}

// Substitui variáveis em todas as chaves do menu
const processedMenu = {};
for (const [key, value] of Object.entries(menu)) {
    processedMenu[key] = processDynamicVariables(value);
}

console.log(processDynamicVariables(input, variaveis));

