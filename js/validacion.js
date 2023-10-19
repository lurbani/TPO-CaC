function validar(){
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var tel = document.getElementById("phone").value.trim();
    var consulta = document.getElementById("consulta").value.trim();

    console.log(nombre)
    console.log(email)
    console.log(tel)
    console.log(consulta)
    if(email ==="" && tel==="")
    {
        alert("Debe proveer un medio de contacto");
        return false;
    }
    else if(tel !=="" && isNaN(tel))
    {
        alert("Numero de telefono invalido");
        return false;
    }
    else if(consulta === "")
    {
        alert("Debe hacer una consulta");
        return false;
    }
    else
    {
        alert("Consulta enviada");
        return true;
    }
    
}