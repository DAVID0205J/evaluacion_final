import { tareas } from './data.js';
import { tareas2 } from './data.js';

function cargar_tareas() {
    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {
        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpAIprXCYrYC9zsTc6oJJdUPZXUrKCWgJ7g&s" alt="" width="40rem">
                <div class="textos">
                <p class="texto1">${cada_tarea.correo}</p>
                <p class="texto2">${cada_tarea.usuario}</p>
                </div>
                <P class="numero">0</P>
                <button class="mas_asignaciones">+</button>
                <div class="asignaciones"></div>
            `;
            
        } else {
            div_tarea.innerHTML = `
                <p class="texto">${cada_tarea.usuario}</p>
                <p class="estado">[X]</p>
            `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });

    // Reasignar eventos a botones de asignaciones
    document.querySelectorAll('.mas_asignaciones').forEach((button, index) => {
        button.addEventListener('click', () => {
            cargar_formulario2(index);
        });
    });
}

cargar_tareas();

function cargar_botones() {
    let caja_btn = document.querySelector(".botones");

    caja_btn.innerHTML = `
        <div class="btn_mas">Agregar Nuevo usuario</div>
    `;
}

cargar_botones();

function cargar_formulario() {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b");
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>
        <div class="div_formulario">
            <h3 class="titulo">REGISTRO</h3>
            <div class="Primer_entrada">
                <p class="T_usuario">usuario</p>
                <input type="text" class="entrada-usuario" placeholder="Usuario">
            </div>
            <div class="Segunda_entrada">
                <p class="T_correo">Correo</p>
                <input type="text" class="entrada-correo" placeholder="Correo">
            </div>
        </div>
        <div class="btn-crear">Crear</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_b");
    });

    let btn_crear = document.querySelector(".btn-crear");
    btn_crear.addEventListener("click", () => {
        let usuario = document.querySelector(".entrada-usuario").value;
        let correo = document.querySelector(".entrada-correo").value;

        let estructura_de_tarea = {
            estado: true,
            id: tareas.length + 1,
            usuario: usuario,
            correo: correo,
        };

        tareas.push(estructura_de_tarea);

        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML = "";

        cargar_tareas();

        ventana_formulario.classList.remove("activar_b");
    });
}

let btn_formulario = document.querySelector(".btn_mas");
btn_formulario.addEventListener("click", cargar_formulario);

let contador = 0;

function cargar_formulario2(index) {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b");
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>
        <div class="div_formulario">
            <p class="T_usuario">Ingresa la asignación</p>
            <input type="text" class="entrada-tarea" placeholder="Nueva asignación">
        </div>
        <div class="btn-crear_tarea">Crear</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_b");
    });

    let btn_crear_tarea = document.querySelector(".btn-crear_tarea");
    btn_crear_tarea.addEventListener("click", () => {
        let tarea = document.querySelector(".entrada-tarea").value;

        let nueva_asignacion = document.createElement("div");
        nueva_asignacion.classList.add("asignacion");
        nueva_asignacion.innerText = tarea;

        let asignacionesDiv = document.querySelectorAll(".asignaciones")[index];
        asignacionesDiv.appendChild(nueva_asignacion);

        contador++;
        let numero_tareas = document.querySelectorAll('.numero')[index];
        numero_tareas.textContent = contador;

        ventana_formulario.classList.remove("activar_b");
    });
}

cargar_asignacion();

function cargar_asignacion() {
    tareas2.forEach((cada_tarea) => {
        let cuadro_de_asignaciones = document.querySelector(".asignaciones");

        let div_tarea = document.createElement("div");
        div_tarea.classList.add("asignaciones");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
                <p class="texto1">Asignación 1</p>
            `;
        } else {
            div_tarea.innerHTML = `
                <p class="texto">${cada_tarea.tarea}</p>
            `;
        }
        cuadro_de_asignaciones.appendChild(div_tarea);
    });
}

cargar_btn_asignacion();

function cargar_btn_asignacion() {
    let caja = document.querySelector(".mas_asignaciones");
    caja.innerHTML = `
        <div>+</div>
    `;
}
