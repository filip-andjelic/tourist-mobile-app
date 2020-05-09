export const Types = {
    loginSuccess: 'REDUX_ACTION_loginSuccess',
    signupSuccess: 'REDUX_ACTION_signupSuccess',
    currentFacility : 'REDUX_ACTION_currentFacility'
};

export const currentFacility = (data)=>({
    type:Types.currentFacility,
    currentFacility : data
});
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
export  const switchScreen = (data)=>(
    {
        type: Types.signupSuccess,
        email: data.email,
        password : data.password
    }
)