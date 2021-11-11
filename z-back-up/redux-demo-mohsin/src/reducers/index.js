import { combineReducers } from 'redux'
import insertDataReducer from './insertDataReducer/insertDataReducer';

const allReducer = combineReducers({
    insertDataReducer
})

export default allReducer