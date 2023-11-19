import '../styles/Board.css';

function Board() {
	// TODO: for smaller viewports, show non-interactive embedded view of Trello board
	// <blockquote className='trello-board-compact'>
	// 	<a href='https://trello.com/b/CNilgGY4/spotify-web-app'>Trello Board</a>
	// </blockquote>
	return (
		<section className='Board'>
			<section className='subsection-header'>Currently Active Project</section>
			<iframe id='active-project' src='https://trello.com/b/CNilgGY4.html'></iframe>
		</section>
	);
}

export default Board;
