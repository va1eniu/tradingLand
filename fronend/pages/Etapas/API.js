const urlGet = "http://localhost:5200/etapas/all";
const urlPost = "http://localhost:5200/etapas/post";
const urlDelete = "http://localhost:5200/etapas/del";
const urlGetOne = "http://localhost:5200/etapas/get"
const urlUpd = "http://localhost:5200/etapas/upd";

export const getEtapas = async () => {
    try {
        const extract = await fetch(urlGet);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postEtapas = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Etapas.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteEtapas = async (id_Etapas) => {
    try {
            await fetch(`${urlDelete}/${id_Etapas}`,{
                method: "DELETE"
            })
            window.location = "Etapas.html"
    } catch (error) {
        console.log(error);
    }
}

export const getEtapasOne = async (id_Etapas) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Etapas}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updEtapasOne = async (objeto, id_Etapas) => {
    try {
        await fetch(`${urlUpd}/${id_Etapas}`,{
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Etapas.html"
    } catch (error) {
        console.log(error);
    }
} 