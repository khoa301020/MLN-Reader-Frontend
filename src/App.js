// import { Toaster } from 'react-hot-toast';
// import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './features/common/Home/Home'
import BookInfo from './features/common/BookInfo'
import Chapter from './features/common/Chapter'
import DefaultLayout from '../src/components/DefaulftLayout/DefaultLayout'



function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
        <Route index element={<Home />} />
        <Route path="bookinfo" element={<BookInfo />} />
        <Route path="chapter" element={<Chapter />} />
    </Routes>
    );
}

export default App;
