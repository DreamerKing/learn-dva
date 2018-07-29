import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import user from './models/user';
import article from "./models/article";
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(err, dispatch) {
        console.log(err);
    }
});

app.use(createLoading());
app.model(user);
app.model(article);
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
