let livros = [];
let teste = "teste";
const endPointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endPointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}



getBuscarLivrosDaAPI();




