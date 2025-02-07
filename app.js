let arrayAmigos = [];

function criarListaDeAmigos(id, arrayAmigos) {
    let lista = document.getElementById(id);
    lista.innerHTML = '';
    for (let i = 0; i < arrayAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = arrayAmigos[i];
        lista.appendChild(itemLista);
    }
}

function limparCampo() {
    let amigo = document.querySelector('input');
    amigo.value = '';
}


function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo === '') {
    alert ('Por favor insira um nome válido.'); 

} else if (arrayAmigos.includes(amigo)) {
        alert ('Ops! Esse amigo já foi adicionado!');
    }
    
    else {
        arrayAmigos.push(amigo);
        limparCampo();
        criarListaDeAmigos('listaAmigos', arrayAmigos);
    }
        
}
   


function sortearAmigo() {
    if (arrayAmigos.length === 0) {
        alert ('Insira amigos para o sorteio!');
    } else {
        criarListaDeAmigos('listaAmigos', []);
        let indiceAmigoSorteado = Math.floor(Math.random() * arrayAmigos.length);
        let campoAmigoSorteado = document.getElementById ('resultado');
        campoAmigoSorteado.innerHTML = (`O amigo secreto sorteado foi: ${(arrayAmigos[indiceAmigoSorteado])}!` )
        
        
    }
}

function reiniciarSorteio() {
    arrayAmigos = [];
    criarListaDeAmigos('listaAmigos', arrayAmigos);
    document.getElementById('resultado').innerHTML = '';
}



