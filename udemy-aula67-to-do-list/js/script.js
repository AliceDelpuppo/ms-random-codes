const $inputNewTarefas = document.querySelector('.input-new-tarefas')
const $buttonAddTarefas = document.querySelector('.button-add-tarefas')
const $localAddTarefas = document.querySelector('.local-add-tarefas')

function createTarefa(textInput) {
    const li = createLi()
    li.textContent = textInput

    $localAddTarefas.appendChild(li)
}

function createLi() {
    return document.createElement('li')
}

function clearInput() {
    $inputNewTarefas.value = ''
    // $inputNewTarefas.focus()
}

function createButtonDelete(li) {
    
}

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