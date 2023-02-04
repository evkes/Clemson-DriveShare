import Note from './Note';

const NotesList = ({
	notes,
	handleDeleteNote,
	handleOnClickNote,
}) => {
	
	return (
		<div className='notes-list'>
			{notes.sort(
				function compare(a, b) {
					var dateA = new Date(a.date);
					var dateB = new Date(b.date);
					return dateB - dateA;
				  }).map((note) => {
				return <Note
					id={note.id}
					key={note.id}
					title = {note.title}
					tag = {note.tag}
					text={note.text}
					date={note.date}
					type={note.type}
					handleDeleteNote={handleDeleteNote}
					handleOnClickNote={handleOnClickNote}				
					/>
			})}
		</div>
	);
};

export default NotesList;
