const $inputNewTarefas = document.querySelector('.input-new-tarefas')
const $buttonAddTarefas = document.querySelector('.button-add-tarefas')
const $localAddTarefas = document.querySelector('.local-add-tarefas')

// const $buttonRemoveItemTarefa = document.querySelectorAll('.button-remove-item-tarefa')

function createTarefa(textInput) {
    const $li = createLi()
    // li.textContent = textInput
    const $p = document.createElement('p')
    const tx = '- ' + textInput
    const text = document.createTextNode(tx)
    console.log(text)
    $p.appendChild(text)
    $li.appendChild($p)
    $localAddTarefas.appendChild($li)

    createButtonDelete($li)
}

function createLi() {
    return document.createElement('li')
}

function clearInput() {
    $inputNewTarefas.value = ''
    // $inputNewTarefas.focus()
}

function createButtonDelete($li) {
    const $divButton = document.createElement('div')
    $divButton.classList.add('button-generic')
    
    // $divButton.setAttribute('class', 'button-remove-item-tarefa button-generic')
    
    $divButton.classList.add('button-remove-item-tarefa', 'button-generic')
    $divButton.setAttribute('title', 'Apagar esta tarefa')


    const text = document.createTextNode('Remover')
    $divButton.appendChild(text)
    $li.appendChild($divButton)
}

document.addEventListener('click', function(event){
    const element = event.target

    if(element.classList.contains('button-remove-item-tarefa')){
        element.parentElement.remove()
    }
})


$inputNewTarefas.addEventListener('keypress', function (event) {
    // console.log(event)
    if (event.keyCode === 13) {
        const $inputValue = $inputNewTarefas.value

        if (!$inputValue) return
        
        createTarefa($inputValue)
        clearInput()
    }
})

$buttonAddTarefas.addEventListener('click', function (event) {
    // event.preventDefault()
    const $inputValue = $inputNewTarefas.value

    if (!$inputValue) return
    
    createTarefa($inputValue)
    clearInput()
})