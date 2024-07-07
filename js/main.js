const nav = document.querySelector ("header nav");
const btn =  document.querySelector ("header span");

let estado = false; 

function show(){
    if (estado == false) {
        nav.style.transform = "translateY(70px)";
        btn.innerHTML = "<img src = 'img/x.png'>"
        estado = true;
        
           }
    else {
         nav.style.transform = "translateY(-428px)"
         btn.innerHTML = "<img src = 'img/hamburger.png'>"
         estado = false;
         
    }
}

btn.addEventListener (
    "click", ()=> {
        show();
    }
)