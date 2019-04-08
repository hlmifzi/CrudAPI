import ROOT_URL from '../../service/api/URLApi';

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_CREATE = 'FETCH_POSTS_CREATE'
export const EDIT_TYPE = 'EDIT'
export const DELETE_TYPE = 'DELETE'

export const fetchPost = () => async dispatch => {
   const getData = await ROOT_URL.get('posts', { params: { key: 'HelmiFauzia' } })

   const res = dispatch({
      type: FETCH_POSTS,
      payload: getData
   })

   return res;
}

export const fetchPostCreate = payload => async dispatch => {
   let getData = await ROOT_URL.post('posts?key=HelmiFauzia', payload)
   getData = await ROOT_URL.get('posts', { params: { key: 'HelmiFauzia' } })

   const res = dispatch({
      type: FETCH_POSTS_CREATE,
      payload: getData
   })

   return res;
}


export const DELETE = (payload) => async dispatch => {
   let getData = await ROOT_URL.delete(`posts/${payload}`)
   getData = await ROOT_URL.get('posts', { params: { key: 'HelmiFauzia' } })

   const res = dispatch({
      type: FETCH_POSTS,
      payload: getData
   })

   return res;
}

export const EDIT = (payload) => ({
   type: EDIT_TYPE,
   payload

})