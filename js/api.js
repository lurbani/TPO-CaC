 async function getPoke(n){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
    const data = await response.json();
    const nombrePoke = document.getElementById("nombrePoke");
    const imgPoke = document.getElementById("imgPoke");
    nombrePoke.innerHTML = data.name;
    imgPoke.src = data.sprites.other.dream_world.front_default;

 }

 getPoke(1 + Math.floor(Math.random()*149))