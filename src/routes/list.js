import React from 'react';
import { connect } from 'dva';
import { Layout, Table, Row, Col, Button } from 'antd';
import styles from './list.less';
import { Link } from 'react-router-dom';

const columns = [{
  title: 'id',
  dataIndex: 'key',
  key: 'id',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class productList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleTableChange = (pagination) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'tableList/get_list',
      payload: {
        pageSize: 10,
        page: pagination
      }
    })
  }

  render() {
    const { get_listData, loading } = this.props.tableList;
    const { data } = get_listData;
    return (
      <Layout>
        <div className={styles.breadNav}>
          <h3><span>Home >> </span>Goods</h3>
          <h1>GoodsList</h1>
        </div>
        <Row>
          <Col span={8} offset={2}>
            <Button>
              <Link to="/edit">编辑</Link>
            </Button>
          </Col>
        </Row>
        <div className="table-container">
          <Table
            dataSource={data}
            columns={columns}
            pagination={{
              total: get_listData.total,
              current: get_listData.pageNum,
              onChange: this.handleTableChange,
              showTotal: totalData => (<div>共<span className="page-text">{totalData}</span>条数据</div>)
            }}
            loading={loading}
          />
        </div>
      </Layout>
    );
  }
}

productList.propTypes = {
};

function mapStateToProps(state) { //  connect 的作用在于 State -> Props 的转换，同时自动注册一个 dispatch 的方法，用以触发 action
  const { tableList } = state;
  return {
    tableList
  };
}

export default connect(mapStateToProps)(productList);
