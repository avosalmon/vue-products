import axios from 'axios'

export default {

  get (url) {
    return axios.get(url)
  },

  post (url, data) {
    return axios.post(url, data)
  },

  put (url, data) {
    return axios.put(url, data)
  },

  delete (url) {
    return axios.delete(url)
  },

  download (url) {

  },

  merge (defaults, params) {
    let defaultsCopy = Object.assign({}, defaults)
    let paramsCopy = Object.assign({}, params)

    return Object.assign(defaultsCopy, paramsCopy)
  }
}
