'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    SheetTitle,
} from "@/components/ui/sheet"

import { Input } from '@/components/ui/input'
import React, { useContext } from "react"
import { GlobalContext } from '@/app/context/AppContext'
import { Context } from "vm"
import { patternsComponents } from "../data/patterns"


const SideBarContent = () => {
    const {
        name, setName,
        userName, setUserName,
        message, setMessage,
        setprofileImage,
        backgroundColor,
        setBackgroundColor,
        setPattern,
        setDesignMode,
        setIsVerified
    }
        = useContext<Context>(GlobalContext);

    const handelFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files

        if (file && file.length > 0) {
            const renderer = new FileReader()

            renderer.onload = () => {
                setprofileImage(renderer.result as string)
            }
            renderer.readAsDataURL(file[0])
            return renderer.result
        }
        else {
            return ""
        }
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const handelMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const handelModeSelect = (mode: string) => {
        setDesignMode(mode)
    }

    const handelVerified = (satus: string) => {
        setIsVerified(satus)
    }

    const handelBackground = (color: any) => {
        setBackgroundColor(color.target.value)

    }

    return (

        <div>
            {/* First Section -> */}
            < SheetTitle className="text-2xl">Name</ SheetTitle>
            <input type="text" className="w-11/12 h-14 border border-black rounded-sm mt-5 p-5 outline-none" value={name} onChange={handleName} maxLength={25} />
            <hr
                className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />
            < SheetTitle className="text-2xl">User Name</ SheetTitle>
            <input type="text" className="w-11/12 h-14 border border-black rounded-sm mt-5 p-5 outline-none" value={userName} onChange={handleUserName} maxLength={20} />
            <hr
                className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />

            <div className="relative mt-10">
                <textarea
                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-gray-400 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " value={message} onChange={handelMessage} maxLength={55}>
                </textarea>
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Message
                </label>

            </div>
            <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />

            {/* Second Section -> */}

            < SheetTitle className="text-2xl">Prifile Picture</ SheetTitle>
            <Input type="file" accept="image/png, image/jpeg , image/jpg" className="mt-5 mb-5 cursor-pointer border-gray-400 w-3/4" onChange={handelFile} />

            <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />

            < SheetTitle className="text-2xl mt-10">Background</ SheetTitle>
            <div className="w-[90%] h-20 rounded-sm border border-gray-800 mt-5 flex justify-center items-center">
                <input type="color" className="w-[90%] m-auto h-[70%] rounded outline-none cursor-grab" value={backgroundColor} onChange={handelBackground}></input>
            </div>
            <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />


            < SheetTitle className="text-2xl mt-10">Background Patterns</ SheetTitle>

            <div className="w-full grid grid-cols-4 mt-10 gap-3">
                {
                    patternsComponents.map((Pattern: any, index: number) => {
                        return <div key={index} className={`w-20 h-20 border-4 border-black rounded-md relative cursor-pointer hover:border-8 hover:border-[]`} onClick={() => setPattern(index + 1)}>
                            <Pattern color={backgroundColor} />
                        </div>
                    })
                }
            </div>

            <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />

            {/* Last Section -> */}

            < SheetTitle className="text-2xl mt-10">Apperence Mode</ SheetTitle>
            <Select
                onValueChange={handelModeSelect}
            >
                <SelectTrigger className="w-[80%] h-14 mt-5">
                    <SelectValue placeholder="Dark Mode" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light Mode</SelectItem>
                    <SelectItem value="dark">Dark Mode</SelectItem>
                </SelectContent>
            </Select>

            < SheetTitle className="text-2xl mt-10">Verified</ SheetTitle>
            <Select
                onValueChange={handelVerified}>
                <SelectTrigger className="w-[80%] h-14 mt-5">
                    <SelectValue placeholder="Yes" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default SideBarContent
