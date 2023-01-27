import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.escook.cn'
})
// 默认导出
export default request
