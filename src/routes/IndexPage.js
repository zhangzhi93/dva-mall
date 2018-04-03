import React from 'react';
import { connect } from 'dva';
import { Router, Route } from 'dva/router';
import { Layout } from 'antd';
import Header from '../components/HeaderMain';
import Footer from '../components/Footer';
import SliderMenu from './SliderMenu';
import List from './list';
import styles from './IndexPage.less';
const { Content, Sider } = Layout;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider className={styles.sliderContainer} width={220}>
            <SliderMenu />
          </Sider>
          <Content style={{ marginLeft: 220 }}>
            <Route path="/" exact component={List} />
            <Footer />
          </Content>
        </Layout>
        {/* <Layout style={{ marginLeft: 220 }}>
          <Route path="/" exact component={List} />
          <Footer />
        </Layout> */}
      </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
