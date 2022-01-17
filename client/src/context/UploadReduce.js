

const UploadReduce = (action, state) =>{
    switch(action.type){
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

export default UploadReduce;