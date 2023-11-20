import '../styles/About.css';

function About() {

	return (
		<section className='About'>
			<header className='section-header'>Vince Ye</header>
			<p>My experience includes working as a product manager at established organizations developing
			enterprise SaaS solutions in the healthcare and chemical engineering industries. The platforms that I've worked on range from
			entirely cloud-based web applications to on-prem solutions directly installed on client servers and desktops.</p>

			<p>As an engineering graduate from Carnegie Mellon, I have a passion for optimization and working on products that automate tedious workflows.
			I develop applications and design APIs that provide easier ways to access data so that people can generate valuable
			insights without having to spend the majority of their effort managing disparate data sources and unstructured datasets.</p>

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
					<div className='highlights'>Sr. Product Management/Analytics Associate</div>
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
