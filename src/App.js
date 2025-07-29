import './App.css';
import Header from './components/Header';
import { posts } from './data/posts';
import Objects from './object/Objects';

function App() {
  return (
    <>
    <Header />
    <Objects src={posts} />
    </>
  );
}

export default App;
