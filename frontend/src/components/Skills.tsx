import '../styles/Skills.css';

function Skills() {
	return (
		<section className="Skills">
			<header className='container-header'>Skills</header>
			<div className='skills-card'>
				<div className='skill-image'>img</div>
				<div className='skill-description'>Javascript {'('}vanilla, React, Node/Express{')'}</div>
			</div>
			<div className='skills-card'>
				<div className='skill-image'>img</div>
				<div className='skill-description'>Python {'('}pandas, Flask, Django{')'}</div>
			</div>
			<div className='skills-card'>
				<div className='skill-image'>img</div>
				<div className='skill-description'>SQL {'('}OracleSQL, PostgreSQL, MSSQL, MySQL{')'}</div>
			</div>
			<div className='skills-card'>
				<div className='skill-image'>img</div>
				<div className='skill-description'>NoSQL {'('}MongoDB, Google Cloud Firestore{')'}</div>
			</div>
			<div className='skills-card'>
				<div className='skill-image'>img</div>
				<div className='skill-description'>HTML/CSS</div>
			</div>
			<div className='skills-card'>
				<div className='skill-image'>img</div>
				<div className='skill-description'>Azure</div>
			</div>
		</section>
	);
}

export default Skills;
