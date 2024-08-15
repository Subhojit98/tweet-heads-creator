"use client"
import { toPng } from "html-to-image"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
const Navbar = () => {
    const download = require('downloadjs')
    const [count, setCount] = useState(1)
    const { toast } = useToast()

    const handelDownload = async () => {
        const node = document.getElementById("banner-image")
        try {
            const dataUrl = await toPng(node as HTMLElement)
            setCount(count + 1)
            download(dataUrl, `coustom-tweetheads-${count}.png`)
            toast({
                description: "Downloaded Successfully",
            })

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>

            <nav className="w-full xl:w-[92%] 2xl:w-[96%] h-20 border-b border-black px-2 sm:px-5 bg-white absolute xl:right-0">
                <div className="flex w-full justify-between items-center h-full">

                    <h1 className="text-2xl font-bold dark:text-white text-[#8E05C2] ml-10 lg:ml-20">Ternds</h1>

                    <div className="flex gap-5 sm:gap-10 items-center ">

                        <button className="relative inline-block group" onClick={handelDownload}>
                            <span className="relative z-10 block px-3 py-3  md:px-5 md:py-3 overflow-hidden font-medium leading-tight text-gray-800 dark:text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-4 py-3 md:px-5 md:py-3 rounded-lg bg-gray-50 dark:bg-black"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative dark:text-white">Download</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-10 md:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                    </div>
                </div>
            </nav>
            <Toaster />

        </>
    )
}

export default Navbar
