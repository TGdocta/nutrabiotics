export default function HorizontalCard(){
  return (
    <div className="flex flex-col h-full rounded-xl shadow-xl p-5 border bg-slate-50 mr-5">
      <main className="flex-grow p-2 ">
        <article>
          <h2 className="text-slate-900 sm:text-1xl md:text-2xl  font-extrabold">Quienes <span className="text-purple-500">Somos</span></h2>
          <p className="text-slate-900 ">Somos creadores y creadoras de herramientas funcionales para propiciar y vivir el bienestar.</p>
        </article>
      </main>
      <footer className="p-2">
        <button className="text-purple-500 transition-all hover:text-slate-900 transform hover:translate-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </footer>
    </div>

  )
}

//text-slate-900 text-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold dark:text-whit