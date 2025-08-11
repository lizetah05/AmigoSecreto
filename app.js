// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos=[];
let ulListaAmigos=document.getElementById('listaAmigos');
//Funcion para agregar un nuevo nombre  a la lista de amigos
function agregarAmigo(){

    let inputAmigo=document.getElementById('amigo').value;

    if(inputAmigo ==='') { 
        alert('Inserta un nombre');
    }else{
        validarEntrada(inputAmigo);
       
    }
        limpiarCaja();
}
//Funcion para verificar que no se repitan nombres en la lista de amigos
function validarEntrada(nombre){
    if(listaAmigos.includes(nombre)){                           
            alert('¡Ese nombre ya esta en la lista!');
        }
        else{
            listaAmigos.push(nombre);
            ulListaAmigos.innerHTML+=`<li>${nombre} </li>`;
    }   

}
//Funcion para sortear el amigo secreto
function sortearAmigo(){
    numeroAmigos=listaAmigos.length;
    if (numeroAmigos==0){ //Comprueba que exista elemntos en la lista amigos
        alert('Todavia no hay nadie')
    }
    else{
        let amigoSorteado=Math.floor(Math.random()*numeroAmigos);
        resultado=document.getElementById('resultado');
        resultado.innerHTML=`<li>El amigo secreto es :${listaAmigos[amigoSorteado]}</li>`
    }

    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
