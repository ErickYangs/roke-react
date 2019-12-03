import axios from 'axios'
// import { message } from 'ant-design-vue'

const service = axios.create({
//   baseURL: process.env.VUE_APP_API, // url = base url + request url
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/json'
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    // const rest = error.response;
    console.error('err' + error) // for debug
    // if (rest) {
    //   if (rest.status === 400) {
    //     // 提示错误
    //     message.error(rest.data.desc)
    //   }
    // } else {
    //   message.error('Api Error, Please Try Again')
    // }
    return Promise.reject(error)
  }
)

export default service
