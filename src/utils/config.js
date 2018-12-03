export const MenuList = [{
  key: 'index',
  path: '/index',
  name: '首页',
  icon: 'home',
  MenuList: [{
    key: 'setting',
    path: '/setting',
    name: '设置',
    icon: 'setting',
  }, {
    key: 'userCenter',
    path: '/userCenter',
    name: '个人中心',
    icon: 'user',
  }, {
    key: 'collection',
    path: '/collection',
    name: '设置',
    icon: 'setting',
  }]
}, {
  key: 'message',
  path: '/message',
  name: '消息中心',
  icon: 'message',
  MenuList: [{
    key: 'article',
    path: '/article',
    name: '文章管理',
    icon: 'file-word',
  }, {
    key: 'SMS',
    path: '/SMS',
    name: '短信管理',
    icon: 'mail',
  }]
}, {
  key: 'user',
  path: '/user',
  name: '用户管理',
  icon: 'idcard',
  MenuList: [{
    key: 'tags',
    path: '/tags',
    name: '用户标签',
    icon: 'tags',
  }, {
    key: 'order',
    path: '/order',
    name: '订单列表',
    icon: 'shopping-cart',
  }]
}]

export function SubmenuArr() {
  let sublist = {};
  MenuList.forEach(element => {
    element.MenuList.forEach(item => {
      sublist[element.path + item.path] = item.name
    })
  });
  return sublist;
}
