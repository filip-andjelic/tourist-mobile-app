export const Types = {
    loginSuccess: 'REDUX_ACTION_loginSuccess',
};

export const LoginAction = (data) => ({
    type: Types.loginSuccess,
    email: data.email,
    entries: data.entries,
    firstName: data.firstName,
    lastName: data.lastName,
    isHost: data.isHost,
    messages: data.messages,
    photoUrl: data.photoUrl,
    rating: data.rating,
    token: data.token
});