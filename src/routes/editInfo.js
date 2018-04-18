import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Row, Col, Form, Input, Button, message } from 'antd';
import styles from './list.less';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = () => {
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
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Layout>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col span={8}>
              <FormItem {...formItemLayout} label="用户昵称" >
                {getFieldDecorator('Name', {
                  rules: [
                    { required: true, message: '不能为空' },
                    { max: 5, message: '不能超过15位' },
                  ],
                })(
                  <Input size="default" maxLength="5" placeholder="请输入" />,
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <Button type="primary" ghost htmlType="submit">提交</Button>
            </Col>
          </Row>
        </Form>
      </Layout >
    );
  }
}

EditInfo.propTypes = {
};

function mapStateToProps(state) { //  connect 的作用在于 State -> Props 的转换，同时自动注册一个 dispatch 的方法，用以触发 action
  return state.tableList;
}

const WrappedEditInfo = Form.create()(EditInfo);

export default connect(
  mapStateToProps,
)(WrappedEditInfo);
