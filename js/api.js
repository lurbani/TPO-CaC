var n = 1 + Math.floor(Math.random()*149);
console.log(n);

const url = `https://pokeapi.co/api/v2/pokemon/${n}`;
var imgUrl = ""
fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data)
    imgUrl = data.sprites.other.dream_world.front_default;
});

 function mostrarPkm(){
    if(imgUrl){
        var imgPokemon = document.getElementById("pokemon");
        imgPokemon.innerHTML = `<img src="${imgUrl}" alt="Pokemon aleatorio" id="pokemon"></img>`;
   }
 }