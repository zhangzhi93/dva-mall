import React from 'react';
import { connect } from 'dva';
import { Router, Route } from 'dva/router';
import { Layout} from 'antd';
import Header from '../components/HeaderMain';
import List from './list';
import styles from './IndexPage.css';
const { Footer, Sider, Content } = Layout;

class IndexPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { children } = this.props;
    return(
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Route path="/" exact component={List} />
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
