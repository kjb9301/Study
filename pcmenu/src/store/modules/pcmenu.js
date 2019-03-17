import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MENU = 'GET_MENU';
const GET_TYPE = 'GET_TYPE';
const SET_ORDER = 'SET_ORDER';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';

export const getMenu = createAction(GET_MENU, api.getData);
export const getType = createAction(GET_TYPE);
export const setOrder = createAction(SET_ORDER);
export const setTotalPrice = createAction(SET_TOTAL_PRICE);

const initialState = Map({
  list: List(),
  type: '',
  orderList: [],
  totalPrice: 0
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
    const orderList = action.payload;
    return state.set('orderList',orderList);
  },
  [SET_TOTAL_PRICE]: (state,action) => {
    const totalPrice = action.payload;
    return state.set('totalPrice',totalPrice);
  }
},initialState);