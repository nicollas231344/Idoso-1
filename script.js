// Configuração inicial do tamanho da fonte em píxeis
let tamanhoAtual = 18; 

// Função que aumenta ou diminui o tamanho geral de todas as letras do site
function alterarFonte(mudanca) {
    tamanhoAtual += mudanca;
    
    // Define limites seguros para evitar distorções de ecrã (mínimo 14px, máximo 30px)
    if (tamanhoAtual < 14) tamanhoAtual = 14;
    if (tamanhoAtual > 30) tamanhoAtual = 30;
    
    // Aplica a alteração à raíz HTML para atualizar dinamicamente todas as medidas 'rem'
    document.documentElement.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
}

// Função que liga e desliga a classe de Alto Contraste no corpo da página
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

// ==========================================
// FUNÇÕES DE CONTROLO DO MODAL (POP-UP)
// ==========================================

// Função responsável por abrir o modal de instruções
function abrirModal() {
    const modal = document.getElementById('meuModal');
    if (modal) {
        modal.classList.add('ativo');
        modal.setAttribute('aria-hidden', 'false');
    }
}

// Função responsável por fechar o modal de instruções
function fecharModal() {
    const modal = document.getElementById('meuModal');
    if (modal) {
        modal.classList.remove('ativo');
        modal.setAttribute('aria-hidden', 'true');
    }
}

// Executa automaticamente quando a estrutura da página acaba de carregar no navegador
window.addEventListener('DOMContentLoaded', () => {
    // Abre a janela de ajuda automaticamente após 500 milissegundos (meio segundo)
    setTimeout(abrirModal, 500);
});