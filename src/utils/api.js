import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})

export const submitContact = (data) => api.post('/contact', data)
export const fetchProjects  = (params) => api.get('/projects', { params })
export const fetchBlogPosts = (params) => api.get('/blog', { params })
export const fetchBlogPost  = (slug)   => api.get(`/blog/${slug}`)

export default api