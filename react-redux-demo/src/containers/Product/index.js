import { connect } from "react-redux";
import TableUI from "../../views/ProductUI";
import { addProduct, addProductAsync } from "../../redux/actions/product";

const mapStateToProps = state => {
    console.log('流程标记 ============> @containers - 容器组件将 state 映射为 props，内容：', state)
    return { propsState: state }
}

const mapDispatchToProps = {
    addOneProduct: addProduct,
    addProductAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(TableUI)