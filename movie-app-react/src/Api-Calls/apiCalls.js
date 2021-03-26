import axios from 'axios';

export const login = (creds) => {
    return axios.post("/api/1.0/auth",{},{auth: creds});
    // return axios.post("/api/1.0/auth",creds);
}
export const changeLanguage = (language) => {
    axios.defaults.headers['accept-language'] = language;
};

export const setAuthorizationHeader = ({username,password,isLoggedIn}) => {
    if(!isLoggedIn){
        const authorizationHeaderValue = `Basic ${btoa(username + ':' + password)}`;
        axios.defaults.headers['Authorization'] = authorizationHeaderValue;
    }
    else{
        delete axios.defaults.headers['Authorization'];
    } 
}
export const addDirector = (body) => {
    return axios.post('/api/1.0/director/add',body);
}

export const getDirectors = (page = 0) => {
    delete axios.defaults.headers['Authorization'];
    return axios.get(`/api/1.0/director/feed?page=${page}`);
}
export const deleteDirector = id => {
    return axios.delete(`/api/1.0/director/delete/${id}`);
}
export const updateDirector = (id,body) => {
    return axios.put(`/api/1.0/director/update/${id}`,body);
}

export const addMovie = body => {
    return axios.post('/api/1.0/movie/add',body);
}
export const getMovies = (page = 0) => {
    delete axios.defaults.headers['Authorization'];
    return axios.get(`/api/1.0/movie/feed?page=${page}`);
}
export const deleteMovie = id => {
    return axios.delete(`/api/1.0/movie/delete/${id}`);
}
export const updateMovie = (id,body) => {
    return axios.put(`/api/1.0/movie/update/${id}`,body);
}

export const addStudio = body => {
    return axios.post('/api/1.0/studio/add',body);
}
export const getStudios = (page = 0) => {
    delete axios.defaults.headers['Authorization'];
    return axios.get(`/api/1.0/studio/feed?page=${page}`);
}
export const deleteStudio = id => {
    return axios.delete(`/api/1.0/studio/delete/${id}`);
}
export const updateStudio = (id,body) => {
    return axios.put(`/api/1.0/studio/update/${id}`,body);
}