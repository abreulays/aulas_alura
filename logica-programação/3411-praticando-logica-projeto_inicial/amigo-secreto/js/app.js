let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigo = document.getElementById('lista-amigos');
    
    if (listaAmigo.textContent == ''){
        listaAmigo.textContent = nomeAmigo.value;
    } else{
        listaAmigo.textContent = listaAmigo.textContent + ',' + nomeAmigo.value;
    }

    nomeAmigo.value = ''; 
}
function sortear (){
    embaralhar (amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){
     if (i == amigos.legth){
     } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos [i +1] + '<br>';
     }
     }
        }
        function embaralhar (){
    for (let indice = listaAmigo.legth; indice; indice--){
        const indiceAleatorio = Math.floor (Math.random() * indice);

        //atribuição via destructuring
        [listaAmigo[indice - 1], listaAmigo[indiceAleatorio]] =
        [listaAmigo [indiceAleatorio], listaAmigo [indice - 1]];
    }

}