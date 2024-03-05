let navbar = document.getElementById("navbar");
navbar.insertAdjacentHTML("beforeend", `
    <nav class= "navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid">
        <a class="navbar-brand" href="../HTML/index.html">Aphrodite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
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
                <!--Blog menu-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Blog
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="../HTML/blog/puntosNegros.html">Prevenir puntos negros</a>
                        <a class="dropdown-item" href="../HTML/blog/peeling.html">Beneficios del peeling</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../HTML/administrador.html">Administrador</a>
                </li>
                
                <a href="#" target="_blank"><i id="carrito1" class="bi bi-cart3"></i></a>
            </ul>
            
        </div>
    </div>
    </nav >
`);