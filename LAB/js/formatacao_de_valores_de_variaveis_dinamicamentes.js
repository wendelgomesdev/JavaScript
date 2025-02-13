// Lista de variáveis especiais e seus caminhos no contexto do usuário
const specialVariables = {
    lastMessage: (context) => context.data?.lastMessage,
    userId: (context) => context.userId,
    userNumber: (context) => context.userNumber,
    currentStep: (context) => context.step,
    previousStep: (context) => context.previousStep,
};

// Função auxiliar para acessar propriedades aninhadas via dot notation
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
}

// Função para percorrer recursivamente um objeto e aplicar um callback em cada valor
function traverseObject(obj, callback) {
    if (typeof obj !== 'object' || obj === null) return obj;

    const result = Array.isArray(obj) ? [] : {};

    for (const [key, value] of Object.entries(obj)) {
        result[key] =
            typeof value === 'object' && value !== null
                ? traverseObject(value, callback)
                : callback(value);
    }

    return result;
}

// Função para substituir os placeholders no texto
function replacePlaceholders(input, variables, context) {
    if (typeof input !== 'string') return input;

    return input.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        key = key.trim();

        // Verifica se é uma variável especial
        if (specialVariables[key]) {
            const value = specialVariables[key](context);
            if (value !== undefined) return value;
        }

        // Se o placeholder usar dot notation, busca em context
        if (key.includes('.')) {
            const value = getNestedValue(context, key);
            return value !== undefined ? value : `{{${key}}}`;
        }

        // Caso contrário, procura nas variables
        const value = variables[key];
        return value !== undefined ? value : `{{${key}}}`;
    });
}

// Função principal que processa o menu aplicando as substituições
function processMenuVariables(menu, variables, context) {
    return traverseObject(menu, (value) => replacePlaceholders(value, variables, context));
};


// Teste na pratica
const menu = {
    title: "Olá, {{userId}}!",
    message: "Sua última mensagem foi: {{lastMessage}}",
    extraInfo: "Detalhe: {{data.HistoryChoices.receberInfo}}"
};

const variables = {
    // Outras variáveis, se necessário...
};

const context = {
    userId: "12345",
    data: {
        lastMessage: "Olá, tudo bem?",
        HistoryChoices: {
            receberInfo: "Teste"
        }
    },
    // Note que HistoryChoices está diretamente em context:
};

const menuProcessado = processMenuVariables(menu, variables, context);
console.log(menuProcessado);

