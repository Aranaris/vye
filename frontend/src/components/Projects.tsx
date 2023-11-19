import '../styles/Projects.css';
import Board from './Board';

function Projects() {
	return (
		<section className='Projects'>
			<Board />
			<section className='subsection-header'>Past Projects</section>
			<section className='project-container'>
				<div>Project Name</div>
				<div>Screenshot</div>
				<div>Project Description and highlights</div>
				<div>Project Name</div>
				<div>Screenshot</div>
				<div>Project Description and highlights</div>
			</section>
		</section>
	);
}

export default Projects;
