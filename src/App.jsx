import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Header from './components/Header';
import Form from './form/Form';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Form />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </>
  );
}
export default App;
