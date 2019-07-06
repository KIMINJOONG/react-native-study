import UserJoinContainer from "./UserJoinContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signUp } from "../../reducers/user";

const mapStateToProps = state => ({
  isSignedUp: state.user.isSignedUp
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ signUp }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserJoinContainer);
