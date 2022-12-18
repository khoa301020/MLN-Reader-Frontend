import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD,
});

export const homeApi = {
    getLastUpdateNovel: () => api.get("/novel/get-list?page=1&limit=30&sort=lastUpdate"),
    getNewestNovel: () => api.get("/novel/get-list?page=1&limit=4&sort=newest"),
    getTopViewNovel: () => api.get("/novel/get-list?page=1&limit=20&sort=topViewTotal"),
    getTopViewNovelDaily: () => api.get("/novel/get-list?page=1&limit=8&sort=topViewDaily"),
    getTopViewNovelMonthly: () => api.get("/novel/get-list?page=1&limit=20&sort=topViewMonthly"),
    getTopViewNovelYearly: () => api.get("/novel/get-list?page=1&limit=20&sort=topViewYearly"),
    getTopFollowNovel: () => api.get("/novel/get-list?page=1&limit=20&sort=topFollow"),
    getLastUpdateManga: () => api.get("/manga/get-list?page=1&limit=30&sort=lastUpdate"),
    getNewestManga: () => api.get("/manga/get-list?page=1&limit=4&sort=newest"),
    getTopViewManga: () => api.get("/manga/get-list?page=1&limit=20&sort=topView"),
    getTopViewMangaDaily: () => api.get("/manga/get-list?page=1&limit=8&sort=topViewDaily"),
    getTopViewMangaMonthly: () => api.get("/manga/get-list?page=1&limit=20&sort=topViewMonthly"),
    getTopViewMangaYearly: () => api.get("/manga/get-list?page=1&limit=20&sort=topViewYearly"),
    getTopFollowManga: () => api.get("/manga/get-list?page=1&limit=20&sort=topFollow"),
    getTags: () => api.get("/common/get-tags"),
};

export const novelApi = {
    getNovel: (novelId) => api.get(`/novel/get-novel?novelId=${novelId}`),
    getChapter: (chapterId) => api.get(`/novel/get-chapter?chapterId=${chapterId}`),
    addHistory: (data) => api.post("/novel/add-history", data),
    getHistory: (username) => api.get("/novel/get-history?username=" + username),
    createNovel: (data) => api.post("/novel/create-action", data),
    updateNovel: (data) => api.post("/novel/update-action", Object.assign({ subject: "novel" }, data)),
    deleteNovel: (data) => api.post("/novel/delete-action", Object.assign({ subject: "novel" }, data)),
    createNovelSection: (data) => api.post("/novel/create-action", Object.assign({ subject: "section" }, data)),
    updateNovelSection: (data) => api.post("/novel/update-action", Object.assign({ subject: "section" }, data)),
    deleteNovelSection: (data) => api.post("/novel/delete-action", Object.assign({ subject: "section" }, data)),
    createNovelChapter: (data) => api.post("/novel/create-action", Object.assign({ subject: "chapter" }, data)),
    updateNovelChapter: (data) => api.post("/novel/update-action", Object.assign({ subject: "chapter" }, data)),
    deleteNovelChapter: (data) => api.post("/novel/delete-action", Object.assign({ subject: "chapter" }, data)),
    createNovelNote: (data) => api.post("/novel/create-action", Object.assign({ subject: "note" }, data)),
    updateNovelNote: (data) => api.post("/novel/update-action", Object.assign({ subject: "note" }, data)),
    deleteNovelNote: (data) => api.post("/novel/delete-action", Object.assign({ subject: "note" }, data)),
};

export const mangaApi = {
    getManga: (mangaId) => api.get(`/manga/get-manga?mangaId=${mangaId}`),
    getChapter: (chapterId) => api.get(`/manga/get-chapter?chapterId=${chapterId}`),
    addHistory: (data) => api.post("/manga/add-history", data),
    getHistory: (data) => api.post("/manga/get-history", data),
    createManga: (data) => api.post("/manga/create-action", data),
    updateManga: (data) => api.post("/manga/update-action", Object.assign({ subject: "manga" }, data)),
    deleteManga: (data) => api.post("/manga/delete-action", Object.assign({ subject: "manga" }, data)),
    createMangaSection: (data) => api.post("/manga/create-action", Object.assign({ subject: "section" }, data)),
    updateMangaSection: (data) => api.post("/manga/update-action", Object.assign({ subject: "section" }, data)),
    deleteMangaSection: (data) => api.post("/manga/delete-action", Object.assign({ subject: "section" }, data)),
    createMangaChapter: (data) => api.post("/manga/create-action", Object.assign({ subject: "chapter" }, data)),
    updateMangaChapter: (data) => api.post("/manga/update-action", Object.assign({ subject: "chapter" }, data)),
    deleteMangaChapter: (data) => api.post("/manga/delete-action", Object.assign({ subject: "chapter" }, data)),
};

export const userApi = {
    login: (data) => api.post("/auth/login", data, { withCredentials: true, "Access-Control-Allow-Origin": "http://localhost:3000" }),
    register: (data) => api.post("/auth/register", data),
    logout: (data) => api.post("/auth/logout", data),
    verify: (username, token) => api.post("/auth/verify", { username: username }, { headers: { Authorization: `Bearer ${token}` } }),
    getProfile: () => api.get("/user/get-profile"),
    // updateProfile: (data) => api.post("/user/update-profile", data),
    // updateAvatar: (data) => api.post("/user/update-avatar", data),
    // updatePassword: (data) => api.post("/user/update-password", data),
    followNovel: (data) => api.post("/novel/follow-action", data),
    unfollowNovel: (data) => api.post("/novel/follow-action", data),
    followManga: (data) => api.post("/manga/follow-action", data),
    unfollowManga: (data) => api.post("/manga/follow-action", data),
    comment: (data) => api.post("/common/comment", data),
    // rate: (data) => api.post("/user/rate", data),
};

export const adminApi = {
    getProfile: () => api.get("/admin/get-profile"),
    updateProfile: (data) => api.post("/admin/update-profile", data),
    updateAvatar: (data) => api.post("/admin/update-avatar", data),
    updatePassword: (data) => api.post("/admin/update-password", data),
    getNovelList: (data) => api.get(`/admin/get-novel-list?page=${data.page}&limit=${data.limit}&sort=${data.sort}`),
    getMangaList: (data) => api.get(`/admin/get-manga-list?page=${data.page}&limit=${data.limit}&sort=${data.sort}`),
    getNovel: (novelId) => api.get(`/admin/get-novel?novelId=${novelId}`),
    getManga: (mangaId) => api.get(`/admin/get-manga?mangaId=${mangaId}`),
    getNovelChapter: (chapterId) => api.get(`/admin/get-novel-chapter?chapterId=${chapterId}`),
    getMangaChapter: (chapterId) => api.get(`/admin/get-manga-chapter?chapterId=${chapterId}`),
};

export default api;