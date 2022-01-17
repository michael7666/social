export const UploadStart = (file)=>({
    type: "UPLOAD_START",
})

export const UploadSuccess = (file) =>({
    type: "UPLOAD_SUCCESS ",
    payload: file
})

export const UploadFailure = (error) =>({
    type: "UPLOAD_FAILURE",
    payload: error
})