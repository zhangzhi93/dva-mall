import { Component } from 'react';
import { connect } from 'dva';
import { Router, Route, Redirect } from 'dva/router';
import { Layout } from 'antd';
import Header from '../components/Header';
import SliderMenu from './SliderMenu';
import SubMenuList from '../components/SubMenuList';
import UserList from './User/index';
import UserEdit from './User/UserEdit';
import '../theme.less';
import styles from './Index.less';

const { Content, Sider } = Layout;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Header />
        <Layout style={{ marginTop: 64 }}>
          <Sider className={styles.sliderContainer} width={220}>
            <SliderMenu />
          </Sider>
          <Content style={{ marginLeft: 220, padding: 10 }}>
            <SubMenuList />
            {/* <Route path="/user" exact component={(() =>
              <Redirect to="/user/tags" />
            )} /> */}
            <Route path="/user/tags" exact component={UserList} />
            <Route path="/user/tags/edit/:id" component={UserEdit} />
          </Content>
        </Layout>
      </Layout >
    );
  }
}

IndexPage.propTypes = {
};

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(IndexPage);
