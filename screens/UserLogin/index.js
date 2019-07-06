import UserLoginContainer from "./UserLoginContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { } from "../../reducers/user";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginContainer);