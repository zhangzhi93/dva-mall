import { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Row, Col, Form, Input, Button, message, Card, DatePicker } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
};

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props);
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch({
      type: 'user/getItemInfoById',
      payload: {
        id
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { validateFields } = form;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'tableList/edit_info',
          payload: {
            Name: values.Name
          },
          callback: (res) => {
            if (res && res.status === '0') {
              message.info(`您提交的姓名为：${res.Name}`);
              message.success('提交成功');
              dispatch(routerRedux.push('/'));
            }
          },
        })
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, user: { getItemInfoByIdData: { data } } } = this.props;
    return (
      <Layout>
        <Card title="编辑">
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="用户昵称" >
              {getFieldDecorator('Name', {
                initialValue: data ? data.name : '',
                rules: [
                  { required: true, message: '不能为空' },
                  { max: 15, message: '不能超过15位' },
                ],
              })(
                <Input size="default" maxLength="5" placeholder="请输入" />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="日期" >
              {getFieldDecorator('Date', {
                rules: [
                  { required: true, message: '不能为空' },
                ],
              })(
                <DatePicker placeholder="请选择日期" />,
              )}
            </FormItem>
            <Col span={24}>
              <Button type="primary" ghost htmlType="submit">提交</Button>
            </Col>
          </Form>
        </Card>
      </Layout >
    );
  }
}

UserEdit.propTypes = {
};

function mapStateToProps({ user }) { //  connect 的作用在于 State -> Props 的转换，同时自动注册一个 dispatch 的方法，用以触发 action
  return { user };
}

const WrappedUserEdit = Form.create()(UserEdit);

export default connect(
  mapStateToProps,
)(WrappedUserEdit);
