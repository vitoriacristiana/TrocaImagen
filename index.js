let carregar = (evt) => {
    evt.preventDefault();

    let gato = document.getElementById("gato");
    let numero = Math.floor(Math.random() * 15 + 1);
    let caminho = "/src/imgs/cat" + numero + ".jpg";

    let imagem = document.createElement("img");
    imagem.src = caminho;
    imagem.id = "gato";

    gato.replaceWith(imagem);

    if (document.getElementById("resultados").classList.contains("esconde"))
    {
        document.getElementById("resultados").classList.remove("esconde");
    }
};

document.getElementById("botao").addEventListener('click', carregar);