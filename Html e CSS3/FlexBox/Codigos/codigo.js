
let div = document.getElementById("Conteudo")
let teste = "none"
let resultado = 'none';

function Buscar(x){
    teste = x
    montardiv()
}
function montardiv(){
    let dado = dados[teste - 1]
    resultado = `
               <img src="${dado.imagem}" class="imagensdojogador">
                <h2>
                    <a href="${dado.video}" target="_blank" style="color: ${dado.cor};">${dado.nome}</a>
                </h2>
                <h3>${dado.apelido}</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank" class="maisinformacao">Mais informações</a>
                  `;
    mostrar()
}
function mostrar(){
div.innerHTML = resultado
}