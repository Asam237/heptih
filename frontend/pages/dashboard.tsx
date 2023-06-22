import { Poppins, Roboto } from "@next/font/google"
import { AiFillAlert, AiFillHome, AiFillShop } from "react-icons/ai"
import { BiHelpCircle, BiSignal1, BiSignal2, BiSignal3 } from "react-icons/bi"
import { Footer } from "../components/commons/footer.common"
import { Header } from "../components/commons/header.common"


const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const bigShoulders = Roboto({ weight: "900", subsets: ['latin'] })
export default function Dashboard() {
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
                        <button className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border border-blue-900 bg-white text-blue-900 ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><AiFillHome className="text-3xl mr-4 text-blue-900" /> Accueil</button>
                        <button className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border border-blue-900 bg-white text-blue-900 ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><AiFillShop className="text-3xl mr-4 text-blue-900" /> Mes objets</button>
                        <button className={`w-full flex justify-center items-center text-xs lg:text-sm px-8 py-3 lg:py-5 tracking-[0.07em] border border-blue-900 bg-white text-blue-900 ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><BiHelpCircle className="text-3xl mr-4 text-blue-900" /> Aide</button>
                    </section>
                    <section className="py-14">
                        <div className="border px-4 py-8 rounded-xl">
                            <div className="flex flex-col justify-center items-center w-full">
                                <h4 className={`uppercase text-2xl lg:text-4xl lg:leading-relaxed text-blue-900 lg:tracking-[0.05em] w-full font-extrabold text-center ${bigShoulders.className}`}>Vous n'avez pas d'objet !</h4>
                                <div className="mt-6 lg:mt-12 flex flex-col justify-center items-center">
                                    <AiFillShop className="text-6xl lg:text-[10rem] text-blue-900" />
                                    <div className="mt-8 lg:mt-14">
                                        <button className={`w-full flex text-xs justify-center lg:text-base items-center px-8 py-3 lg:py-5 tracking-[0.07em] border bg-blue-900 text-white ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out my-auto`}><AiFillAlert className="text-3xl mr-4 text-white" />Signaler un objet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div >
    )
}