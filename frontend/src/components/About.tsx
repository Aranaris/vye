import '../styles/About.css';

function About() {

	return (
		<section className='About'>
			<header className='section-header'>Vince Ye</header>
			<p>I am a product manager with extensive experience in the healthcare and chemical engineering industries developing enterprise SaaS solutions.
			I graduated with a B.S. in Chemical Engineering from Carnegie Mellon University and have a passion for optimization and working on products that automate tedious workflows.</p>

			<p>As a developer, I build applications and design APIs that provide easier ways to access data so that people can generate valuable
			insights without having to spend the majority of their effort managing disparate and unstructured datasets.</p>

			<section className='past-experience'>
				<section className='company-card'>
					<div className='logo'>img</div>
					<div className='company-name'>Reveleer</div>
					<div className='highlights'>Product Manager</div>
				</section>
				<section className='company-card'>
					<div className='logo'>img</div>
					<div className='company-name'>Imprivata</div>
					<div className='highlights'>Product Manager</div>
				</section>
				<section className='company-card'>
					<div className='logo'>img</div>
					<div className='company-name'>athenahealth</div>
					<div className='highlights'>Sr. Product Associate</div>
				</section>
				<section className='company-card'>
					<div className='logo'>img</div>
					<div className='company-name'>Aspen Technology, Inc.</div>
					<div className='highlights'>Product Management Professional</div>
				</section>
			</section>
		</section>
	);
}

export default About;
