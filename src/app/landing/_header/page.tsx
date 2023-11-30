import Link from "next/link"

export default function NavBar() {
  return (
    <header className="p-6 w-full bg-white shadow-lg">
  <div className="flex justify-between items-center">
    <div className="w-40 md:w-60">
      <img className="w-full h-auto" src="/img/logo.png" alt="logo-nutra-biotics" sizes="10" />
    </div>

    <div className="w-full hidden md:flex md:justify-around">
      <Link className="text-slate-600 transition-colors hover:text-violet-800" href="about">Inicio</Link>
      <Link className="text-slate-600 transition-colors hover:text-violet-800" href="about">Nosotros</Link>
      <Link className="text-slate-600 transition-colors hover:text-violet-800" href="about">Productos</Link>
    </div>

    <div className="flex justify-between">
      <button className="text-black rounded p-1 -ml-1 transition-colors hover:text-violet-500 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
      </button>
      <button className="text-black w-20 rounded p-1 transition-colors hover:bg-violet-500 hover:text-white mx-2">Logout</button>
      <button className="text-black rounded p-1 -ml-1 transition-colors hover:bg-violet-500 hover:text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </div>

  <div className="space-y-1 mt-4 border-t pb-3 pt-2 md:hidden">
    <Link className="text-black block rounded-md px-3 py-2 transition-colors hover:bg-violet-500 hover:text-white" href="about">Inicio</Link>
    <Link className="text-black block rounded-md px-3 py-2 transition-colors hover:bg-violet-500 hover:text-white" href="about">Nosotros</Link>
    <Link className="text-black block rounded-md px-3 py-2 transition-colors hover:bg-violet-500 hover:text-white" href="about">Productos</Link>
  </div>
</header>

  )
}