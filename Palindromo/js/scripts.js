const parola = prompt("Scrivi una parola");
const invertita = parola.split("").reverse().join("");
console.log("Parola:", parola);
console.log("Parola invertita:", invertita);
function palindromo(parola, invertita){   
    if (parola === invertita) {
        return alert("La parola è un palindromo");
    } 
    else {
        return alert("La parola non è un palindromo");
    }
}

palindromo(parola, invertita);