let amigos = []
let nuevoAmigo = 0


function agregarAmigo(){    
    nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == ''){
        alert ("Por favor, inserte un nombre.")
    }else {
        //console.log(nuevoAmigo)
        amigos.push(nuevoAmigo);        
        console.log (amigos);
        let valorCaja = document.getElementById('amigo').value='';
        listarAmigos();
        return nuevoAmigo;
    }   
    
}

function listarAmigos(){    
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    listaHTML.appendChild(li);
    }
}



function sortearAmigo(){
    
    if (amigos.length == 0){
        alert ("Escribe la lista de amigos para poder sortear");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        console.log("Amigo sorteado: " + amigoSorteado);
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Resultado: ${amigoSorteado}`
        return amigoSorteado;
    }
}





