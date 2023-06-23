import { Poppins, Roboto } from '@next/font/google'
import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
import { Header } from '../components/commons/header.common'
import { Item } from '../components/commons/item.common'
import { AiFillCreditCard, AiFillTag, AiOutlineUser, } from "react-icons/ai"
import { BiAtom, BiCloud } from "react-icons/bi"
import { BsBook, BsSafe } from "react-icons/bs"
import Link from 'next/link'
const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const bigShoulders = Roboto({ weight: "900", subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Vous avez perdu un objet ? Heptih référence tous les objets perdus et trouvés dans des lieux partenaires. Déposez une annonce !</title>
        <meta name="description" content="Save Link" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${poppins.className}`}>
        <div className='bg-blue-900'>
          <div className="container mx-auto">
            <Header />
            <div className='py-14 lg:py-28 flex flex-col lg:flex-row'>
              <div className='w-full lg:w-3/5'>
                <h1 className={`uppercase text-2xl lg:text-4xl lg:leading-relaxed text-white lg:tracking-[0.05em] w-full lg:w-5/6 font-extrabold ${bigShoulders.className}`}>
                  un objet perdu se transforme souvent en objet trouve !
                </h1>
                <p className='py-4 lg:py-14 text-gray-300 text-base lg:text-xl font-semibold lg:leading-relaxed'>Vous avez perdu ou trouvé un objet ? <br />
                  Déclarez-le et la communauté se mobilise pour vous aider à le retrouver.</p>
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 w-full mt-4'>
                  <Link href={"/lost"} className={`w-full flex justify-center items-center px-8 py-5 tracking-[0.07em] bg-blue-900 ${bigShoulders.className} text-white rounded-full uppercase hover:scale-110 duration-300 ease-in-out border`}>j'ai perdu</Link>
                  <Link href={"/find"} className={`w-full flex justify-center items-center px-8 py-5 tracking-[0.07em] bg-white text-gray-900 ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out`}>j'ai trouve</Link>
                </div>
              </div>
              <div className='w-full lg:w-2/6'>
              </div>
            </div>
          </div>
        </div>
        <main className='py-16 lg:py-40'>
          <div className="container mx-auto">
            <section>
              <h1 className={`uppercase text-2xl lg:text-5xl leading-10 text-gray-700 tracking-[0.07em] font-extrabold ${bigShoulders.className} text-center`}>
                comment heptih vous aide ?
              </h1>
              <p className='py-4 lg:py-8 text-gray-700 text-base lg:text-xl font-semibold text-center'>Trop facile de retrouver un objet</p>
              <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10'>
                <Item icon={<BsBook size={36} className="text-blue-900" />} title="Déclarez un objet perdu ou un objet trouvé" description='Remplissez le formulaire de déclaration en donnant un maximum de détails (sur le lieu de perte, le type de l’objet, sa description) pour aider l’algorithme à l’identifier rapidement' />
                <Item icon={<AiOutlineUser size={36} className="text-blue-900" />} title="Prouvez la propriété de votre objet" description='Une fois l’objet perdu « matché », prouvez qui vous êtes grâce à une question de sécurité (ex : décrivez la coque de votre téléphone, …). Ainsi, notre partenaire qui a retrouvé cet objet pourra valider sereinement qu’il s’agit de votre objet' />
                <Item icon={<AiFillCreditCard size={36} className="text-blue-900" />} title="Récupérez-le !" description='Dès que vous êtes authentifié, vous recevez les informations pour passer le récupérer ou vous faire livrer. Pensez à bien communiquer le numéro de référence trouvé' />
              </div>
            </section>
            <section className='py-16 lg:py-40'>
              <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10'>
                <div className='w-full'>

                  <h4 className="pt-8 uppercase lg:pt-12 text-gray-700 text-2xl lg:text-4xl font-semibold flex justify-center items-center text-center">
                    complet comme jamais !
                  </h4>
                </div>
                <div className='w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center'>
                  <BiAtom className="text-blue-900 text-6xl lg:text-9xl" />
                  <p className='text-base lg:text-lg text-gray-500 text-center lg:text-left lg:ml-4'>
                    Un algorithme de matching pour vous aider à identifier les correspondances dans la base de données rapidement et sans chercher
                  </p>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 mt-4'>
                <div className='w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center'>
                  <BiCloud className="text-blue-900 text-6xl lg:text-9xl" />
                  <p className='text-base lg:text-lg text-gray-500 text-center lg:text-left lg:ml-4'>
                    Heptih agrège de manière sécurisée tous les objets perdus et trouvés par sa communauté en France et dans le Monde
                  </p>
                </div>
                <div className='w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center'>
                  <BsSafe className="text-blue-900 text-6xl lg:text-9xl" />
                  <p className='text-base lg:text-lg text-gray-500 text-center lg:text-left lg:ml-4'>
                    Une interface vous permet de retrouver et gérer vos dernières déclarations en quelques clics : du signalement de la perte, jusqu'à sa livraison
                  </p>
                </div>
              </div>
            </section>
            <section className='py-16 lg:py-40'>
              <h1 className={`text-xl lg:text-3xl leading-10 text-gray-700 tracking-[0.07em] font-extrabold ${bigShoulders.className} text-center`}>
                Signalez votre objet !
              </h1>
              <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 w-full mt-8 lg:mt-16 lg:w-3/5 lg:justify-center lg:items-center mx-auto'>
                <Link href={"/lost"} className={`w-full flex justify-center items-center px-8 py-5 tracking-[0.07em] bg-blue-900 ${bigShoulders.className} text-white rounded-full uppercase hover:scale-110 duration-300 ease-in-out`}>j'ai perdu</Link>
                <Link href={"/find"} className={`w-full flex justify-center items-center px-8 py-5 tracking-[0.07em] border border-gray-800 bg-white text-gray-900 ${bigShoulders.className} rounded-full uppercase hover:scale-110 duration-300 ease-in-out`}>j'ai trouve</Link>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}