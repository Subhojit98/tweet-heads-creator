"use client"
import Image from "next/image"
import verifiedIcon from '@/app/assets/svgs/social-media.png'
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/AppContext"
import { Context } from "vm"
import SVGDisplay from "./SVGDisplay"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import SideBarContent from "./SideBarContent"

const HeadView = () => {

    const [isClickedEdit, setIsClickedEdit] = useState(false);
    const [isMobile, setIsMobile] = useState<null | Boolean>(null);

    const {
        name,
        userName,
        message,
        profileImage,
        backgroundColor,
        pattern,
        designMode,
        isVerified, }
        = useContext<Context>(GlobalContext);

    // Update isMobile based on screen width
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener('resize', handleResize);
        if (!isMobile) setIsClickedEdit(false);
        return () => window.removeEventListener('resize', handleResize);
    });

    // Determine the onClick handler based on the screen size
    const handleClick = () => {
        if (isMobile) {
            setIsClickedEdit(!isClickedEdit);
        }
    };

    return (
        <div className="w-[85%] h-[60vh] m-auto xl:w-[60%] xl:h-[60vh] border border-black left-[8%] lg:left-[10%] xl:left-[34%] top-[20%] rounded-md bg-white md:absolute overflow-x-auto px-3 ">

            <div className="flex justify-center pb-10" id="banner-image">
                <div className="w-[1100px] h-[333px] flex justify-center items-center overflow-x-auto m-auto mt-24 relative cursor-pointer md:cursor-auto" onClick={handleClick}>
                    <div className={`w-[70%] h-[70%] ${designMode == "light" ? "bg-white border border-gray-950" : "bg-gray-950"} rounded-lg p-10 z-50 duration-200 delay-150 ease-linear`} >
                        <div className="flex justify-between w-full">
                            <div className="flex gap-4">
                                <Image src={profileImage} width={75} height={75} alt="" className="w-[4.7rem] h-[4.7rem] rounded-full object-cover object-center"></Image>
                                <div>
                                    <h2 className={`text-2xl mt-1 inline-flex gap-2 ${designMode == "light" ? "text-black" : "text-white"}`}>{name}  {isVerified == "true" ? <span><Image src={verifiedIcon} alt="" /></span> : ""}</h2>
                                    <p className={` mt-1 ${designMode == "light" ? "text-black" : "text-white"}`}>{userName}</p>
                                </div>
                            </div>

                            <h2 className="text-2xl text-blue-500"><span className="text-3xl">+</span> Follow</h2>
                        </div>

                        <div className="w-full h-1/2 p-3 pr-10">
                            <p className={`text-lg mt-3 -ml-1 leading-8 ${designMode == "light" ? "text-black" : "text-white"}`}>{message}</p>
                        </div>
                    </div>
                    {
                        pattern && <SVGDisplay id={pattern} color={backgroundColor} />
                    }
                </div>
            </div>

            {/* for mobile screen editor -> */}

            <Sheet open={isClickedEdit}>
                <SheetContent side={"bottom"} className="overflow-y-auto h-1/2 rounded-t-xl sm:mx-5 ">
                    <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-violet-500" />

                    <SideBarContent />
                    <button className="inline-flex mr-5 items-center my-10 justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-red-500 rounded-lg hover:bg-red-300 focus:shadow-outline focus:outline-none hover:scale-95"
                        onClick={() => setIsClickedEdit(!isClickedEdit)}
                    >
                        Cancel
                    </button>

                    <button className="inline-flex items-center my-10 justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none hover:scale-95"
                        onClick={() => setIsClickedEdit(!isClickedEdit)}
                    >
                        Done
                    </button>
                </SheetContent>
            </Sheet>

        </div>


    )
}

export default HeadView
