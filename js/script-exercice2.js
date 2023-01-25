let dataInput = prompt("Entrer des nombres séparés par une virgule (ex: 2,3)");
let dataSplit = dataInput.split(",");
console.log("La somme est " + (parseInt(dataSplit[0]) + parseInt(dataSplit[1])));