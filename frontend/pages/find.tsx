import { Poppins, Roboto } from "@next/font/google"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { useCookies } from "react-cookie"
import { AiFillAlert, AiFillHome, AiFillPhone, AiFillShop } from "react-icons/ai"
import { BiCheck, BiHelpCircle, BiNoEntry, BiSignal1, BiSignal2, BiSignal3, BiWon } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { Footer } from "../components/commons/footer.common"
import { Header } from "../components/commons/header.common"
import { WantedPosterType } from "../types"
import { findAllWantedPoster, getAllWantedPoster } from "./api"


const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const bigShoulders = Roboto({ weight: "900", subsets: ['latin'] })
export default function Find() {

    const queryClient = useQueryClient()
    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const token = cookie?.qwer?.token
    const { isLoading, error, data } = useQuery({
        queryKey: ["wantedposter"],
        queryFn: () => findAllWantedPoster(token)
    })

    const wantedposter = data?.wantedPosters || []

    return (
        <div className={`${poppins.className}`}>
            <div className='bg-blue-900'>
                <div className="container mx-auto">
                    <Header />
                </div>
            </div>
            <main>
                <div className="container mx-auto">
                    <section className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 w-full mt-8 lg:mt-16 lg:w-3/5 lg:justify-center lg:items-center mx-auto'>
                        <Link href={"/lost"} className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border  ${bigShoulders.className} ${window.location.pathname === "/lost" ? 'bg-blue-900 text-white' : 'border-blue-900 bg-white text-blue-900'} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BiNoEntry className="text-3xl mr-4" /> Perdus</Link>
                        <Link href={"/find"} className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border ${bigShoulders.className} ${window.location.pathname === "/find" ? 'bg-blue-900 text-white' : 'border-blue-900 bg-white text-blue-900'} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BiCheck className="text-3xl mr-4" /> Trouves</Link>
                        <Link href={"/objets"} className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border ${bigShoulders.className} ${window.location.pathname === "/objets" ? 'bg-blue-900 text-white' : 'border-blue-900 bg-white text-blue-900'} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BiCheck className="text-3xl mr-4" /> Mes objets</Link>
                    </section>
                    <section className="py-14">
                        {
                            wantedposter?.length > 0 ? <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                                {
                                    wantedposter?.map((item: WantedPosterType, index: any) => {
                                        if (item?.find === true) {
                                            return (
                                                <div key={index} className="border px-4 py-8 rounded-md">
                                                    <h4 className={`text-xl lg:text-2xl lg:leading-relaxed text-blue-900 lg:tracking-[0.05em] ${bigShoulders.className}`}>{item.title}</h4>
                                                    <p className="pt-2 text-base text-gray-700">{item.description}</p>
                                                    <p className="pt-4 text-base text-gray-700 flex items-center"><AiFillPhone className="text-xl" />{item.phone}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div> :
                                <div className="border px-4 py-8 rounded-xl">
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <h4 className={`uppercase text-2xl lg:text-4xl lg:leading-relaxed text-blue-900 lg:tracking-[0.05em] w-full font-extrabold text-center ${bigShoulders.className}`}>Vous n'avez pas d'objet !</h4>
                                        <div className="mt-6 lg:mt-12 flex flex-col justify-center items-center">
                                            <AiFillShop className="text-6xl lg:text-[10rem] text-blue-900" />
                                            <div className="mt-8 lg:mt-14">
                                                <Link href={"/signal"} className={`w-full flex text-xs justify-center lg:text-base items-center px-8 py-3 lg:py-5 tracking-[0.07em] border bg-blue-900 text-white ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><AiFillAlert className="text-3xl mr-4 text-white" />Signaler un objet</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </section>
                </div>
            </main>
            <Footer />
        </div >
    )
}