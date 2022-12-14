// import { Toaster } from 'react-hot-toast';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../src/components/DefaulftLayout/DefaultLayout';
import LayoutAuth from '../src/components/LayoutAuth/LayoutAuth';
import MangaChapter from './features/client/mangas/MangaChapter';
import MangaInfo from './features/client/mangas/MangaInfo';
import NovelChapter from './features/client/novels/NovelChapter';
import NovelInfo from './features/client/novels/NovelInfo';
import Home from './features/common/Home/Home';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="novel/:id" element={<NovelInfo />} />
        <Route path="novel-chapter/:id" element={<NovelChapter />} />
        <Route path="manga/:id" element={<MangaInfo />} />
        <Route path="manga-chapter/:id" element={<MangaChapter />} />
      </Route>

      <Route path="/" element={<LayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  );
}

export default App;
