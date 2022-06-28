const HOST = 'http://localhost';
const API_ROOT = `${HOST}/galeria`;
const API_BASE = `${API_ROOT}/Controllers/`;

async function Fetch(info,method = "POST"){
    const dados = new FormData();

    for(let prop in info){
        dados.append(prop,info[prop]);
    }

    let res = await fetch(API_BASE,{
        method,
        body:dados
    })

    res = await res.json();

    return res;
}
const API = {
    API_URL:API_ROOT,
    async obter_fotos(){
        let res = await Fetch({
            controller:'Galeria',
            funcao:'obter_fotos'
        });

        return res;
    },
    async cadastrar_foto(legenda,nome,data,ficheiro){
        let res = await Fetch({
            controller:'Galeria',
            funcao:'cadastrar_foto',
            legenda,
            nome,
            data,
            ficheiro
        });

        return res;
    },
    async apagar_foto(id_foto){
        let res = await Fetch({
            controller:'Galeria',
            funcao:'apagar_foto',
            id_foto
        });

        return res;
    },
    async alterar_legenda(id,legenda){
        let res = await Fetch({
            controller:'Galeria',
            funcao:'alterar_legenda',
            id_foto:id,
            legenda
        });

        return res;
    }
}

export default API;