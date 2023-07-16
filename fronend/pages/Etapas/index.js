import {getEtapas, postEtapas, deleteEtapas, getEtapasOne, updEtapasOne} from "./API.js";
document.addEventListener("DOMContentLoaded", iniciar);
//GET Etapas
async function iniciar(){
    const datos = await getEtapas();
    const tablas = document.querySelector("#insert");
    console.log(datos);
    datos.forEach(element => {
        const {_id,etapa ,tipo, fecha, distancia} = element;
        tablas.innerHTML += `
            <tr>
                <td>${etapa}</td>
                <td>${tipo}</td>
                <td>${fecha}</td>
                <td>${distancia}</td>
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
    const etapa = document.querySelector("#etapa").value;
    const tipo = document.querySelector("#tipo").value;
    const fecha = document.querySelector("#fecha").value;
    const distancia = document.querySelector("#distancia").value;

    const data = {
        etapa,
        tipo,
        fecha,
        distancia
    }
    console.log(data);

    if(validate(data)){
        postEtapas(data);
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
        const id_Etapas = e.target.getAttribute("id");
        console.log(id_Etapas);
        const confir = confirm("¿Seguro que deseas eliminar el dato?");
        if(confir){
            deleteEtapas(id_Etapas);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Etapas = e.target.getAttribute("id");
        console.log(id_Etapas);
        const datos = await getEtapasOne(id_Etapas);
        const etapa = document.querySelector("#etapa2");
        const tipo = document.querySelector("#tipo2");
        const fecha = document.querySelector("#fecha2");
        const distancia = document.querySelector("#distancia2");
        etapa.value = datos.etapa;
        tipo.value = datos.tipo;
        fecha.value = datos.fecha;
        distancia.value = datos.distancia;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEtapas);
        function updEtapas(e){
            e.preventDefault();
            const etapa = document.querySelector("#etapa2").value;
            const tipo = document.querySelector("#tipo2").value;
            const fecha = document.querySelector("#fecha2").value;
            const distancia = document.querySelector("#distancia2").value;
            
            const datosUpd = {
                etapa,
                tipo,
                fecha,
                distancia
            }

            if(validate(datosUpd)){
                updEtapasOne(datosUpd, id_Etapas);
            }
        }
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element != "");
}