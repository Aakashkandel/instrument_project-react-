const initialState = {
    isLoggedin: false,
    userInfo: {
        email: null,
        uid: null,
        name: null,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return ({
                ...state,

                isLoggedin: true,
                userInfo: {
                    email: action.payload.email,
                    uid: action.payload.uid,
                    name: action.payload.name,
                }

            });

        case 'logout':
            return ({
                ...state,
                isLoggedin: false,
                userInfo: {
                    email: null,
                    uid: null,
                    name: null,
                }
            });
        default:
            return({
                state
            });
    }
}

export default reducer;