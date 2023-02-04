const Note = ({ id, tag, title, text, date, handleDeleteNote, handleOnClickNote}) => {
	return (
		<div className='note'>
			<div className="app-sidebar-note" onClick={() => handleOnClickNote(id)}>
					<div className = "tag-data">
						<div>{tag}</div>
					</div>
					<div className="sidebar-note-title">
                        <strong>{title}</strong>
                        <button 
						onClick={() => handleDeleteNote(id) }
						className='delete-icon'
						size='1.3em'>
						Delete</button>

                    </div>


                <small className="note-meta">Last modified {date}</small>
                
            </div>
		</div>
	);
};

export default Note;
