class agregarTarea {
    constructor(usuario, tarea, fecha) {
        this.usuario = usuario;
        this.tarea = tarea;
        this.fecha = fecha;

    }
}


function add() {

    usuario = prompt("Ingresa nombre de usuario: ");
    tarea = prompt("Ingresa descripción de la tarea: ");
    fecha = prompt("Ingresa fecha de la tarea: ");
    const descripcion = new agregarTarea(usuario, tarea, fecha);
    tareas.push(descripcion);
    alert("Nota agregada");

}


const tareas = [];

function list() {

    while (true) {
        const filtro = prompt("Menu:\n1.Por usuario \n2.Todos \n3.Menu principal");

        switch (filtro) {
            case "1":
                const porUsuario = prompt("Ingrese usuario: ");
                let foundNote = null;
                tareas.forEach(function (note) {
                    if (note.usuario === porUsuario) {
                        foundNote = note;
                    }
                });
                if (foundNote !== null) {
                    alert(
                        "Usuario: " + foundNote.usuario + "\n" +
                        "Nota: " + foundNote.tarea + "\n" +
                        "Fecha: " + foundNote.fecha
                    );

                }
                else {
                    alert("Usuario no encontrado");
                }

                break;
            case "2":
                tareas.forEach(all => {
                    alert(
                        "Usuario: " + all.usuario + "\n" +
                        "Nota: " + all.tarea + "\n" +
                        "Fecha: " + all.fecha);
                });


                break;

            case "3":
                return;
        }
    }

}


function menu() {
    let opcion;
    while (opcion !== "3") {
        const tareas = [];
        opcion = prompt("Menu:\n1.Agregar tarea \n2.Listar tareas \n3.Salir");

        switch (opcion) {
            case "1":
                add()
                break;
            case "2":
                list()
                break;
            case "3":
                console.log("Saliendo...");
                break;
            default:
                alert("Opcion incorrecta.")
        }
    }
}

menu()