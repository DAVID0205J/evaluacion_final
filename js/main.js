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

    // PROGRAMACIÓN DEL BOTÓN CREAR
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

// PROGRAMACIÓN DEL BOTÓN
let btn_formulario = document.querySelector(".btn_mas");
btn_formulario.addEventListener("click", cargar_formulario);











//PROGRAMACIÓN de numero asignaciones
let contador = 0;

document.querySelector('.mas_asignaciones').addEventListener('click', () => {
    contador++;
    document.querySelector('.numero').textcontent = contador;
    console.log(contador);

});


function cargar_asignacion() {
    let cuadro_de_tareas = document.querySelector(".asignaciones");

    tareas.forEach((cada_tarea) => {
        let div_tarea = document.createElement("div");
        div_tarea.classList.add("asignaciones");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
                <p class="texto1">${cada_tarea.tarea}</p>
            `;
            
        } else {
            div_tarea.innerHTML = `
                <p class="texto">${cada_tarea.tarea}</p>
                <p class="estado">[X]</p>
            `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });

    
}
cargar_asignacion();

//programacion asignaciones

function cargar_btn_asignacion() {
    let caja = document.querySelector(".mas_asignaciones");

    caja.innerHTML = `
        <div>+</div>
    `;
}
cargar_btn_asignacion();


//proga formulario 2
function cargar_formulario2() {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b");
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>

        <div class="div_formulario">
            <p class="T_usuario">ingresa la asignacion</p>
            <input type="text" class="entrada-usuario" placeholder="nueva asignacion">
        </div>

        <div class="btn-crear">Crear</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_b");
    });

    // PROGRAMACIÓN DEL BOTÓN CREAR
    let btn_crear = document.querySelector(".btn-crear");

    btn_crear.addEventListener("click", () => {
        let tarea = document.querySelector(".entrada-tarea").value;

        let estructura_de_tarea = {
            estado: true,
            id: tareas.length + 1,
            tarea: tarea,

        };

        tareas.push(estructura_de_tarea);

        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML = "";

        cargar_tareas();

        ventana_formulario.classList.remove("activar_b");
    });
}


let form = document.querySelector(".mas_asignaciones");
form.addEventListener("click", cargar_formulario2);




