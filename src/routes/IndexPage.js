import { connect } from 'dva';
import { withRouter } from 'dva/router';
import BottomMenu from "../components/BottomMenu";

export default withRouter(connect(state => {
  return {...state}
})(BottomMenu));
