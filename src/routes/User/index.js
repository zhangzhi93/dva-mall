import { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Table, Button, Breadcrumb } from 'antd';
import styles from './index.less';

const BreadcrumbItem = Breadcrumb.Item;
const columns = [{
  title: 'id',
  dataIndex: 'key',
  key: 'key',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  width:300
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: 400
}, {
  title: '操作',
  dataIndex: 'operate',
  render: (text, record) => (
    <Button type="primary" size="small">
      <Link to={`user/tags/edit/${record.key}`}>编辑</Link>
    </Button>
  )
}];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/get_list'
    })
  }

  handleTableChange = (pagination) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/get_list',
      payload: {
        pageSize: 10,
        page: pagination
      }
    })
  }

  render() {
    const { user: { get_listData }, loading } = this.props;
    const { data } = get_listData;
    return (
      <Layout>
        <Breadcrumb style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem><a href="javascript:">Goods</a></BreadcrumbItem>
        </Breadcrumb>
        <div className="user-table-container">
          <Table
            dataSource={data}
            columns={columns}
            bordered
            pagination={{
              total: get_listData.total,
              current: get_listData.pageNum,
              onChange: this.handleTableChange,
              showTotal: totalData => (<div>共<span className="page-text">{totalData}</span>条数据</div>)
            }}
            loading={loading}
          />
        </div>
      </Layout >
    );
  }
}

UserList.propTypes = {
};

function mapStateToProps({ user, loading }) { //  connect 的作用在于 State -> Props 的转换，同时自动注册一个 dispatch 的方法，用以触发 action
  return {
    user,
    loading: loading.models.user
  };
}

export default connect(mapStateToProps)(UserList);
