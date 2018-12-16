//import { includes } from 'lodash';
import { SubmenuArr } from '../utils/config';
export default {
  namespace: 'app',

  state: {
    firstMenuKey: 'index',
    secondMenuKey: '',
    subMenuList: [{ url: '/index/setting', name: '首页', isActive: true }],
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
      let { url } = payload;
      url = url === '/' ? '/index/setting' : url;
      let menulist = state.subMenuList;
      let ishasMenu = [];
      menulist.forEach((item, index) => {
        if (item.url === url) {
          menulist[index].isActive = true;
          ishasMenu.push(item);
        } else {
          menulist[index].isActive = false;
        }
      });
      if (ishasMenu.length === 0 && url !== '/') {
        const list = SubmenuArr();
        const name = list[url];
        menulist.push({ url, name, isActive: true })
      }
      return { ...state, subMenuList: menulist };
    }
  },
};
