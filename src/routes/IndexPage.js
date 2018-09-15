import React from 'react';
import { connect } from 'dva';
import { Router, Route } from 'dva/router';
import { Layout } from 'antd';
import Header from '../components/HeaderMain';
import SliderMenu from './SliderMenu';
import List from './TableList/List';
import EditList from './TableList/EditList';
import '../theme.less';
import styles from './Index.less';

const { Content, Sider } = Layout;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout style={{ marginTop: 64 }}>
          <Sider className={styles.sliderContainer} width={220}>
            <SliderMenu />
          </Sider>
          <Content style={{ marginLeft: 220, padding: 10 }}>
            <Route path="/" exact component={List} />
            <Route path="/edit/:id" component={EditList} />
          </Content>
        </Layout>
      </Layout >
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
