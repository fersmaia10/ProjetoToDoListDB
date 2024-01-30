let tar = document.getElementById('txtt')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let tarefas = []

function adcionar(){
    
    if (tar.value.length == false){
        window.alert('Por favor, digite uma tarefa!')
    } else {
        tarefas.push(tar.value)
        let item = document.createElement('li')
        item.innerHTML = `<input type="checkbox" name="" id=""> ${tar.value} <input type="button" value="Excluir" id="exctar" name="exctar" onclick="exclui_tarefa">`
        lista.appendChild(item)
        res.innerHTML = ' '
    }
    tar.value = ''
    tar.focus()
}

function exclui_tarefa(){
        let tarefa = document.getElementById('task')
        

}