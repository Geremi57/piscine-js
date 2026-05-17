export function compose() {
    document.addEventListener('keydown', handleKeyPress)
}

function handleKeyPress(event) {
    const key = event.key
    if (isLetter(key)) {
        addNote(key)
        return 
    }
    if (key === 'Backspace' || event.code === 'Backspace') {
        deleteLastNote()
        return
    }
    if (key === 'Escape') {
        removeAllNotes()
    }
}

function isLetter(char) {
    return char.length === 1 && /[a-z]/.test(char)
}

function addNote(letter) {
    const noteElement = document.createElement('div')
    noteElement.classList.add('note')
    
    const greenValue = letter.charCodeAt(0)
    noteElement.style.backgroundColor = `rgb(10, ${greenValue}, 10)`
    
    noteElement.textContent = letter
    document.body.appendChild(noteElement)
}

function deleteLastNote() {
    const notes = document.querySelectorAll('.note')

    if (notes.length > 0) {
        const lastNote = notes[notes.length - 1]
        lastNote.remove()
    }
}

function removeAllNotes() {
    const notes = document.querySelectorAll('.note')

    for (const note of notes) {
        note.remove()
    }
}