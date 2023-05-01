const input = document.querySelector("input")
const botao = document.querySelector("button")
const tarefa = document.querySelector("ul")



let lista = []


const adicionarTarefas = () => {
    if (input.value) {
        lista.push({
            name: input.value,
            completa: false
        })
        input.value = ""
    
    } else {
        alert("Digite alguma coisa")
    }
    mostrarTarefa()
    
}




const mostrarTarefa = () => {
    let tela = ""

    lista.forEach((item, index) => {
        tela = tela + `
         <li class="task ${item.completa && "done"}">
            <img src="./img/checked.png" alt="checked" onclick="completarTarefa(${index})">
            <p>${item.name}</p>
            <img src="./img/trash.png" alt="trash"  onclick="apagarItens(${index})">
         </li>
    `
    })
    tarefa.innerHTML = tela

    localStorage.setItem("lista",JSON.stringify(lista))

}

    const apagarItens = (index) => {
    lista.splice(index, 1)
    mostrarTarefa()
}

const completarTarefa=(index)=> {
    lista[index].completa=!lista[index].completa
    mostrarTarefa()
}



const pegarItens=()=> {
    const recarregarTarefas=JSON.parse(localStorage.getItem("lista"))
    if(recarregarTarefas) {
        lista=recarregarTarefas
        
    }
    mostrarTarefa()
}

pegarItens()


botao.addEventListener("click", adicionarTarefas)

