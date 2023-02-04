import React from 'react';
import { MdSearch } from 'react-icons/md';
//Code inspiration from https://github.com/chrisblakely01/react-notes-app
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search-box'>
			<MdSearch className='search-icon' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search by Title or Tag'
				className='search-input'
			/>
		</div>
	);
};

export default Search;
