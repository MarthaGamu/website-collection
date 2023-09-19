import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './sections/About';
import Contact from './sections/Contact';
import Project from './sections/Project';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Navbar />
			<Banner />
			<About />
			<Contact />
			<Project />
		</div>
	);
}

export default App;
