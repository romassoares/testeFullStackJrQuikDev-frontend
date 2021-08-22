import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:8000/'
})

export const movies = async () => {
    try {
        const response = await api.get('movies/');
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export const details = async (id) => {
    try {
        const response = await api.get(+ id + '/details');
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export const generos = async () => {
    try {
        const response = await api.get('/genre');
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export const seacher = async (label) => {
    try {
        const response = await api.get('/search/' + label);
        return response.data
    } catch (error) {
        console.error(error);
    }
}