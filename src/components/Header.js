import { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { MenuList } from '../utils/config';
import styles from './index.less';
import logo from '../assets/windCar.svg';
//import userHead from '../../assets/head.png';

const { Header } = Layout;
const MenuItem = Menu.Item;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <span>Cart</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">logout</Menu.Item>
  </Menu>
);

class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { app: { firstMenuKey} } = this.props;

    return (
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <p className={styles.title}>Dva Mall</p>
          </div>
          <Menu
            selectedKeys={[firstMenuKey]}
            mode="horizontal"
            theme="dark"
            className={styles.menu}
          >
            {
              MenuList.map(item => (
                <MenuItem key={item.key}>
                  <Link to={item.path}>
                    <Icon type={item.icon} className="header-icon" />
                    {item.name}
                  </Link>
                </MenuItem>
              ))
            }
          </Menu>
          <div className={styles.userinfo}>
            <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'}>
              <a href="javascript:">
                admin <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}

HeaderLayout.propTypes = {
};

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(HeaderLayout);
