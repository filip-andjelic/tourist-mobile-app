export const Types = {
    loginSuccess: 'REDUX_ACTION_loginSuccess',
};

export const LoginAction = (data) => ({
    type: Types.loginSuccess,
    email: data.email,
    password: data.password,
});