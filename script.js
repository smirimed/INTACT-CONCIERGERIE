let menu = document.querySelector(".menusvg");
let navbar = document.querySelector(".navbar");


menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
   
    
    

});

window.onscroll = () => {
    navbar.classList.remove("active");
    
}

