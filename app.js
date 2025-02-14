let amigos = []
let nuevoAmigo = 0
/*
let nuevoAmigo = prompt ('Ingresar nombre')
amigos.push(nuevoAmigo)
*/
//amigos.push('Dana');






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
    //console.log (`${amigos} desde listar amigos`)
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    listaHTML.appendChild(li);

    /*
    console.log(amigos[i]+ ' desde for');
    let listaHTML = document.querySelector ('li');
    listaHTML.innerHTML = nuevoAmigo;
    */

}



    /*
    let lista = document.querySelector('li');
    lista.innerHTML = nuevoAmigo
   

    for (let i = 0 ; i <amigos.length; i++); {
        console.log(amigos[i].textContent + 'desde for');
    }
        */
    
   /*
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].textContent);
    }
    */
    /*
    let lista = document.querySelector(li);
    lista.innerHTML = nuevoAmigo;
    return lista
    */

}

