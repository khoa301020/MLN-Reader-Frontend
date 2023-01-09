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
  deleteNovel: (data) => api.post('/novel/delete-action', Object.assign({ subject: 'novel' }, data)),
  createSection: (data) => api.post('/novel/create-action', data),
  updateSection: (data) => api.post('/novel/update-action', data),
  deleteSection: (data) => api.post('/novel/delete-action', Object.assign({ subject: 'section' }, data)),
  createChapter: (token, data) =>
    api.post('/novel/create-action', data, { headers: { Authorization: `Bearer ${token}` } }),
  updateChapter: (data) => api.post('/novel/update-action', data),
  deleteChapter: (data) => api.post('/novel/delete-action', Object.assign({ subject: 'chapter' }, data)),
  createNote: (data) => api.post('/novel/create-action', data),
  updateNote: (data) => api.post('/novel/update-action', data),
  deleteNote: (data) => api.post('/novel/delete-action', Object.assign({ subject: 'note' }, data)),
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
  deleteManga: (data) => api.post('/manga/delete-action', Object.assign({ subject: 'manga' }, data)),
  createSection: (data) => api.post('/manga/create-section', data),
  updateSection: (data) => api.post('/manga/update-section', data),
  deleteSection: (data) => api.post('/manga/delete-action', Object.assign({ subject: 'section' }, data)),
  createChapter: (token, data) =>
    api.post('/manga/create-chapter', data, { headers: { Authorization: `Bearer ${token}` } }),
  updateChapter: (data) => api.post('/manga/update-chapter', data),
  deleteChapter: (data) => api.post('/manga/delete-action', Object.assign({ subject: 'chapter' }, data)),
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
  // updatePassword: (data) => api.post("/user/update-password", data),
  followAction: (token, bookId) =>
    api.post('/common/follow', { bookId }, { headers: { Authorization: `Bearer ${token}` } }),
  checkFollow: (token, bookId) =>
    api.get(`/common/check-follow?bookId=${bookId}`, { headers: { Authorization: `Bearer ${token}` } }),
  comment: (data, token) => api.post('/common/comment-action', data, { headers: { Authorization: `Bearer ${token}` } }),
  // rate: (data) => api.post("/user/rate", data),
};

export const adminApi = {
  getProfile: () => api.get('/admin/get-profile'),
  updateProfile: (data) => api.post('/admin/update-profile', data),
  updateAvatar: (data) => api.post('/admin/update-avatar', data),
  updatePassword: (data) => api.post('/admin/update-password', data),
  getNovelList: (data) => api.get(`/admin/get-novel-list?page=${data.page}&limit=${data.limit}&sort=${data.sort}`),
  getMangaList: (data) => api.get(`/admin/get-manga-list?page=${data.page}&limit=${data.limit}&sort=${data.sort}`),
  getNovel: (novelId) => api.get(`/admin/get-novel?novelId=${novelId}`),
  getManga: (mangaId) => api.get(`/admin/get-manga?mangaId=${mangaId}`),
  getNovelChapter: (chapterId) => api.get(`/admin/get-novel-chapter?chapterId=${chapterId}`),
  getMangaChapter: (chapterId) => api.get(`/admin/get-manga-chapter?chapterId=${chapterId}`),
};

export default api;
