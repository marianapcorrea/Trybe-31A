import cat from './cat.jpg';
import './App.css';
import Image from './Image';

function App() {
  return (<main>
    <Image source={cat} alt='Cute cat staring' />
  </main>
  );
}

export default App;
