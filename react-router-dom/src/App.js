import { BsSearch } from 'react-icons/bs'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail';

function App() {

  return (
    <div>
      <BsSearch />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
