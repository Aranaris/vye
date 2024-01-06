import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import logo from '../assets/logo_vye.svg';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import Article from './Article';
import ArticleList from './ArticleList';


function RouteSwitch() {
	return (
		<BrowserRouter>
			<section className='header'>
				<Link className='logo-link' to='/'><img className='logo' src={logo} alt='logo'/></Link>
				<Link className='nav-link' to='/'>Home</Link>
				<Link className='nav-link' to='/about/'>About</Link>
				<Link className='nav-link' to='/projects/'>Portfolio</Link>
				<Link className='nav-link' to='/articles/'>Articles</Link>
				<button className='right-nav'>Get In Touch</button>
			</section>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/about/' element={<About />}/>
				<Route path='/projects/' element={<Projects />}/>
				<Route path='/articles/' element={<ArticleList />}/>
				<Route path='/articles/:id' element={<Article />}/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default RouteSwitch;
