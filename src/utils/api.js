import axios from './axios'
// 查询QQ音乐
export function fetchQqMusic(params) {
  return axios({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'GET',
    params
  })
}
// 添加商品
export function fetchAddOrEdit(data) {
  return axios({
    url: '/api/v1/good/addOrEdit',
    method: 'POST',
    data
  })
}
// 获取商品列表
export function fetchGoodList(params) {
  return axios({
    url: '/api/v1/good/list',
    method: 'GET',
    params
  })
}
export default {
  fetchQqMusic,
  fetchAddOrEdit,
  fetchGoodList
}
