const AuthReducer = (state, action) =>{
    switch(action.type){
       case "LOGIN_START":
           return{
            user: null,
            isfetching: true,
            error: false
           };
        case "LOGIN_SUCCESS":
            return{
             user: action.payload,
             isfetching: false,
             error: false
            };
        case "LOGIN_FAILURE":
                return{
                 user: null,
                 isfetching: false,
                 error: action.payload,
                };
        case "UPLOAD_START":
             return{
                file: null,
                isfetching: true,
                error: false
             };
        case "UPLOAD_SUCCESS":
              return{
                  file: action.payload,
                  isfetching: false,
                  error: false
              };
        case "UPLOAD_FAILURE":
            return{
               file: null,
               isfetching: false,
               error: true
            };
        default: {
            return {
                state
            }
        }
    }
}


export default AuthReducer;