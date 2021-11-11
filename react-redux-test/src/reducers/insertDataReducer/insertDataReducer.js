import { INSERT_DATA, SPRINT_CHANGE_TABKEY } from '../../actions/InsertDataAction/InsertDataAction';

const initialState = {
    inser_data_info: {
        message:'Initial Data',
        data:{
            username:'',
            email:''
        }
    },
    change_pagination: {
        message:'Initial Change Pagination',
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
        case SPRINT_CHANGE_TABKEY:
            return Object.assign( {}, state, {
                change_pagination: action.payload
            })
    }

    return state
}



export default insertDataReducer