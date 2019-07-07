import UserDetailContainer from "./UserDetailContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutAction } from "../../reducers/user";

const mapStateToProps = state => ({
  me : state.user.me,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logoutAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailContainer);