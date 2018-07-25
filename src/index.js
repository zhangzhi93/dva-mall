import dva from 'dva';
import moment from 'moment';
import './index.css';
moment.locale('zh-cn');
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
