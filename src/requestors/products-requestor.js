import requestor from './requestor'

const endpoint = 'https://api.kurashicom.dev/products/'

let defaults = {
  offset: 0,
  limit: 10,
  sort: 'id',
  direction: 'desc',
  searchQuery: ''
}

let parameters = {}

export default {

  all () {
    return requestor.get(endpoint)
  },

  find (id) {
    return requestor.get(endpoint + id)
  },

  update (id, data) {
    return requestor.put(endpoint + id, data)
  },

  formatParameters (meta) {
    meta = requestor.merge(defaults, meta)

    let params = ''
    params += 'offset=' + encodeURIComponent(meta.offset)
    params += '&limit=' + encodeURIComponent(meta.limit)
    params += '&sort=' + encodeURIComponent(meta.sort)
    params += '&direction=' + encodeURIComponent(meta.direction)

    Object.keys(parameters).forEach(key => {
      params += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key])
    })

    return params
  }
}
