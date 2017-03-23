import axios from 'axios'

export default {

  init () {
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      let token = ''
      config.headers.Authorization = 'Bearer ' + token
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })
  }

}
