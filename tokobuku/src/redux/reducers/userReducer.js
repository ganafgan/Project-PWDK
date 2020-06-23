const INITIAL_STATE = {
    user : null
}
    

const userReducer = (state=INITIAL_STATE, action) => {
    if(action.type === "SAVE_USER_DATA"){
        return action.payload
    }else if(action.type === 'CLEAR_USER_DATA'){
        return null
    }else{
        return state;
    }
}

export default userReducer