import { fetchUsers } from '../services/user';
export default {
    namespace: 'user',
    
    // 初始状态
    state: {
        list: []
    },
    
    // 处理同步操作，唯一可以修改state的地方
    reducers: {
        save(state, action) {
            return {
                ...state, 
                list: action.data
            };
        },
    },

    // 处理异步操作，不可以直接修改state,只能是generator函数
    effects: {
        *fetch(action, { put, call}) {
            const {data:{ data: users }} = yield call(fetchUsers, action.type);
            yield put({ type: 'save', data:users });
        },
    },
   
    // 订阅数据源
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if(pathname === '/users') {
                    dispatch({ type: 'fetch'});
                }
            });
        },
    },
}