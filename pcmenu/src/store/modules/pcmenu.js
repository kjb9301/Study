import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { pender } from 'redux-pender';
import axios from 'axios';


function getData(){
  axios.get('https://study-1c4d9.firebaseio.com/menu.json').then((obj)=>{
    return obj.data;
  })
}

const GET_MENU = 'GET_MENU';

export const getMenu = createAction(GET_MENU,getData);

const initialState = Map({
  list: List()
});

export default handleActions({
  ...pender({
    type: GET_MENU,
    onSuccess: (state,action) => {
      console.log(action);
      const list = action.payload.list;
      return state.set('list',list);
    }
  })
},initialState);