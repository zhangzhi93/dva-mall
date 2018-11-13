
//引入服务端接口
import { get_list, edit_info, getItemInfoById } from '../services/user';
export default {
  namespace: 'user',
  state: {
    loading: false,
    get_listData: {
      data: [],
      last: true,
      pageNum: 1,
      pageSize: 10,
      pages: 1,
      total: 0
    },
    getItemInfoByIdData: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {

      });
    },
  },

  effects: {
    *get_list({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(get_list, payload);
      yield put({ type: 'save', payload: { get_listData: data } });
    },
    //
    *getItemInfoById({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(getItemInfoById, payload);
      yield put({ type: 'save', payload: { getItemInfoByIdData: data } });
    },

    *edit_info({ payload, callback }, { call, put }) {
      const { data } = yield call(edit_info, payload);
      callback(data);
      yield put({ type: 'save', payload: { get_listData: data } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
