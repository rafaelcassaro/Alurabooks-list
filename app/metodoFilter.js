const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));



function filtrarLivros() {
    
    const elementoBtn = document.getElementById(this.id);       //pega o id do btn da lista botoes
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if(categoria === "disponivel"){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        todosOsLivrosValorBanner.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
        `

    }
}