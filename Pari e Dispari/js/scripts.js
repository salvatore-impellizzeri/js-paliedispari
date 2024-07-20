//          FUNZIONI

// Numero random tra 1 e 5
function randomNum(){
    return Math.floor(Math.random() * 5) + 1;
}

// Somma
function sum(x,y){
    return Number(x) + Number(y);
}

//          CODICE

const pari = document.getElementById("pari-button");
const dispari = document.getElementById("dispari-button");
const userNumber = document.getElementById("number");
const string = document.getElementById("stringa");
const invio = document.getElementById("invio");

pari.addEventListener("click",
    function(eventPari){
        let numberInput = document.getElementById("numberInput");
        userNumber.classList.replace("d-none", "d-block");
        string.classList.replace("d-none", "d-block");
        invio.addEventListener("click", 
            function(submit){
                console.log("Numero dell'utente:", numberInput.value)
                const numeroCasuale = randomNum();
                console.log("Numero casuale tra 1 e 5:", numeroCasuale);
                sum(numeroCasuale, numberInput.value)
                console.log(sum(numeroCasuale, numberInput.value));
                
                const risultato = document.getElementById("result");
                if(sum(numeroCasuale, numberInput.value) % 2 == 0){
                    risultato.innerHTML= "Hai vinto!";
                }
                else{
                    risultato.innerHTML= "Hai perso!";
                }
            }
        )
    }
)
