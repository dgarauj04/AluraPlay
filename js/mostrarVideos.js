import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");


export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`

            return video;
}

async function listaVideos() {
    try {
        console.log('Tentando conectar à API...');
        const listaApi = await conectaApi.listaVideos();
        
        if (!Array.isArray(listaApi)) {
            throw new Error('A resposta da API não é um array');
        }

        console.log('Dados recebidos da API:', listaApi);
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch (error) { 
        console.error('Erro ao conectar com a API:', error);
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`;
    }
}

listaVideos();