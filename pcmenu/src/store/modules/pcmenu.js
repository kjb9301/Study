import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MENU = 'GET_MENU';
const GET_TYPE = 'GET_TYPE';
const SET_ORDER = 'SAVE_ORDER';

export const getMenu = createAction(GET_MENU, api.getData);
export const getType = createAction(GET_TYPE);
export const setOrder = createAction(SET_ORDER);

const initialState = Map({
  list: List(),
  type: '',
  order: {
    name: '',
    price: '',
    count: 0,
    total: 0
  }
});

export default handleActions({
  ...pender({
    type: GET_MENU,
    onSuccess: (state,action) => {
      const list = action.payload.data;
      return state.set('list',list);
    }
  }),
  [GET_TYPE]: (state,action) => {
    const type = action.payload;
    return state.set('type',type);
  },
  [SET_ORDER]: (state,action) => {
    const { name, price } = action.payload;
    return state.setIn(['order','name'],name)
                .setIn(['order','price'],price)
  }
},initialState);