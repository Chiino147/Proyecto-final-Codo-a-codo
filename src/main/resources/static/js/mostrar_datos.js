var args = location.search.substr(1).split('&');

//alert(args)



// args='id=1,nombre=Focaccia,email=1500,prioridad=15'
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    //console.log(parts[i])
}
let fotoBusado = parts[5][1]
console.log(fotoBusado)
let motivo = decodeURIComponent(parts[3][1]) //Sacar el %20 :D
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1]
document.getElementById("txtRecompensa").value = parts[2][1]
document.getElementById("txtMotivo").value = motivo
document.getElementById("txtSexo").value = parts[4][1]


var part1 = "<img class='foto' src="
var part2 = fotoBusado
var part3 = " alt=''></img>"
var partecitas = part1 + part2 + part3
document.getElementById("foto").innerHTML = partecitas
console.log(partecitas)
var foto = "<img class='foto' src= + ./img/ladron1.jpg' alt=''></img>"
var hombre = "<img class='foto' src='./img/ladron1.jpg' alt=''></img>"
var mujer = "<img class='foto' src='./img/ladron2.jpg' alt=''></img>"

var sexoPersona = document.getElementById("txtSexo").value

var foto = "<img class='{{}}' src='' alt=''></img>"

/*if (sexoPersona == "M") {
    document.getElementById("foto").innerHTML = hombre
} else {
    document.getElementById("foto").innerHTML = mujer
}
*/