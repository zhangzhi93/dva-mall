import { Component } from 'react';
import { connect } from 'dva';
import { Router, Route } from 'dva/router';
import { Layout, Form, Input, Icon, Checkbox, Button } from 'antd';
import styles from './Index.less';

const { Content } = Layout;
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;

    const SmileSvg = () => (
      <svg viewBox="0 0 1024 1024" fill="currentColor" width="1em" height="1em">
        <path d="M224 272c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m576 0c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM512 864c-180.8 0-344-108.8-412.8-275.2-6.4-16 1.6-35.2 17.6-41.6 16-6.4 35.2 1.6 41.6 17.6C217.6 707.2 356.8 800 512 800c155.2 0 294.4-92.8 355.2-236.8 6.4-16 25.6-24 41.6-17.6 16 6.4 24 25.6 17.6 41.6C856 755.2 692.8 864 512 864z" p-id="1052" fill="#1296db"></path>
      </svg>
    )
    const HeartSvg = () => (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
      </svg>
    );

    return (
      <Layout className={styles.login}>
        <div className={styles.form}>
          <div className={styles.icons}>
            <Icon component={SmileSvg} style={{ color: 'hotpink' }}></Icon>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className={styles.loginBtn}>Log in</Button>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
            </FormItem>
          </Form>
        </div>
      </Layout >
    );
  }
}

Login.propTypes = {
};

function mapStateToProps({ login }) {
  return { login };
}

const WrappedLogin = Form.create()(Login);

export default connect(mapStateToProps)(WrappedLogin);
