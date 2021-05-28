const initialState = {
    open: false,
}

export function navReducer( state = initialState, action){
        switch(action.type){
            case "CHANGE_INFO":
            console.log('this is the action payload', action.payload)

            return{
                ...state,
                open: !state.open
            }
            default: 
                return state;
        }
};


export default navReducer;