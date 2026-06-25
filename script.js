// Função para aumentar ou diminuir o tamanho do texto (Acessibilidade)
let tamanhoAtual = 18; 

function alterarFonte(mudanca) {
    tamanhoAtual += mudanca;
    if (tamanhoAtual < 14) tamanhoAtual = 14;
    if (tamanhoAtual > 28) tamanhoAtual = 28;
    document.documentElement.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
}

// Função para ligar/desligar o modo de Alto Contraste (Cores Escuras)
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

// ==========================================
// NOVO: FUNÇÕES DE CONTROLO DO MODAL
// ==========================================

// Função para abrir a janela pop-up
function abrirModal() {
    const modal = document.getElementById('meuModal');
    modal.classList.add('ativo');
    modal.setAttribute('aria-hidden', 'false');
}

// Função para fechar a janela pop-up
function fecharModal() {
    const modal = document.getElementById('meuModal');
    modal.classList.remove('ativo');
    modal.setAttribute('aria-hidden', 'true');
}

// Executa automaticamente quando o site termina de carregar no navegador
window.addEventListener('DOMContentLoaded', () => {
    // Aguarda 500 milissegundos (meio segundo) para abrir de forma suave
    setTimeout(abrirModal, 500);
});