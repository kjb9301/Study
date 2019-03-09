import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MENU = 'GET_MENU';
const GET_TYPE = 'GET_TYPE';

export const getMenu = createAction(GET_MENU, api.getData);
export const getType = createAction(GET_TYPE);

const initialState = Map({
  list: List(),
  type: ''
});

export default handleActions({
  ...pender({
    type: GET_MENU,
    onSuccess: (state,action) => {
      const list = action.payload.data;
      return state.set('list',list);
    }
  }),
  ...pender({
    type: GET_TYPE,
    onSuccess: (state,action) => {
      
    }
  })
},initialState);