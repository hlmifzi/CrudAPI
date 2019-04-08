
const INITIAL_STATE = {
   loading: false,
   createOrEdit: 0,
   index: '',
   dataForEdit: [],
   data: []
}

const ZhomeReducer = (state = { ...INITIAL_STATE }, action) => {
   switch (action.type) {
      case "FETCH_POSTS":
         return ({
            ...state,
            data: action.payload.data,
            loading: true
         })
      case "FETCH_POSTS_CREATE":
         return ({
            ...state,
            data: action.payload.data,
            loading: true
         })
      case "EDIT":
         return ({
            ...state,
            dataForEdit: action.payload.data,
            createOrEdit: action.payload.createOrEdit,
         })
      default:
         return state;
   }
}

export default ZhomeReducer
