// import { Toaster } from 'react-hot-toast';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../src/components/DefaulftLayout/DefaultLayout';
import LayoutAuth from '../src/components/LayoutAuth/LayoutAuth';
import LayoutDashboard from '../src/components/LayoutDashboard/LayoutDashboard';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import CreateSeries from './features/client/CreateSeries/CreateSeries';
import MangaChapter from './features/client/mangas/MangaChapter';
import MangaInfo from './features/client/mangas/MangaInfo';
import NovelChapter from './features/client/novels/NovelChapter';
import NovelInfo from './features/client/novels/NovelInfo';
import UpdateSeries from './features/client/UpdateSeries/UpdateSeries';
import Home from './features/common/Home/Home';


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

      <Route path="/auth" element={<LayoutAuth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        {/* <Route path="novel-chapter/:id" element={<NovelChapter />} />
        <Route path="manga-chapter/:id" element={<MangaChapter />} /> */}
      </Route>

      <Route path="/action" element={<LayoutDashboard />}>
        <Route path="/action/create-series" element={<CreateSeries />} />
        <Route path="/action/update-novel/:id" element={<UpdateSeries />} />
      </Route>

    </Routes>
  );
}

export default App;
