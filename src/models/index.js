
//引入服务端接口
import { get_list, edit_info } from '../services/example';
export default {
  namespace: 'tableList',
  state: {
    loading: false,
    get_listData: {
      data: [],
      last: true,
      pageNum: 1,
      pageSize: 10,
      pages: 1,
      total: 0
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'get_list'
          })
        }
      });
    },
  },

  effects: {
    *get_list({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(get_list, payload);
      yield put({ type: 'save', payload: { get_listData: data } });
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
