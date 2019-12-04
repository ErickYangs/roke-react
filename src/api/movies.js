import request from './request'

export function getMovieList() {
  return request({
    url:
      'https://store.dev.ont.io/api/v1/addon/login',
    method: 'post'
  })
}

export function getWeather() {
  return request({
    url:
      'http://apis.juhe.cn/simpleWeather/query?city=%E4%B8%8A%E6%B5%B7&key=6f4a99e24ef5f50db6de04124cd80a29',
    method: 'post'
  })
}
