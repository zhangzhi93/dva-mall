import dva from 'dva';
import ReactDOM from 'react-dom';
import { message, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/app').default);
app.model(require('./models/index').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
//国际化-中文
const App = app.start();
ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));
//app.start('#root');
