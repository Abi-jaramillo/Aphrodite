let navbar = document.getElementById("navbar");
window.navbar = navbar;

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
                
                <li class="nav-item dropdown">
                <div class="btn-group">
                <a class="btn btn-lg nav-link active" href="../HTML/tienda.html" >
                    Tienda
                </a>
                <button type="button" class="btn btn-lg dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/HTML/piel.html">Piel</a></li>
                    <li><a class="dropdown-item" href="../HTML/maquillaje.html">Maquillaje</a></li>
                    <li><a class="dropdown-item" href="/HTML/cabello.html">Cabello</a></li>
                </ul>
                </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../HTML/contactanos.html">Contáctanos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../HTML/acercadenosotros.html">Nosotros</a>
                </li>
                
                <li class="nav-item dropdown">
                <a class="btn btn-lg nav-link active" href="#" >
                Blog
                </a>
                <button type="button" class="btn btn-lg dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
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