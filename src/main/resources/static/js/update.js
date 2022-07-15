//alert(location)  // http://127.0.0.1:5500/src/update.html?id=1&nombre=Focaccia&email=1500&prioridad=15
//alert(location.search)  // devuelve de la URL desde el ? , muestra "?id=1&nombre=Focaccia&email=1500&prioridad=15"
//alert(location.search.substr(1))  // devuelve de la URL a partir del ? , muestra "id=1&nombre=Focaccia&email=1500&prioridad=15"

var args = location.search.substr(1).split('&');
//alert(args)

// args='id=1,nombre=Focaccia,email=1500,prioridad=15'
console.log(args)
    // lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i])
}
// parts=[ [id,1], [nombre,'Focaccia'], [email,'x1500],[prioridad,15]]
// parts[0] [id,1]
// parts[1] [nombre,'Focaccia']
// parts[2] [email,'xxxxx']
// parts[3] [prioridad,15]
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1]
document.getElementById("txtRecompensa").value = parts[2][1]
let motivo = decodeURIComponent(parts[3][1])
document.getElementById("txtMotivo").value = motivo
document.getElementById("txtSexo").value = parts[4][1]
document.getElementById("txtImagen").value = parts[5][1]
var fotoBusado = parts[5][1]
    //console.log(linkFoto)
var part1 = "<img  style='width:200px; height: 200px; margin:1rem;' class='foto' src="
var part2 = fotoBusado
var part3 = " alt=''></img>"
var partecitas = part1 + part2 + part3
document.getElementById("foto").innerHTML = partecitas

function modificar() {
    let i = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let r = document.getElementById("txtRecompensa").value
    let m = document.getElementById("txtMotivo").value
    let s = document.getElementById("txtSexo").value
    let f = document.getElementById("txtImagen").value
    let usuario = {
        id: i,
        nombre: n,
        sexo: s,
        recompensa: r,
        motivo: m,
        imagen: f
    }
    let url = "http://localhost:8080/personasbuscadas"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function() {
            console.log("modificado")
            alert("Registro modificado")
                // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })
}