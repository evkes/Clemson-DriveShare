
const AddNote = ({ currentNote, setCurrentNote, handleAddNote }) => {
	
	const characterLimit = 10000;
	const titleLimit = 1000;
	const tagLimit = 1000;

	const handleTagChange = (event) => {
		if (tagLimit - event.target.value.length >= 0) {
			setCurrentNote({...currentNote, [event.target.name]: event.target.value});
		}
	}

	const handleTitleChange = (event) => {
		if (titleLimit - event.target.value.length >= 0) {
			setCurrentNote({...currentNote, [event.target.name]: event.target.value});
		}
	}
	
	const handleTextChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setCurrentNote({...currentNote, [event.target.name]: event.target.value});
		}
	};

	const handleSaveClick = () => {
		handleAddNote(currentNote.title, currentNote.text, currentNote.tag, currentNote.id);
		setCurrentNote({
			title: '',
			text: '',
			tag: '',
			date: ''
		})
	};

	return (
		<div className='app-main-new-note'>
			<textarea 
				className='tag-element'
				rows={1}
				placeholder= 'Tag...'
				value={currentNote.tag}
				name='tag'
				onChange={handleTagChange}
			></textarea>
			<textarea 
				className='title-element'
				rows={1}
				placeholder= 'Title...'
				value={currentNote.title}
				name='title'
				onChange={handleTitleChange}
			></textarea>
			<textarea
				className='note-element'
				placeholder='Type to add a note...'
				value={currentNote.text}
				name = 'text'
				onChange={handleTextChange}
			></textarea>
			<div className='button-container'>
				<button className='save-btn' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
