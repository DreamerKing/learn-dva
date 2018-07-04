import { connect } from 'dva';
import  UserList  from '../components/UserList';

export default connect((state) => {
    let { list } = state.user;
    return {
        list
    };
})(UserList);