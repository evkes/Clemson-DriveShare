import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import AddNote from './components/AddNote';
import FullCalendar from '@fullcalendar/react' // https://fullcalendar.io/docs/month-view
import dayGridPlugin from '@fullcalendar/daygrid'
import Search from './components/Search';

const App = () => {
    let loadNotes;
    loadNotes = JSON.parse(localStorage.getItem('notid-notes-data') || '[]');

  //create a reusable initial value
  const initialState = {
    id:'',
    title:'',
    text:'',
    tag:'',
    date:''
  }
  const [currentNote, setCurrentNote] = useState(initialState)

  const [notes, setNotes] = useState(loadNotes);

  const [displayNotes, setDisplayNotes] = useState([]);

	useEffect(() => {
		localStorage.setItem(
			'notid-notes-data',
			JSON.stringify(notes||[])
		);
    setDisplayNotes(notes);
	}, [notes]);


  const [searchText, setSearchText] = useState('');

	const addNote = (title, text, tag, id) => {
    if(id){
      //if there is an id, remap all notes except the current one where we will need to change its contents
      const updatedNotes = notes.map((note) => {
        if(note.id === id){
          return {...note, title, text, tag, date: new Date().toLocaleDateString("en-US", {
            hour: "2-digit", 
            minute: "2-digit",
            second: "2-digit",
          }), }
        }
        return note
      })
      setNotes(updatedNotes)
      return
    }
    //else do the usual thing
		const newNote = {
			id: nanoid(),
      title: title,
			text: text,
      tag: tag,
			date: new Date().toLocaleDateString("en-GB", {
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit",
      }), 
		};
		const newNotes = [...notes];
    newNotes.push(newNote);
		setNotes(newNotes);
    
	};

	const handleDeleteNote = (id) => {

    //remove note from editing in case it is there
    if(currentNote.id ===  id){
      setCurrentNote(initialState)
    }

    
		let newNotes = [...notes];
    newNotes = newNotes.filter((note) => note.id !== id); 
		setNotes(newNotes);
    
	};

  const handleOnClickNote = (id) => {
    //find returns only one element while filter return array
    const noteChosen = notes.find((note) => note.id === id);
    if(noteChosen){
      setCurrentNote(noteChosen)
    }
  }

  return (
    <div className="App">
      <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notid</h1>
            </div>
            
            <div className='search-container'>
                <Search handleSearchNote={setSearchText} />
                
        </div>
            
            <div className="app-sidebar-notes">
                <NotesList
                    notes={displayNotes.filter((note) =>
                      note.title.includes(searchText) || 
                      note.tag.includes(searchText)
                    )}
                    handleDeleteNote={handleDeleteNote}
                    handleOnClickNote={handleOnClickNote}
                />
            </div>
            <div className="app-sidebar-calendar">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                showNonCurrentDates={false}
                />
            </div>   
        </div>
      <div className='note-container'>
          <Header></Header>
          <AddNote currentNote={currentNote} setCurrentNote={setCurrentNote} handleAddNote={addNote} handleOnClickNote={handleOnClickNote}></AddNote>
      </div>
    </div>
  );
}

export default App;

