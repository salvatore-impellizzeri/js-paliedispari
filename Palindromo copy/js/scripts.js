const parola = prompt("Scrivi una parola");
const invertita = parola.split("").reverse().join("");
console.log(invertita);
function palindromo(parola, invertita){   
    if (parola === invertita) {
        alert("La parola è un palindromo");
        return true;
    } 
    else {
        alert("La parola non è un palindromo");
        return false;
    }
}