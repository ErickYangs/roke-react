import request from './request'

export function getMovieList() {
  return request({
    url:
      'https://store.dev.ont.io/api/v1/addon/login',
    method: 'post'
  })
}
