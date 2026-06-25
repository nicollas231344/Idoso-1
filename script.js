// Função para aumentar ou diminuir o tamanho do texto (Acessibilidade)
let tamanhoAtual = 18; // Tamanho padrão em píxeis

function alterarFonte(mudanca) {
    tamanhoAtual += mudanca;
    
    // Define limites saudáveis para a leitura (mínimo 14px, máximo 28px)
    if (tamanhoAtual < 14) tamanhoAtual = 14;
    if (tamanhoAtual > 28) tamanhoAtual = 28;
    
    // CORREÇÃO: Aplica ao documentElement (HTML) para que as fontes em 'rem' respondam ao clique!
    document.documentElement.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
}

// Função para ligar/desligar o modo de Alto Contraste (Cores Escuras)
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}