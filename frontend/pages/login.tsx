import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
import { AiOutlineSend } from "react-icons/ai"
import { Poppins, Roboto } from "@next/font/google"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/router"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authLogin } from './api'
import { useCookies } from "react-cookie"
import { object, string, number, date, InferType } from 'yup';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const roboto = Roboto({ weight: "900", subsets: ['latin'] })

export default function Login() {


    const router = useRouter()
    const [cookies, setCookies] = useCookies(["qwer"])
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(false)
    const [password, setPassword] = useState("")
    let userSchema = object({
        email: string().email(),
        password: string().min(4).required(),
    });
    const data = { email, password }
    const queryClient = useQueryClient()
    const authMutation = useMutation({
        mutationFn: authLogin,
        mutationKey: ["auth"],
        onError: () => {
            setProgress(false)
            setLoading(true)
            router.push("/login")
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["auth"]
            })
            setProgress(false)
            await myauth(data)
            router.push("/dashboard")
        }
    })
    const handlerAuth = async (e: any) => {
        e.preventDefault()
        setProgress(true)
        await authMutation.mutate(data)

    }
    const myauth = async (data: any) => {
        const auth = await authLogin(data)
        const user: any = auth?.data
        setCookies("qwer", user, { secure: true })
    }

    return (
        <>
            <Head>
                <title>Heptih  |  Connexion</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <main className={`py-16 ${poppins.className}`}>
                    <div className="container mx-auto">
                        <div className='flex flex-col justify-center items-center'>
                            <AiOutlineSend size={60} className='text-blue-900' />
                            <h1 className={`text-base lg:text-2xl text-gray-900 font-medium leading-tight py-4 ${roboto.className} tracking-[0.07em]`}>
                                Connectez-vous sur Hepthi
                            </h1>
                            <form onSubmit={handlerAuth}>
                                <div className='max-w-md bg-gray-50 px-8 py-6 border'>
                                    <div>
                                        <p className='text-base py-1'>Adresse Email</p>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex justify-between items-center py-1'>
                                            <p className='text-base'>Mot de passe</p>
                                            <Link href={""} className='text-sm text-blue-500'>Mot de passe oublie?</Link>
                                        </div>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                    </div>
                                    <div className='mt-4 flex justify-center items-center'>
                                        <button type='submit' className='text-base text-white bg-blue-900 rounded-md py-2 w-full'>
                                            {progress ? 'chargement...' : 'connexion'}
                                        </button>
                                    </div>
                                    {loading && (
                                        <div className='pt-4'>
                                            <p className='text-sm text-red-600 font-medium text-center'>Informations incorrectes</p>
                                        </div>
                                    )}
                                </div>
                                <div className='max-w-sm p-4 mt-6'>
                                    <div className='flex justify-center items-center'>
                                        <p className='text-sm py-1 text-center'>Nouveau sur Heptih ? <Link className='text-blue-900 font-medium' href={"/create"}>Creer un compte.</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        </>
    )
}
