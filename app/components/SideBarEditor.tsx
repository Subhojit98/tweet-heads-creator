"use client"
import Image from "next/image"
import textIcon from "@/app/assets/svgs/text-svgrepo-com.svg"
import messageIcon from "@/app/assets/svgs/message-square-list-svgrepo-com.svg"
import patternIcon from "@/app/assets/svgs/pattern-svgrepo-com.svg"
import moveIcon from "@/app/assets/svgs/move-svgrepo-com.svg"
import imageIcon from "@/app/assets/svgs/image-plus-svgrepo-com.svg"
import colorIcon from "@/app/assets/svgs/color-swatch-svgrepo-com.svg"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideBarContent from "./SideBarContent"
import { useEffect, useState } from "react"


const SideBarEditor = () => {
    const [isMobile, setIsMobile] = useState<null | Boolean>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    });

    return (
        <div className="w-[4%] lg:w-[8%] 2xl:w-[4%] h-full border-r border-black bg-white left-0 hidden absolute md:block">
            <div className="h-20 border-b border-black justify-center items-center hidden md:flex">

                {!isMobile && <Sheet>
                    <SheetTrigger className="relative outline-none">

                        <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md cursor-pointer">
                            <div className="flex flex-col justify-between w-[20px] h-[20px]">
                                <div className="bg-gray-800 h-[2px] w-1/2 rounded"></div>
                                <div className="bg-gray-800 h-[1px] rounded"></div>
                                <div className="bg-gray-800 h-[2px] w-1/2 rounded self-end"></div>
                            </div>
                        </div>
                    </SheetTrigger>

                    <SheetContent side={"left"} className="overflow-y-auto pb-52 h-full lg:w-[40%] xl:w-[35%] 2xl:w-[25%] lg:left-[8%] 2xl:left-[4%]">
                        <SideBarContent />
                    </SheetContent>
                </Sheet>}
            </div>

            <ul className="flex flex-col items-center mt-12 gap-16">

                <li className="w-7"><Image src={textIcon} alt="" /></li>
                <li className="w-7"><Image src={messageIcon} alt="" /></li>
                <li className="w-7"><Image src={moveIcon} alt="" /></li>
                <li className="w-7"><Image src={imageIcon} alt="" /></li>
                <li className="w-7"><Image src={colorIcon} alt="" /></li>
                <li className="w-7"><Image src={patternIcon} alt="" /></li>
            </ul>

        </div>


    )
}

export default SideBarEditor
