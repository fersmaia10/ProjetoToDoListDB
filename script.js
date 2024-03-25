let task = document.querySelector('input#task')
let tasklist = document.querySelector('ul')
let res = document.querySelector('div#res')

function addtask(){
    if (task.value.length <= 3){
        window.alert('Quantidade de caractéres inválida. Digite mais de 3!')
        return
    }
    
    
    let vtask = String(task.value)
    let li = document.createElement('li')
    let identity = vtask.replace(' ', '_')
    
    
    let span = document.createElement('span')
    span.innerHTML = vtask
    span.setAttribute('id', 'litask' + identity)
    
    li.setAttribute('id', 'litask' + identity)
    li.appendChild(span)
    tasklist.appendChild(li)
    li.innerText = `${vtask}`
    
    
    let doneButton = document.createElement('button')
    doneButton.setAttribute('id', 'btndone' + identity)
    doneButton.innerText = 'Concluido'
    doneButton.classList.add('btn')
    doneButton.classList.add('btn-done', identity)
    doneButton.setAttribute('data-identity', identity)
    doneButton.addEventListener('click', doneClick)
    
    let trashButton = document.createElement('button')
    trashButton.setAttribute('id', 'btndel' + identity)
    trashButton.innerText = 'Remover'
    trashButton.classList.add('btn')
    trashButton.classList.add('btn-remove')
    trashButton.setAttribute('data-identity', identity)
    trashButton.addEventListener('click', deleteClick)

    
    let buttonContainer = document.createElement('div')
    buttonContainer.appendChild(doneButton)
    buttonContainer.appendChild(trashButton)
    li.appendChild(buttonContainer)
    


    task.value = ''
    task.focus()
}    

function doneClick(){
    let identity = this.getAttribute('data-identity')
    let text = document.querySelector(`#litask${identity}`)
    text.classList.add('done')
    this.remove()
}

function deleteClick(){
    let identity = this.getAttribute('data-identity')
    let li = document.querySelector (`#litask${identity}`)
    li.remove()
}