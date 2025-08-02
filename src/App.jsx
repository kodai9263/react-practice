import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </>
  );
}
export default App;
