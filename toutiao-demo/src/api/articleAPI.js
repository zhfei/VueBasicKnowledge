import request from '@/utils/request'

// 向外按需导出一个API函数
export const articleAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
