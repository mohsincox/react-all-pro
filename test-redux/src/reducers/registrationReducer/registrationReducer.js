import { REGISTRATION } from '../../actions/RegistrationAction/RegistrationAction'
// import { LOGIN_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'
// import { DUPLICATE_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'


// import { USER_LIST } from '../../actions/UserRegistration/UserListAction'

const initialState = {
    registration_info: {
        message:'before register',
        data:{
            username:'',
            email:''
        }

    }

}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTRATION:
            return Object.assign( {}, state, {
                registration_info: action.payload
            })

        // case ADD_ROLE:
        //     return Object.assign( {}, state, {
        //         new_role: action.payload
        //     })
            
        // case DELETE_ROLE:
        //     return Object.assign( {}, state, {
        //         role_list: action.payload
        //     })
            
        // case ROLE_OF_USER:
        //     return Object.assign( {}, state, {
        //         role_of_user: action.payload
        //     })

        // case ROLE_SET:
        //     return Object.assign( {}, state, {
        //         role_set: action.payload
        //     })

       
    }

    return state
}



export default registrationReducer