'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function ListLinks() {
  const router = useRouter();

  const handleButtonClick = (type: number) => {
    switch (type) {
      case 0:
        router.push('/landing/icogedron');
        break;
      case 1:
        router.push('/landing/box');
        break;
      case 2:
        router.push('/landing/cone');
        break;
    }


  };
  return (
    <>

      <main className=" w-full py-20 px-40">
        <h1 className="text-black text-center mb-10  sm:text-1xl md:text-2xl  font-extrabold"> Three<span className="text-purple-500">Js</span></h1>
        <section className="flex justify-around">
          <div className=" rounded-xl shadow-xl bg-white p-6 w-80 flex justify-around items-center">
            <Link className="text-black  font-extrabold" href="landing\icogedron">Icogedron</Link>
            <button className="text-purple-500 transition-all hover:text-slate-900 transform hover:translate-x-1" onClick={() => handleButtonClick(0)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
          <div className="rounded-xl shadow-xl bg-white p-6 w-80 flex justify-around items-center ">
            <Link className="text-black  font-extrabold" href="landing\box">Box</Link>
            <button className="text-purple-500 transition-all hover:text-slate-900 transform hover:translate-x-1" onClick={() => handleButtonClick(1)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
          <div className="rounded-xl shadow-xl bg-white p-6 w-80 flex justify-around items-center">
            <Link className="text-black  font-extrabold" href="landing\cone">Cone</Link>
            <button className="text-purple-500 transition-all hover:text-slate-900 transform hover:translate-x-1" onClick={() => handleButtonClick(2)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </section>
      </main>

    </>
  )
}