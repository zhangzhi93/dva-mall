import React from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import styles from './index.less';
import logo from '../assets/windCar.svg';
//import userHead from '../../assets/head.png';

const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Cart</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">logout</Menu.Item>
  </Menu>
);

class HeaderLayout extends React.Component {
  render() {
    return (
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <p className={styles.title}>Dva Mall</p>
          </div>
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

export default HeaderLayout;
