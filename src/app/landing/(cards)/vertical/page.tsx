'use client'

interface VerticalCardProps {
  content: {
    title: string;
    content: string;
  };
}
const VerticalCard: React.FC<VerticalCardProps> = ({ content }) => {
  
  return (
    <div className="flex h-full rounded-lg shadow-lg p-5 border bg-slate-50">
      <main className="flex-grow p-2 ">
        <article>
        <h2 className="text-slate-900 sm:text-1xl md:text-2xl  font-extrabold"> {content.title}</h2>
              <p className="text-slate-900 ">{content.content} </p>
        </article>
        <footer className="">
        <button className="text-purple-500 transition-all hover:text-slate-900 transform hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
      </footer>
      </main>
   </div>
  )
}

export default VerticalCard; 