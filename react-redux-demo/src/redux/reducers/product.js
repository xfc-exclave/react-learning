import { ADD_PRODUCT } from "../constant"

const initialProducts = [
    {
        key: '1',
        name: '陶瓷内胆咖啡杯',
        price: '65.99',
        address: '广西南昌',
    },
    {
        key: '2',
        name: '印花医用外科口罩',
        price: '14.50',
        address: '浙江金华',
    },
]

const productReducer = (state = initialProducts, { type, data }) => {
    console.log('流程标记 ============> @reducer - 从 store 接收到 %s', data)
    switch (type) {
        case ADD_PRODUCT:
            return [data, ...state]
        default:
            return state
    }
}
export default productReducer