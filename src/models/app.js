//import { includes } from 'lodash';
import { SubmenuArr } from '../utils/config';
export default {
  namespace: 'app',

  state: {
    firstMenuKey: 'index',
    secondMenuKey: '',
    subMenuList: [{ url: '/index/setting', name: '首页' }],
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
        dispatch({
          type: 'addMenu',
          payload: {
            url: location.pathname
          }
        })
      });
    },
  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    addMenu(state, { payload }) {
      const { url } = payload;
      let menulist = state.subMenuList;
      let ishasMenu = [];
      menulist.forEach(item => {
        if (item.url === url) {
          ishasMenu.push(item);
        }
      });
      if (ishasMenu.length === 0) {
        const list = SubmenuArr();
        const name = list[url];
        menulist.push({ url, name })
      }
      return { ...state, subMenuList: menulist };
    }
  },
};
