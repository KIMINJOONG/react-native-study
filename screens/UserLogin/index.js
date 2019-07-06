import UserLoginContainer from "./UserLoginContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {loginAction} from "../../reducers/user";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({loginAction}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginContainer);