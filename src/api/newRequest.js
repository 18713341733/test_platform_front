import {
  request
} from "./service.js"

export default {
  get: function(url, params = {}, config = {}) {
    return request({
      url: url,
      method: 'GET',
      params: params,
      ...config
    })
  },
  post: function(url, params = {}, config = {}) {
    return request({
      url: url,
      method: 'POST',
      data: params,
      ...config
    })
  },
  delete: function(url, params = {}, config = {}) {
    return request({
      url: url,
      method: 'DELETE',
      data: params,
      ...config
    })
  },
  put: function(url, params = {}, config = {}) {
    return request({
      url: url,
      method: 'PUT',
      data: params,
      ...config
    })
  }

}
