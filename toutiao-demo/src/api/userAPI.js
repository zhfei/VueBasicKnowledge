import request from '@/utils/request'

// 按需导出getUserAPI
export const getUserInfoAPI = function () {
  return request.get('/user')
}
