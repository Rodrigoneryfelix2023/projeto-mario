/* 
* OBJETIVO 1 * - quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.
* passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js.
* passo 2 - dar um jeito de identificar quando o usuario clicar no botão.
* passo 3 - dar um jeito de de pegar o elemento da modal no js.
* passo 4 - abrir a modal na tela.
* OBJETIVO 2 * - quando o usuario clicar no x devemos fechar a modal.
*passo 1 - dar um jeito de pegar o elemento de fechar de fechar modal usanddo o js.
* passo 2 - dar um identificar quando o usuario clicar no X.
* passo 3 - fechar a modal.*/


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {

    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {

    modal.classList.remove("aberto");
    video.setAttribute("src", "")

})









