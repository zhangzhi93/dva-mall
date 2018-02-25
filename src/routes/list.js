import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './list.less';

class productList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className={styles.breadNav}>
          <h3><span>Home >> </span>Goods</h3>
          <h1>GoodsList</h1>
        </div>
      </Layout>
    );
  }
}

productList.propTypes = {
};

export default connect()(productList);
