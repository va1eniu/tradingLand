import {getCiclistas, postCiclistas, deleteCiclistas, getCiclistasOne, updCiclistasOne} from "../acciones/API.js";
document.addEventListener("DOMContentLoaded", iniciar);
//GET Ciclistas
async function iniciar(){
    const datos = await getCiclistas();
    const tablas = document.querySelector("#insert");
    console.log(datos);
    datos.forEach(element => {
        const {_id, nombre} = element;
        tablas.innerHTML += `
            <tr>
                <td>${_id}</td>
                <td>${nombre}</td>
             
                <td>
                    <button class="btn btn-danger delete" id="${_id}">ELIMINAR</button>
                </td>
                <td>
                    <button class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT" id="${_id}">EDITAR</button>
                </td>
            </tr>
        `
    });
}
//POST
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", datosPOST);

function datosPOST(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;

    console.log(nombre);

    const data = {
        nombre,
     
    }
    console.log(data);

    if(validate(data)){
        postCiclistas(data);
        alert("Los datos se han ingresado satisfactoriamente");
    }else {
        alert("no pasa");
    }
}
//DELETE
const laTabla = document.querySelector("#insert");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Ciclistas = e.target.getAttribute("id");
        console.log(id_Ciclistas);
        const confir = confirm("¿Seguro que deseas eliminar el dato?");
        if(confir){
            deleteCiclistas(id_Ciclistas);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Ciclistas = e.target.getAttribute("id");
        console.log(id_Ciclistas);
        const datos = await getCiclistasOne(id_Ciclistas);
        const nombre = document.querySelector("#nombre2");
        const edad = document.querySelector("#edad2");
        const estatura = document.querySelector("#estatura2");
        nombre.value = datos.nombre;
        edad.value = datos.edad;
        estatura.value = datos.estatura;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updCiclistas);
        function updCiclistas(e){
            e.preventDefault();
            const nombre = document.querySelector("#nombre2").value;
            const edad = document.querySelector("#edad2").value;
            const estatura = document.querySelector("#estatura2").value;
            
            const datosUpd = {
                nombre,
                edad,
                estatura
            }

            if(validate(datosUpd)){
                updCiclistasOne(datosUpd, id_Ciclistas);
            }
        }
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element != "");
}