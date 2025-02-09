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

let inputAmigo = document.querySelector('input');
inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
})

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
        alert ('Você não tem mais amigos para sortear!');
    } else {
        criarListaDeAmigos('listaAmigos', []);
        let indiceAmigoSorteado = Math.floor(Math.random() * arrayAmigos.length);
        let campoAmigoSorteado = document.getElementById ('resultado');
        campoAmigoSorteado.innerHTML = (`O amigo secreto sorteado foi: ${(arrayAmigos[indiceAmigoSorteado])}!` )
        arrayAmigos.splice(indiceAmigoSorteado, 1);
        
        
    }
}

function reiniciarSorteio() {
    arrayAmigos = [];
    criarListaDeAmigos('listaAmigos', arrayAmigos);
    document.getElementById('resultado').innerHTML = '';
}



