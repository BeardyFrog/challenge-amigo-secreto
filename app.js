let listaDeAmigos = [];

function criarListaDeAmigos(id, listaDeAmigos) {
    let lista = document.getElementById(id);
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaDeAmigos[i];
        lista.appendChild(itemLista);
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}


function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo === '') {
    alert ('Por favor insira um nome válido.'); 

} else if (listaDeAmigos.includes(amigo)) {
        alert ('Ops! Esse amigo já foi adicionado!');
    }
    
    else {
        listaDeAmigos.push(amigo);
        limparCampo();
        criarListaDeAmigos('listaAmigos', listaDeAmigos);
    }
        
}
   


function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert ('Insira amigos para o sorteio!');
    } else {
        criarListaDeAmigos('listaAmigos', []);
        let indiceAmigoSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        let campoAmigoSorteado = document.getElementById ('resultado');
        campoAmigoSorteado.innerHTML = (`O amigo secreto sorteado foi: ${(listaDeAmigos[indiceAmigoSorteado])}!` )
        
        
    }
}



