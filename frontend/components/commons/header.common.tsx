import Link from "next/link"
import { AiOutlineUser, AiOutlineSend } from "react-icons/ai"
import { Roboto } from "@next/font/google"
import { headers, headersLog } from "../../data/header"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"


const acme = Roboto({ weight: "900", subsets: ['latin'] })
export const Header = () => {

    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const router = useRouter()
    const name = cookie?.qwer?.user?.fullname
    const token = cookie?.qwer?.token
    const userType = cookie?.qwer?.user?.userType

    const logout = async () => {
        await removeCookie('qwer');
        router.push("/")
    }


    return (
        <header>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center py-10">
                <Link className="flex lg:flex-row items-center" href={"/"}>
                    <AiOutlineSend size={40} className="text-white" />
                    <h4 className={`text-xl text-white font-semibold uppercase ml-2 tracking-widest ${acme.className}`}>Heptih</h4>
                </Link>
                {token ?
                    userType === "METIER" ?
                        < div className="flex justify-center items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="outline-none">
                                    <div className="flex flex-row text-primary font-bold items-center text-base text-white">
                                        <AiOutlineUser size={36} className="mr-2 text-white" />
                                        <span className="text-base">
                                            {name}
                                        </span>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    sideOffset={5}
                                    className="bg-white shadow-sm border min-w-[150px] rounded text-sm"
                                >
                                    <DropdownMenuSeparator className="border-t" />
                                    <DropdownMenuItem
                                        onClick={logout}
                                        className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center text-red-600 hover:bg-red-50"
                                    >
                                        Deconnexion
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="flex justify-center items-center border text-base px-6 py-3 rounded-full border-white ml-4 hover:scale-110 duration-300 ease-in-out text-white">
                                <Link href={'/lost'} className="font-semibold text-base">
                                    Dashboard
                                </Link>
                            </div>
                        </div> :
                        < div className="flex justify-center items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="outline-none">
                                    <div className="flex flex-row text-primary font-bold items-center text-base text-white">
                                        <AiOutlineUser size={36} className="mr-2 text-white" /> <span className="text-base">
                                            {name}
                                        </span>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    sideOffset={5}
                                    className="bg-white shadow-sm border min-w-[150px] rounded text-sm"
                                >
                                    <DropdownMenuSeparator className="border-t" />
                                    <DropdownMenuItem
                                        onClick={logout}
                                        className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center text-red-600 hover:bg-red-50"
                                    >
                                        Deconnexion
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="flex justify-center items-center border text-base px-6 py-3 rounded-full border-white ml-4 hover:scale-110 duration-300 ease-in-out text-white">
                                <Link href={'/lost'} className="font-semibold text-base">
                                    Dashboard
                                </Link>
                            </div>
                            <div className="flex justify-center items-center border text-base px-6 py-3 rounded-full border-white ml-4 hover:scale-110 duration-300 ease-in-out text-white">
                                <Link href={'/administration'} className="font-semibold text-base">
                                    Administration
                                </Link>
                            </div>
                        </div>
                    :
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
                        <div className="hidden lg:flex justify-center items-center">
                            {token ?
                                (
                                    <ul>
                                        {
                                            headersLog.map((item, index) => {
                                                return (
                                                    <Link className="text-base mx-2 font-semibold text-white hover:underline hover:underline-offset-4 hover:font-semibold" href={item.path} key={index}>{item.name}</Link>
                                                )
                                            })
                                        }
                                    </ul>) :
                                (
                                    <ul>
                                        {
                                            headers.map((item, index) => {
                                                return (
                                                    <Link className="text-base mx-2 text-white font-semibold hover:underline hover:underline-offset-4 hover:" href={item.path} key={index}>{item.name}</Link>
                                                )
                                            })
                                        }
                                    </ul>)
                            }
                        </div>
                        <div className="flex justify-center items-center border px-6 py-3 border-white text-white rounded-full hover:scale-110 ease-in-out duration-300">
                            <Link href={'/login'} className="font-semibold text-base">
                                Connexion
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </header >
    )
}
