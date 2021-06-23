const chips = []
const addInput = document.querySelector('#inputText')
const displayArea = document.querySelector('.container')

function displayChips(currentName) {
    const chip = document.createElement('div')
    chip.className = 'chips'
    const img = document.createElement('img')
    img.src = "bBHe98c.png"
    const name = document.createElement('p')
    name.innerText = currentName
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'
    deleteButton.onclick = deleteChip

    chip.appendChild(img)
    chip.appendChild(name)
    chip.appendChild(deleteButton)

    displayArea.appendChild(chip)
}

function addChip() {
    addInput.value

    displayChips(addInput.value)
    addInput.value = ''
}

function deleteChip() {
    displayArea.removeChild(event.target.parentNode)
}