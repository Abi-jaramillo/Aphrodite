let navbar = document.getElementById("navbar");
navbar.insertAdjacentHTML("beforeend", `
    <nav class= "navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Aphrodite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="lista">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/src/">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Tienda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contáctanos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Reservaciones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Reseñas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Blog</a>
                </li>
                
                <button type="button" class="btn btn-success" id= "carrito">Carrito</button>
              
            </ul>
            
        </div>
    </div>
    </nav >
`);