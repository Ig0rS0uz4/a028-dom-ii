function adicionaItem(event){
    let novoItem = document.createElement("article")
    novoItem.classList.add("item")
    let referencia = document.querySelector(".container")
    referencia.insertAdjacentElement("beforeend", novoItem)
}

function removeItem(){
    event.target.remove("Item")
}