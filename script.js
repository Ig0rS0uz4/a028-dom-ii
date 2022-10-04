function adicionaItem(event){
    let novoItem = document.createElement("article")
    novoItem.classList.add("item")
    let container = document.querySelector(".container")
    container.insertAdjacentElement("beforeend", novoItem)

}

function removeItem(){
    event.target.remove("removeItem")
}