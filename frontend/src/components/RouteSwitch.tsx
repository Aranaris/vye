import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import logo from '../assets/react.svg';
import Home from './Home';
import About from './About';


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
			</Routes>
			<section className='footer'>Footer section</section>
		</BrowserRouter>
	);
}

export default RouteSwitch;
