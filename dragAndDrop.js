/*
const card armazena toda classe card do html
const dropzones armazena todas as classes cards (3).

Após pegar cada um dos cartoes (card), para cada um dos cartoes, vou adicionar um evento: dragstart, drag, dragend. Que irão rodar as suas respectivas funções
*/

const card = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".cards")

/*nossos cards*/
card.forEach((card) => {
  /*elementoHTML.addEventListener(nomeDoEventoDOM, funçãoQueSeraExecada)*/
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart() {
  /*Para cada cards, adicionar a classe highlight*/
  dropzones.forEach((cards) => cards.classList.add("highlight"))
  this.classList.add("is-dragging")
}

function drag() {
  //console.log("is dragging")
}

function dragend() {
  //console.log("stop dragging")
  dropzones.forEach((cards) => cards.classList.remove("highlight"))
  this.classList.remove("is-dragging")
}

/*Lugar onde vamos dropar os cards */
dropzones.forEach((cards) => {
  cards.addEventListener("dragenter", dragenter)
  cards.addEventListener("dragover", dragover)
  cards.addEventListener("dragleave", dragleave)
  cards.addEventListener("drop", drop)
})

function dragenter(event) {
  console.log("dropzone: Entrando na zona")
}

function dragover() {
  //this = cards
  this.classList.add("over")

  //Pegar o dragging card
  const cardBeingDragged = document.querySelector(".is-dragging")

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  this.classList.remove("over")
}

function drop() {
  this.classList.remove("over")
}

function drop(event) {
  console.log("soltar")
}
