// Função para aumentar ou diminuir o tamanho do texto (Acessibilidade)
let tamanhoAtual = 18; // Tamanho padrão em píxeis

function alterarFonte(mudanca) {
    tamanhoAtual += mudanca;
    
    // Define limites saudáveis para a leitura (mínimo 14px, máximo 28px)
    if (tamanhoAtual < 14) tamanhoAtual = 14;
    if (tamanhoAtual > 28) tamanhoAtual = 28;
    
    // Aplica a alteração ao corpo do documento
    document.body.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
}

// Função para ligar/desligar o modo de Alto Contraste (Cores Escuras)
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

3. **No ficheiro `index.html`**, localize onde estava a etiqueta `<script>` no fundo do documento (perto da etiqueta `</body>`) e substitua-a pela ligação para o novo ficheiro:

```html
    <!-- Esta linha liga o HTML ao seu novo ficheiro JavaScript externo -->
    <script src="script.js"></script>
</body>
</html>