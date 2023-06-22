import Link from "next/link"
import { AiOutlineSend } from "react-icons/ai"
import { Poppins } from "@next/font/google"
import { footerlink, footerlinkCondition } from "../../data/footer"
import Image from "next/image"

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
export const Footer = () => {
    return (
        <footer className={`${poppins.className} text-sm`}>
            <div className="container mx-auto">
                <div>
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4 lg:py-6">
                        <div className="flex justify-center items-center">
                            <AiOutlineSend size={25} className="mr-1 text-gray-600" />
                            <p className="text-base leading-loose text-gray-600">Built by<Link target={"_blank"} href={'https://github.com/Asam237'} className="mx-1 underline underline-offset-4 text-black font-semibold">Asam</Link>🇨🇲</p>
                        </div>
                        <div className="flex justify-center items-center pt-4 lg:pt-0">
                            {
                                footerlink.map((item, index) => {
                                    return (
                                        <Link href={item.path} key={index} className="mr-4 leading-loose text-gray-600"><Image src={item.icon} alt={item.icon} className="w-6 h-6" /></Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="border-t">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4 lg:py-6">
                        <div className="flex justify-center items-center">
                            <p className="leading-loose text-gray-600">© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
                        </div>
                        <div className="flex justify-center items-center pt-4 lg:pt-0">
                            {
                                footerlinkCondition.map((item, index) => {
                                    return (
                                        <Link href={item.path} key={index} className="mr-4 text-gray-600 leading-loose hover:underline hover:underline-offset-4">{item.name}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}