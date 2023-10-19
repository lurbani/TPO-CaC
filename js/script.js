
   var menu = document.getElementById('navbar');
   const btnMenu = document.getElementById('btn-menu');

   btnMenu.addEventListener("click",

   function(){
    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }  
   }
)
