import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Menu } from 'antd';
import { MenuList } from '../utils/config';
import styles from './Index.less';

const MenuItem = Menu.Item;

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    }
  }

  render() {
    let { app: { firstMenuKey, secondMenuKey } } = this.props;
    firstMenuKey = firstMenuKey ? firstMenuKey : 'index';
    const subMenu = MenuList.find(item => item.key == firstMenuKey);
    const itemKey = secondMenuKey ? secondMenuKey : subMenu.MenuList[0].key;
    return (
      <div>
        <Menu
          theme='light'
          defaultOpenKeys={['sub1']}
          selectedKeys={[itemKey]}
          mode="inline"
          style={{ borderRight: '1px solid #fff' }}
        >
          {
            subMenu.MenuList.map(item => (
              <MenuItem key={item.key}>
                <Link to={subMenu.path + item.path}>{item.name}</Link>
              </MenuItem>
            ))
          }
        </Menu>
      </div>
    );
  }
}

Sider.propTypes = {
};

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(Sider);
