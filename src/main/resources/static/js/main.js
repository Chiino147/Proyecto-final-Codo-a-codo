if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data() {
            return {
                usuarios: [],
                errored: false,
                loading: true,
            }
        },
        created() {
            var url = "http://localhost:8080/personasbuscadas"
            this.fetchData(url);
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.usuarios = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(usuario) {
                const url = 'http://localhost:8080/personasbuscadas/' + usuario;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }

        }
    })
}


function alerta() {
    alert("Datos enviados al email")
}
/*var sexoPersona = c
if (sexoPersona == "M") {
    document.getElementById("foto").innerHTML = hombre
} else {
    document.getElementById("foto").innerHTML = mujer
}*/

var foto = document.getElementById("td-foto")
console.log(foto)