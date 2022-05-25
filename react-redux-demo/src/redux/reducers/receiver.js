import { ADD_RECEIVER } from "../constant"

const initialReceiver = [
    {
        key: '1',
        name: '剑飞南道',
        age: 21,
        gender: '男',
    },
    {
        key: '2',
        name: '月落西窗',
        age: 19,
        gender: '女'
    },
]

const receiverReducer = (state = initialReceiver, { type, data }) => {
    console.log('>>>>>>>>>>>', data)
    switch (type) {
        case ADD_RECEIVER:
            return [...state, data]
        default:
            return state
    }
}
export default receiverReducer