// 这个action.type常量，相当于字典索引，避免在团队协作时产生命名冲突
// action 是 视图和Store之间的纽带，actions和reducer是间接关系
// action 是怎么从视图中抵达Store？是使用 dispatch(action)

const CHANGE_MSG = 'CHANGE_MSG'
const ADD_FOO_COUNT = 'ADD_FOO_COUNT'
const FAN='FAN'
const DELETE='DELETE'
const HANDLEADD='HANDLEADD'
const YUGOODLIST='YUGOODLIST'

const AJAX_MUSIC_LIST = 'AJAX_MUSIC_LIST'
const  GET_CATE_LIST='GET_CATE_LIST'
const GET_GOOD_DETAIL='GET_GOOD_DETAIL'
const CLEAR_GOOD_DETIL='CLEAR_GOOD_DETIL'

export default {
  CHANGE_MSG,
  ADD_FOO_COUNT,
  AJAX_MUSIC_LIST,
  FAN,
  DELETE,
  HANDLEADD,
  YUGOODLIST,
  GET_CATE_LIST,
  GET_GOOD_DETAIL,
  CLEAR_GOOD_DETIL
}
