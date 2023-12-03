function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let precio_ingresado = document.getElementById("precio").value 
    let stock_ingresado = document.getElementById("stock").value 
    let imagen_ingresada = document.getElementById("imagen").value 


    // Se arma el objeto de js 
    let datos = {
        nombre: nombre_ingresado,
        precio:precio_ingresado,
        stock:stock_ingresado,
        imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "https://crudg26.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "administrar.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}