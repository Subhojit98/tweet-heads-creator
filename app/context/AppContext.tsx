"use client"

import { createContext, useState } from "react"
import profilePicture from '@/app/assets/iamges/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg'
export const GlobalContext = createContext({})

export const GlobalConextProvider = ({ children }: any) => {
    const [name, setName] = useState("Jessica Doe")
    const [userName, setUserName] = useState("@ i_am_johndoe")
    const [message, setMessage] = useState("Hey there I am using tweetheads !")
    const [profileImage, setprofileImage] = useState(profilePicture.src)
    const [backgroundColor, setBackgroundColor] = useState("#FBB901")
    const [pattern, setPattern] = useState(1)
    const [designMode, setDesignMode] = useState("dark")
    const [isVerified, setIsVerified] = useState("true")

    return (
        <GlobalContext.Provider value={{
            name, setName,
            userName, setUserName,
            message, setMessage,
            profileImage, setprofileImage,
            backgroundColor, setBackgroundColor,
            pattern, setPattern,
            designMode, setDesignMode,
            isVerified, setIsVerified
        }}>
            {children}
        </GlobalContext.Provider>
    )
}