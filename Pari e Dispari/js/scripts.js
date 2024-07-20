const myNumber = Math.floor(Math.random() * 5);
const pari = document.getElementById("pari-button");
const dispari = document.getElementById("dispari-button");
const userNumber = document.getElementById("number");

pari.addEventListener("click",
    function(){
        userNumber.classList.replace("d-none", "d-block");
    }
)

dispari.addEventListener("click",
    function(){
        userNumber.classList.replace("d-none", "d-block");
    }
)
