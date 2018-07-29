import { connect } from 'dva';
import { withRouter } from 'dva/router';
import Atrticle from '../components/Article';

export default withRouter(connect(state => {
    console.log(state, "ccd")
    return { ...state }
})(Atrticle));