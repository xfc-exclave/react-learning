import { ADD_PRODUCT } from "../constant"

export const addProduct = info => {
    const action = { type: ADD_PRODUCT, data: info }
    console.log('流程标记 ============> @actions - 容器组件组织 action 信息，并准备向 store 分发，数据内容：', action)
    return action
}

export const addProductAsync = info => {
    return dispatch => setTimeout(() => dispatch(addProduct(info)), 1500)
}