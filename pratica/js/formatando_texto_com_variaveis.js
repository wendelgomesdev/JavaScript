const variaveis = {
    nome: 'Wendel',
    telefone: '1195678-2312'
};

const template = 'Olá, {{nome}}, Bom dia! Seu telefone é esse: {{telefone}}';

function formatMessageTemplate(input, variables) {
    // Procura por {{variavel}} no template e substitui pelos valores correspondentes
    return input.replace(/\{\{(.*?)}\}/g, (_, key) => {
        // Remove espaços desnecessários e busca no objeto de variáveis
        const value = variables[key.trim()];
        return value !== undefined ? value : ''; // Se a variável não existir, retorna vazio
    }
);
}


console.log(formatMessageTemplate(template, variaveis));

