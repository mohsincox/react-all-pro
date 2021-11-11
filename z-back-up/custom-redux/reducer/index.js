const initialState = {
   name: 'Mohsin',
   address: 'Cox\'s Bazar',
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT': 
         // return action.payload;
         return Object.assign({}, state, {
            name: action.payload.name,
            address: action.payload.address,
         })
      default:
         return state;
   }
 }
 export default reducer;