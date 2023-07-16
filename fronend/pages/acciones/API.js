const urlGet = "http://localhost:9000/api/acciones";
const urlPost = "http://localhost:9000/api/acciones";
const urlDelete = "http://localhost:5200/ciclistas/del";
const urlGetOne = "http://localhost:5200/ciclistas/get"
const urlUpd = "http://localhost:5200/ciclistas/upd";

export const getCiclistas = async () => {
    try {
        const extract = await fetch(urlGet);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postCiclistas = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Ciclistas.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteCiclistas = async (id_Ciclistas) => {
    try {
            await fetch(`${urlDelete}/${id_Ciclistas}`,{
                method: "DELETE"
            })
            window.location = "Ciclistas.html"
    } catch (error) {
        console.log(error);
    }
}

export const getCiclistasOne = async (id_Ciclistas) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Ciclistas}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updCiclistasOne = async (objeto, id_Ciclistas) => {
    try {
        await fetch(`${urlUpd}/${id_Ciclistas}`,{
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Ciclistas.html"
    } catch (error) {
        console.log(error);
    }
} 