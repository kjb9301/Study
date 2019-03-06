import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { pender } from 'redux-pender';
import axios from 'axios';
import * as api from 'lib/api';

function getData(){
  axios.get('https://study-1c4d9.firebaseio.com/menu.json').then((data)=>{
    return data.data;
  })
}
//const data = axios.get('https://study-1c4d9.firebaseio.com/menu.json')
const GET_DATA = 'GET_DATA';

export const getMenu = createAction(GET_DATA,getData);

const initialState = Map({
  list: List()
});

export default handleActions({
  ...pender({
    type: GET_DATA,
    onSuccess: (state,action) => {
      console.log(state);
      console.log(action.payload);
      const list = action.payload.list;
      return state.set('list',list);
    }
  })
},initialState);