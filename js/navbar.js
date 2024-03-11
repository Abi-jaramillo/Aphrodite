let navbar = document.getElementById("navbar");
navbar.insertAdjacentHTML("beforeend", `
    <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
            <a class="navbar-brand" href="../HTML/index.html">Aphrodite</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <form class="d-flex" role="search">

                <input class="form-control me-2" type="search" id="box-search" placeholder="Buscar" aria-label="Search">

                    <button  onclick = "buscar()" class="btn btn-outline-success" type="submit">Buscar</button>

                    <ul id="results" class = "results"></ul>

            </form>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-transparent" id="lista">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../HTML/index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../HTML/tienda.html">Tienda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../HTML/contactanos.html">Contáctanos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../HTML/acercadenosotros.html">Nosotros</a>
                    </li>

                    <li class="nav-item dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Blog</strong>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/HTML/puntosNegros.html">Puntos negros</a></li>
                            <li><a class="dropdown-item" href="/HTML/peeling.html">Peeling</a></li>
                            <li><a class="dropdown-item" href="/HTML/cuidadocabello.html">Cuidado cabello</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../HTML/administrador.html">Administrador</a>
                    </li>

                    <a href="/HTML/login.html" target="_blank"><i id="login" class="bi bi-person-circle"></i></a>
                    <a href="#" target="_blank"><i id="carrito1" class="bi bi-cart3"></i></a>
                </ul>

            </div>
        </div>
    </nav >
    `);

let data = [
    "Tienda",
    "Contáctanos",
    "Inicio",
    "Nosotros",
    "Administrador",
    "Piel", "Cabello", "Maquillaje", "Peeling", "Puntos negros", "Log In", "Recomendaciones"

];

function buscar() {
    let query = document.getElementById("buscar").value;
    console.log(query);

    if (query.trim() === "") {
        return;
    }
    let results = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().includes(query.toLowerCase())) {
            results.push(data[i]);

        }
    }
    document.getElementById("results").innerHTML = "";
    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            let li = document.createElement("li");
            li.textContent = results[i];
            document.getElementById("results").appendChild
        }

    }

}


