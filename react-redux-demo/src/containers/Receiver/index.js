import { connect } from "react-redux";
import ReceiverUI from "../../views/ReceiverUI";
import { addReceiver } from "../../redux/actions/receiver";

const mapStateToProps = state => ({ data: state })

const mapDispatchToProps = { addReceiver }

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverUI)