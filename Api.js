import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
    , params: {
        api_key: "39a55128d46ad2cb9a99830763fbec2d",
        language: "ko-KR"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("/search/movie", {
        params: {
            query: decodeURIComponent(encodeURIComponent(term))
        }
    })
};

export const tvApi = {
    airingThisWeek: () => api.get("tv/on_the_air"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("/search/tv", {
        params: {
            query: decodeURIComponent(encodeURIComponent(term))
        }
    })
}