function validar(){
    var nombre = document.getElementById("nombre").trim();
    var email = document.getElementById("email").trim();
    var tel = document.getElementById("phone").trim();
    var consulta = document.getElementById("consulta").trim();
    alert(nombre + email + tel + consulta)
}