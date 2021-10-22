const comprarTickets = () => {
    document.getElementById("main").innerHTML = `
        <section class="container" id="comprarTickets">
            <div class="row justify-content-center text-center mt-4">
                <div class="col-12 col-xl-7 card-group px-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Estudiante</h5>
                            <div class="card-text-2">
                                <p>Tienen un descuento</p>
                                <p class="fw-bold">80%</p>
                                <p class="fs-9">* presentar documentación</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Trainee</h5>
                            <div class="card-text-2">
                                <p>Tienen un descuento</p>
                                <p class="fw-bold">50%</p>
                                <p class="fs-9">* presentar documentación</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Junior</h5>
                            <div class="card-text-2">
                                <p>Tienen un descuento</p>
                                <p class="fw-bold">15%</p>
                                <p class="fs-9">* presentar documentación</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-xl-7">
                    <div class="fs-9 text-center">
                        <p class="m-0 mt-2 p-0">VENTA</p>
                        <h2 class="mb-3">VALOR DE TICKET $200</h2>
                    </div>
                    <form action="#" target="_blank" autocomplete="off">
                        <div class="row px-3">
                            <div class="col-12 col-sm-6 px-1 mb-3">
                                <input type="text" class="form-control" placeholder="Nombre"
                                    aria-label="Nombre" id="tNombre" name="tNombre" value="">
                            </div>
                            <div class="col-12 col-sm-6 px-1 mb-3">
                                <input type="text" class="form-control" placeholder="Apellido"
                                    aria-label="Apellido" id="tApellido" name="tApellido" value="">
                            </div>
                            <div class="col-12 px-1 mb-3">
                                <input type="email" class="form-control" placeholder="Correo"
                                    aria-label="Correo" id="tCorreo" name="tCorreo" value="">
                            </div>

                            <div class="col-12 col-sm-6 px-1 mb-3">
                                <p class="m-0 mb-2 p-0">Cantidad</p>
                                <input type="text" class="form-control" placeholder="Cantidad"
                                    aria-label="Cantidad" id="tCantidad" name="tCantidad" value="">
                            </div>
                            <div class="col-12 col-sm-6 px-1 mb-3">
                                <label for="inputState" class="m-0 mb-2 p-0">Categoría</label>
                                <select class="form-select" id="inputState" name="inputState">
                                    <option value="Estudiante" selected>Estudiante</option>
                                    <option value="Trainee">Trainee</option>
                                    <option value="Junior">Junior</option>
                                </select>
                            </div>

                            <div class="col-12 px-1 my-3">
                                <div class="alert alert-primary" role="alert" id="totalCompra">
                                    Total a Pagar: $
                                </div>
                            </div>
                            
                            <div class="col-12 col-sm-6 px-1 mb-3">
                                <button type="reset" onclick="borrar()" class="btn btn-enviar w-100">Borrar</button>
                            </div>
                            <div class="col-12 col-sm-6 px-1 mb-3">
                                <!-- Button trigger modal -->
                                <button type="button" id="botonCalcular" class="btn btn-enviar w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Resumen
                                </button>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Ticket N° xXxXx</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="button" class="btn btn-primary">Confirmar Compra</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        `;

        document.getElementById("botonCalcular").addEventListener('click', () => {
            let inputs = document.querySelectorAll("input");
            let descuento = document.getElementById("inputState").value;
            let comprador = {
                nombre: inputs[0].value,
                apellido: inputs[1].value,
                correo: inputs[2].value,
                cantidad: inputs[3].value
            };
            console.log(calcularValor(descuento, comprador));
        });
};

const calcularValor = (desc, comp) => {
    let resultado = 0, descuento = 0, valorTicket = 200;
    switch(desc) {
        case "Estudiante": //Descuento del 80%
            descuento = valorTicket * comp.cantidad * 0.8;
            resultado = valorTicket * comp.cantidad * 0.2;
            break;
        case "Trainee": //Descuento del 50%
            descuento = valorTicket * comp.cantidad * 0.5;
            resultado = valorTicket * comp.cantidad * 0.5;
            break;
        case "Junior": //Descuento del 15%
            descuento = valorTicket * comp.cantidad * 0.15;
            resultado = valorTicket * comp.cantidad * 0.85;
            break;
    }

    let alert = document.getElementById("totalCompra");
    alert.innerHTML = `Total a Pagar: $ ${resultado}`;

    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerHTML = "Ticket N° ";
    for (let index = 0; index < 8; ++index) {
        modalTitle.innerHTML += Math.floor(Math.random() * 9);
    }

    let modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = `
        <p>Nombre: ${comp.nombre}</p>
        <p>Apellido: ${comp.apellido}</p>
        <p>Correo: ${comp.correo}</p>
        <p>Categoría: ${desc}</p>
        <p>Cantidad de Entradas: ${comp.cantidad}</p>
        <p>Descuento: $ ${descuento}</p>
        <p class="fw-bold">Total a Pagar: $ ${resultado}</p>
        `;

    return `Total a Pagar: $ ${resultado}`;
};

const borrar = () => {
    let alert = document.querySelector("#totalCompra");
    alert.innerHTML = `Total a Pagar: $`;
}