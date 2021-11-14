import Header from './components/header/Header';
import About from './components/aboutme/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='sections'>
        <About/>
        <Portfolio/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
