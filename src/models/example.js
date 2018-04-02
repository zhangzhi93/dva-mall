
//引入服务端接口
import { get_list } from '../services/example';
export default {
  namespace: 'example',
  state: {
    get_list:{

    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *get_list({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'loadingChange', payload: true });
      const { res } = yield call(get_list, payload);
      yield put({ type: 'save', payload: { get_activityData: res } });
      yield put({ type: 'loadingChange', payload: false });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
