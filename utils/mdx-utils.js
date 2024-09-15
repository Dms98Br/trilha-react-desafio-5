import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/post');
    if (data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const { data } = await api.get(`/post?id=eq.${id}&select=*`)
    if (data) {
        return data[0]
    }
    return {}
}