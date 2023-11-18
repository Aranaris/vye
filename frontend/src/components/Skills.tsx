import '../styles/Skills.css';

function Skills() {
	return (
		<section className='Skills'>
			<section className='languages-container'>
				<header className='container-header'>Languages</header>
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
					<div className='skill-description'>Git</div>
				</div>
			</section>
			<section className='tools-container'>
				<header className='container-header'>Tools</header>
				<div className='skills-card'>
					<div className='skill-image'>img</div>
					<div className='skill-description'>Jira</div>
				</div>
				<div className='skills-card'>
					<div className='skill-image'>img</div>
					<div className='skill-description'>Azure {'('}AD/Entra ID, DevOps{')'}</div>
				</div>
				<div className='skills-card'>
					<div className='skill-image'>img</div>
					<div className='skill-description'>AWS {'('}S3, ECS, RDS{')'}</div>
				</div>
				<div className='skills-card'>
					<div className='skill-image'>img</div>
					<div className='skill-description'>Tableau</div>
				</div>
				<div className='skills-card'>
					<div className='skill-image'>img</div>
					<div className='skill-description'>Snowflake</div>
				</div>
				<div className='skills-card'>
					<div className='skill-image'>img</div>
					<div className='skill-description'>Google Analytics</div>
				</div>
			</section>
		</section>
	);
}

export default Skills;
