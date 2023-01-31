import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD,
});

export const homeApi = {
  getLastUpdateNovel: () => api.get('/novel/get-last-update?limit=30'),
  getNewestNovel: () => api.get('/novel/get-list?page=1&limit=4&sort=newest'),
  getTopViewNovel: () => api.get('/novel/get-list?page=1&limit=20&sort=topViewTotal'),
  getTopViewNovelDaily: () => api.get('/novel/get-list?page=1&limit=10&sort=topViewDaily'),
  getTopViewNovelMonthly: () => api.get('/novel/get-list?page=1&limit=20&sort=topViewMonthly'),
  getTopViewNovelYearly: () => api.get('/novel/get-list?page=1&limit=20&sort=topViewYearly'),
  getTopFollowNovel: () => api.get('/novel/get-list?page=1&limit=20&sort=topFollow'),
  getLastUpdateManga: () => api.get('/manga/get-last-update?limit=30'),
  getNewestManga: () => api.get('/manga/get-list?page=1&limit=4&sort=newest'),
  getTopViewManga: () => api.get('/manga/get-list?page=1&limit=20&sort=topView'),
  getTopViewMangaDaily: () => api.get('/manga/get-list?page=1&limit=8&sort=topViewDaily'),
  getTopViewMangaMonthly: () => api.get('/manga/get-list?page=1&limit=20&sort=topViewMonthly'),
  getTopViewMangaYearly: () => api.get('/manga/get-list?page=1&limit=20&sort=topViewYearly'),
  getTopFollowManga: () => api.get('/manga/get-list?page=1&limit=20&sort=topFollow'),
  getTags: () => api.get('/common/get-tags'),
  getNewestComment: () => api.get('/common/get-newest-comments'),
  getHistory: (username) => api.get('/common/get-history?username=' + username),
  getNewest: () => api.get('/common/get-latest'),
  getSearch: (keyword) => api.get(`/common/get-latest?keyword=${keyword}`),
  getNewestHome: () => api.get('/common/get-latest?limit=6'),
  getCompleted: () => api.get('/common/get-completed'),
};

export const novelApi = {
  searchNovel: (keyword) => api.get(`/novel/search?keyword=${keyword}`),
  getNovel: (novelId) => api.get(`/novel/get-novel?novelId=${novelId}`),
  getNovelOnly: (novelId) => api.get(`/novel/get-novel?novelId=${novelId}&isOnly=true`),
  getNovelUpdate: (novelId) => api.get(`/novel/get-novel-update?novelId=${novelId}`),
  getLastUpdateNovel: () => api.get('/novel/get-last-update'),
  getSection: (sectionId) => api.get(`/novel/get-section?sectionId=${sectionId}`),
  getChapter: (chapterId) => api.get(`/novel/get-chapter?chapterId=${chapterId}`),
  getChapterOnly: (chapterId) => api.get(`/novel/get-chapter?chapterId=${chapterId}&isOnly=true`),
  addHistory: (data) => api.post('/novel/add-history', data),
  getHistory: (username) => api.get('/novel/get-history?username=' + username),
  createNovel: (data) => api.post('/novel/create-action', data),
  updateNovel: (data) => api.post('/novel/update-action', data),
  createSection: (data) => api.post('/novel/create-action', data),
  updateSection: (data) => api.post('/novel/update-action', data),
  createChapter: (data) => api.post('/novel/create-action', data),
  updateChapter: (data) => api.post('/novel/update-action', data),
  createNote: (data) => api.post('/novel/create-action', data),
  updateNote: (data) => api.post('/novel/update-action', data),
  deleteAction: (token, data) =>
    api.post('/novel/delete-action', data, { headers: { Authorization: `Bearer ${token}` } }),
};

export const mangaApi = {
  searchManga: (keyword) => api.get(`/manga/search?keyword=${keyword}`),
  getManga: (mangaId) => api.get(`/manga/get-manga?mangaId=${mangaId}`),
  getMangaOnly: (mangaId) => api.get(`/manga/get-manga?mangaId=${mangaId}&isOnly=true`),
  getMangaUpdate: (mangaId) => api.get(`/manga/get-manga-update?mangaId=${mangaId}`),
  getSection: (sectionId) => api.get(`/manga/get-section?sectionId=${sectionId}`),
  getChapter: (chapterId) => api.get(`/manga/get-chapter?chapterId=${chapterId}`),
  getChapterOnly: (chapterId) => api.get(`/manga/get-chapter?chapterId=${chapterId}&isOnly=true`),
  getLastUpdateManga: () => api.get('/manga/get-last-update'),
  addHistory: (data) => api.post('/manga/add-history', data),
  getHistory: (username) => api.get('/manga/get-history?username=' + username),
  createManga: (data) => api.post('/manga/create-manga', data),
  updateManga: (data) => api.post('/manga/update-manga', data),
  deleteManga: (token, id) =>
    api.post('/manga/delete-manga', { type: 'manga', id }, { headers: { Authorization: `Bearer ${token}` } }),
  createSection: (data) => api.post('/manga/create-section', data),
  updateSection: (data) => api.post('/manga/update-section', data),
  deleteSection: (token, id) =>
    api.post('/manga/delete-section', { type: 'section', id }, { headers: { Authorization: `Bearer ${token}` } }),
  createChapter: (data) => api.post('/manga/create-chapter', data),
  updateChapter: (data) => api.post('/manga/update-chapter', data),
  deleteChapter: (token, id) =>
    api.post('/manga/delete-chapter', { type: 'chapter', id }, { headers: { Authorization: `Bearer ${token}` } }),
};

export const userApi = {
  login: (data) => api.post('/auth/login', data, { withCredentials: true }),
  register: (data) => api.post('/auth/register', data),
  logout: (data) => api.post('/auth/logout', data),
  verify: (username, token) =>
    api.post('/auth/verify', { username: username }, { headers: { Authorization: `Bearer ${token}` } }),
  bookVerify: (id, username, token) =>
    api.post('/auth/book-verify', { id, username }, { headers: { Authorization: `Bearer ${token}` } }),
  getUser: (id) => api.get('/common/get-user?id=' + id),
  getMe: (token) => api.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } }),
  // updateProfile: (data) => api.post("/user/update-profile", data),
  // updateAvatar: (data) => api.post("/user/update-avatar", data),
  updateName: (name, token) =>
    api.post('/common/change-name', { name }, { headers: { Authorization: `Bearer ${token}` } }),
  followAction: (token, bookId) =>
    api.post('/common/follow', { bookId }, { headers: { Authorization: `Bearer ${token}` } }),
  checkFollow: (token, bookId) =>
    api.get(`/common/check-follow?bookId=${bookId}`, { headers: { Authorization: `Bearer ${token}` } }),
  comment: (data, token) => api.post('/common/comment-action', data, { headers: { Authorization: `Bearer ${token}` } }),
  // rate: (data) => api.post("/user/rate", data),
};

export const adminApi = {
  getAllUsers: (token) => api.get('/admin/get-users', { headers: { Authorization: `Bearer ${token}` } }),
  getAllNovels: (token) => api.get('/admin/get-novels', { headers: { Authorization: `Bearer ${token}` } }),
  getAllMangas: (token) => api.get('/admin/get-mangas', { headers: { Authorization: `Bearer ${token}` } }),
  getAllComments: (token) => api.get('/admin/get-comments', { headers: { Authorization: `Bearer ${token}` } }),
};

export default api;
