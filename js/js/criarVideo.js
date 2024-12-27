import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagemUrl = document.querySelector("[data-imagem-url]").value;
    const imagemUpload = document.querySelector("[data-imagem-upload]");
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    let imagem;

if (imagemUpload.files.length > 0) {
    const file = imagemUpload.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        imagem = reader.result; 
        enviarVideo(titulo, descricao, url, imagem);
    };
    reader.readAsDataURL(file); 
} else {
    imagem = imagemUrl; 
    enviarVideo(titulo, descricao, url, imagem);
   }
}

async function enviarVideo(titulo, descricao, url, imagem) {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";

}
    
formulario.addEventListener("submit", evento => criarVideo(evento));