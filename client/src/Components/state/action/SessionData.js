export const userLogin = (email, uid, name) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            payload: { email, uid, name }
        });
    };
};

export const userLogout = () => {
    return (dispatch) => {
        dispatch({
            type: 'logout'
        });
    };
};
