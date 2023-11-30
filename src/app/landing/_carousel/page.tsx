"use client"
import { useState } from "react";
import HorizontalCard from "../(cards)/horizontal/page";
import VerticalCard from "../(cards)/vertical/page";

export default function Carousels() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, content: 'Slide 1', color: 'bg-gray-300' },
    { id: 2, content: 'Slide 2', color: 'bg-gray-400' },
    { id: 3, content: 'Slide 3', color: 'bg-gray-500' },
    // Agrega más slides según sea necesario
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const cardContent = [
    {
      title: "Congreso Internacional de Medicina Funcional",
      content: 'El evento educativo con mayor trayectoria en Latinoamérica para médicos y profesionales de la salud.',
    },
    {
      title: "La ciencia detrás de lo que hacemos",
      content: 'Somos creadores y creadoras de herramientas funcionales para propiciar y vivir el bienestar.',
    },
  ];

  return (
    <main className="w-full pt-40 px-40">
      <div className="flex justify-around w-full">
        <div>
          <HorizontalCard />
        </div>
        <div className="flex gap-5 flex-col">
          <div>
            <VerticalCard content={cardContent[0]} />
          </div>
          <div>
            <VerticalCard content={cardContent[1]} />
          </div>
        </div>
      </div>
      <div style={{ height: 700, marginTop: 20 }} className="relative w-full flex justify-center items-center overflow-hidden rounded-lg shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full flex items-center justify-center ${slide.color} transform ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-500 ease-in-out`}
          >
            <p className="text-xl font-bold">{slide.content}</p>
          </div>
        ))}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>

    </main>
  );
}
