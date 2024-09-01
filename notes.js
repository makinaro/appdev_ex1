let notes = [];

const createNote = (title, content) =>{
    const id = notes.length + 1;
    const note = {
        id: id,
        title: title,
        content: content
    };
    notes.push(note);
    console.log("Note created successfully.");
}

const getNoteById = (id) =>{
    const note = notes.find(note => note.id === id);
    if (note) {
        return note;
    } else {
        console.log("ID not found.");
        return null;
    }
}

const updateNote = (id, newTitle, newContent) =>{
    const note = getNoteById(id);
    if (note) {
        note.title = newTitle;
        note.content = newContent;
        console.log("Note updated successfully.");
    }
}

const deleteNote = (id) =>{
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        console.log("Note deleted successfully.");
    } else {
        console.log("Note not found.");
    }
}

const getAllNotes = () =>{
    return notes;
}

const displayNotes = () =>{
    notes.forEach(note => {
        console.log(`Title: ${note.title}`);
        console.log(`Content: ${note.content.substring(0, 20)}`);
    });
}

createNote('Shopping List', 'Buy milk, bread, and eggs.');
createNote('Meeting Notes', 'Discuss the project deadline.');
displayNotes();

updateNote(1, 'Updated Shopping List', 'Buy milk, bread, eggs, and butter.');
displayNotes();