export default {
  namespace: 'app',

  state: {
    firstMenuKey: 'index',
    secondMenuKey: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const pathname = location.pathname.split('/');
        dispatch({
          type: 'save',
          payload: {
            firstMenuKey: pathname[1],
            secondMenuKey: pathname[2]
          },
        });
      });
    },
  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
