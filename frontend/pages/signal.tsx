import { Poppins, Roboto } from "@next/font/google"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { BsPlus } from "react-icons/bs"
import { Footer } from "../components/commons/footer.common"
import { Header } from "../components/commons/header.common"
import { createWantedPoster } from "./api"

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const bigShoulders = Roboto({ weight: "900", subsets: ['latin'] })

export default function Signal() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(false)
    const router = useRouter()
    const queryClient = useQueryClient()
    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const userId = cookie?.qwer?.user?._id
    const data: any = { title, description, phone, user: userId }
    const signalMutation = useMutation({
        mutationFn: createWantedPoster,
        mutationKey: ["wantedposter"],
        onError: () => {
            setProgress(false)
            setLoading(true)
            router.push("/signal")
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["wantedposter"]
            })
            setProgress(false)
            router.push("/dashboard")
        }
    })

    const handlerAddWantedPoster = async (e: any) => {
        e.preventDefault()
        setProgress(true)
        await signalMutation.mutate(data)
    }

    return (

        <div className={`${poppins.className}`}>
            <div className='bg-blue-900'>
                <div className="container mx-auto">
                    <Header />
                </div>
            </div>
            <main>
                <div className="container mx-auto py-14">

                    <form onSubmit={handlerAddWantedPoster}>
                        <div className='bg-gray-50 px-8 py-6 border'>
                            <div>
                                <p className='text-base py-1'>Title</p>
                                <input type="text" onChange={(e) => setTitle(e.target.value)} className='px-2 rounded-md py-4 bg-white border w-full' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-base py-1'>Telephone</p>
                                <input type="text" onChange={(e) => setPhone(e.target.value)} className='px-2 rounded-md py-4 bg-white border w-full' />
                            </div>
                            <div className='mt-4'>
                                <div className='flex justify-between items-center py-1'>
                                    <p className='text-base'>Description</p>
                                </div>
                                <textarea cols={4} rows={6} onChange={(e) => setDescription(e.target.value)} className='px-2 rounded-md bg-white border w-full' />
                            </div>
                            <div className='mt-8 flex justify-center items-center lg:w-3/5 mx-auto'>
                                <button type='submit' className={`w-full flex text-center text-xs justify-center lg:text-base items-center px-8 py-3 lg:py-5 tracking-[0.07em] border bg-blue-900 text-white ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BsPlus className="text-3xl hidden lg:flex mr-4 text-white" />Ajouter mon annonce</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}