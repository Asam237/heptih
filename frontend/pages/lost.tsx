import { Poppins, Roboto } from "@next/font/google"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { AiFillAlert, AiFillHome, AiFillPhone, AiFillSetting, AiFillShop, AiOutlineFieldTime } from "react-icons/ai"
import { BiCheck, BiHelpCircle, BiNoEntry, BiSignal1, BiSignal2, BiSignal3, BiWon } from "react-icons/bi"
import { BsBuilding, BsShop } from "react-icons/bs"
import { Footer } from "../components/commons/footer.common"
import { Header } from "../components/commons/header.common"
import { Modal } from "../components/commons/modal.common"
import { WantedPosterType } from "../types"
import { findAllWantedPoster, getAllWantedPoster, updateWantedPoster } from "./api"


const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const bigShoulders = Roboto({ weight: "900", subsets: ['latin'] })
export default function Lost() {

    const queryClient = useQueryClient()
    const router = useRouter()
    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const token = cookie?.qwer?.token
    const [findObjet, setFindObjet] = useState(false)
    const [myId, setMyId] = useState("")
    const [commentaire, setConmmentaire] = useState("")
    const [city, setCity] = useState("")
    const { isLoading, error, data } = useQuery({
        queryKey: ["wantedposter"],
        queryFn: () => findAllWantedPoster(token)
    })

    const wantedposter = data?.wantedPosters || []

    const handleCancel = () => {
        setFindObjet(false)
    }

    const handleFind = async (e: any) => {
        e.preventDefault()
        let find = true
        let date = Date.now()
        const mywanted = await updateWantedPoster(myId, { find, date, commentaire, city })
        if (mywanted.status === 200) {
            await updateWantedPoster(myId, { find, date })
            router.push("/find")
        }

    }


    return (
        <div className={`${poppins.className}`}>
            <div className='bg-blue-900'>
                <div className="container mx-auto">
                    <Header />
                </div>
            </div>
            <main>
                <div className="container mx-auto">
                    {token ?
                        <div>
                            <section className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 w-full mt-8 lg:mt-16 lg:w-3/5 lg:justify-center lg:items-center mx-auto'>
                                <Link href={"/lost"} className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border  ${bigShoulders.className} ${window.location.pathname === "/lost" ? 'bg-blue-900 text-white' : 'border-blue-900 bg-white text-blue-900'} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BiNoEntry className="text-3xl mr-4" /> Perdus</Link>
                                <Link href={"/find"} className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border ${bigShoulders.className} ${window.location.pathname === "/find" ? 'bg-blue-900 text-white' : 'border-blue-900 bg-white text-blue-900'} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BiCheck className="text-3xl mr-4" /> Trouves</Link>
                                <Link href={"/objets"} className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border ${bigShoulders.className} ${window.location.pathname === "/objets" ? 'bg-blue-900 text-white' : 'border-blue-900 bg-white text-blue-900'} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BsShop className="text-3xl mr-4" /> Mes objets</Link>
                            </section>
                            <div className={`mt-3 text-xs  lg:w-3/5 mx-auto lg:mt-12 flex-col justify-center items-center flex`}>
                                <Link href={"/signal"} className={`w-full flex text-xs justify-center items-center py-2 border-blue-900 text-blue-900 tracking-[0.07em] border ${bigShoulders.className} rounded-full hover:scale-110 duration-300 ease-in-out my-auto`}><AiFillAlert className="text-3xl mr-4 text-blue-900" />Signaler un objet</Link>
                            </div>
                            <section className="py-14">
                                {
                                    wantedposter?.length > 0 ? <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                                        {
                                            wantedposter?.map((item: WantedPosterType, index: any) => {

                                                if (item?.find === false) {
                                                    return (
                                                        <div key={index} className="border px-4 py-8 rounded-md">
                                                            <h4 className={`text-xl lg:text-2xl lg:leading-relaxed text-blue-900 lg:tracking-[0.05em] ${bigShoulders.className}`}>{item.title}</h4>
                                                            <p className="pt-2 text-base text-gray-700">{item.description}</p>
                                                            <p className="pt-4 text-base text-gray-700 flex items-center"><AiFillPhone className="text-xl mr-3" />{item.phone}</p>
                                                            <p className="pt-4 text-base text-gray-700 flex items-center"><AiOutlineFieldTime className="text-xl mr-3" />{new Date(item.date).toLocaleDateString()}</p>
                                                            <button onClick={() => {
                                                                setMyId(item?._id)
                                                                setFindObjet(true)
                                                            }} className={`w-full flex text-sm justify-center mt-6 items-center px-8 py-3 tracking-[0.07em] border bg-blue-900 text-white ${bigShoulders.className} rounded-full w-3/4 mx-auto hover:scale-110 duration-300 ease-in-out my-auto`}><BsShop className="text-2xl mr-4 text-white" />Objet retrouve</button>
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
                        : <div className="flex justify-center items-center py-14 flex-col">
                            <AiFillSetting className="text-4xl lg:text-7xl text-blue-900" />
                            <p className="text-base lg:text-xl font-semibold text-gray-900 mt-4">Veuillez vous connecter pour continuer.</p>
                            <div className="mt-6 flex justify-center items-center border px-6 py-3 text-white rounded-full hover:scale-110 ease-in-out duration-300 bg-blue-900">
                                <Link href={'/login'} className="font-semibold text-base">
                                    Connexion
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </main >
            <Footer />
            {
                findObjet && (
                    <Modal
                        onClose={() => setFindObjet(false)}
                        title="Cet objet a t-il ete retrouve ?"
                    >
                        <p className='text-base py-2'>Veuillez remplir les Informations de celui qui a retrouve l'objet</p>
                        <div>
                            <p className='text-base py-1'>Telephone/Email</p>
                            <input onChange={(e) => setConmmentaire(e.target.value)} className='p-2 rounded-md bg-white border border-gray-400 w-full' />
                        </div>
                        <div className="mt-4">
                            <p className='text-base py-1'>Ville</p>
                            <input onChange={(e) => setCity(e.target.value)} className='p-2 rounded-md bg-white border border-gray-400 w-full' />
                        </div>
                        <div className="flex flex-row space-x-4 items-center justify-end my-6">
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                <button onClick={handleCancel} className="font-semibold text-sm">
                                    Annuler
                                </button>
                            </div>
                            <button onClick={async (e: any) => {
                                handleFind(e)
                                await setFindObjet(false)

                            }} className="bg-blue-900 px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">

                                Retrouver
                            </button>
                        </div>
                    </Modal>

                )
            }
        </div >
    )
}