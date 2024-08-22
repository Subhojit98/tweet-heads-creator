import {  EditorState } from "@/app/interface/types";

const changeName = (state:EditorState,action:any)=>{
    state.content.name = action.payload
}

const changeUserName = (state:EditorState,action:any)=>{
    state.content.username = action.payload
}


const changeMessage = (state:EditorState,action:any)=>{
    state.content.message = action.payload
}


const changeProfilePicture = (state:EditorState, action:any) => {
    state.content.profileImage = action.payload
}

const changeBackgroundColor = (state:EditorState,action:any)=>{
    state.content.backgroundColor = action.payload
}

const changePattern = (state:EditorState,action:any)=>{
    state.content.pattern = action.payload
    
}
const changeDesignMode = (state:EditorState,action:any)=>{
    state.content.designMode = action.payload
}
const chnageVerificationStatus = (state:EditorState,action:any)=>{
    state.content.isVerified = action.payload
}

export {changeName, changeUserName, changeMessage, changeProfilePicture,changeBackgroundColor, changePattern, changeDesignMode, chnageVerificationStatus}
