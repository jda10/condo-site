import './App.css';
import Gallery from './components/gallery';
import Header from './components/header'
import 'react-image-gallery/styles/css/image-gallery.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
