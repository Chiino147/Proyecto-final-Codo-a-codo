function guardar() {

    let n = document.getElementById("txtNombre").value
    let r = document.getElementById("txtRecompensa").value
    let m = document.getElementById("txtMotivo").value
    let s = document.getElementById("txtSexo").value
    let i = document.getElementById("txtImagen").value

    let usuario = {
        nombre: n,
        recompensa: r,
        motivo: m,
        sexo: s,
        imagen: i
    }
    let url = "http://localhost:8080/personasbuscadas"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // redirect: 'follow'
    }
    fetch(url, options)
        .then(function() {
            console.log("creado")
            alert("Grabado")

            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar")
            console.error(err);
        })
}