import '../styles/Home.css';

function Home() {

	return (
		<section className='Home'>
			<header className="section-header">Full Stack Engineering</header>
			<section className="personal-intro">Hi! I'm Vince, a software developer with over 10 years of experience in tech looking to build great products.</section>
			<section className='specialty-container'>
				<section className='sme-card'>
					<div className='image'>Image</div>
					<div>Specialty Name</div>
					<div>Experience Description lorem ipsum etc etc etc</div>
				</section>
				<section className='sme-card'>
					<div className='image'>Image</div>
					<div>Specialty Name</div>
					<div>Experience Description</div>
				</section>
				<section className='sme-card'>
					<div className='image'>Image</div>
					<div>Specialty Name</div>
					<div className='description'>Experience Description</div>
				</section>
			</section>
		</section>
	);
}

export default Home;
