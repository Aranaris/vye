import '../styles/Home.css';
import Skills from './Skills';

function Home() {

	return (
		<section className='Home'>
			<header className='section-header'>Full Stack Engineering</header>
			<section className='personal-intro'>Hi, I'm Vince, a programmer with over 10 years of product experience building technology solutions in healthcare, chemical engineering, and identity management.</section>
			<section className='specialty-container'>
				<section className='sme-card'>
					<div className='image'>Image</div>
					<div className='card-header'>Access Management</div>
					<div className='description'>Developing SSO and Multi-Factor Authentication services using LDAP, OAuth2/OIDC and SAML.</div>
				</section>
				<section className='sme-card'>
					<div className='image'>Image</div>
					<div className='card-header'>Platform Integrations</div>
					<div className='description'>Facilitating data exchange with 3rd party endpoints via RESTful APIs, SFTP, and GraphQL.</div>
				</section>
				<section className='sme-card'>
					<div className='image'>Image</div>
					<div className='card-header'>Data Analytics</div>
					<div className='description'>Designing database schemas and building visualizations to provide insights from complex data sets.</div>
				</section>
			</section>
			<Skills />
		</section>
	);
}

export default Home;
