import { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import styles from './index.less';

class SubMenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { app: { subMenuList } } = this.props;
    return (
      <div className={styles.submenu_list}>
        {
          subMenuList.map(item => (
            <Link to={item.url} key={item.url}>
              <div className={styles.submenu_item + ' ' + (item.isActive ? styles.active : '')}>
                <span>{item.name}</span>
                <i className={styles.close}></i>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

SubMenuList.propTypes = {
};

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(SubMenuList);
