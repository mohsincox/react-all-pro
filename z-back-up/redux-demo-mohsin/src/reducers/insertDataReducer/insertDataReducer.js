import { INSERT_DATA } from '../../actions/InsertDataAction/InsertDataAction';

const initialState = {
    inser_data_info: {
        message:'Initial Data',
        data:{
            username:'',
            email:''
        }
    }

}

export const insertDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case INSERT_DATA:
            return Object.assign( {}, state, {
                inser_data_info: action.payload
            })
    }

    return state
}



export default insertDataReducer