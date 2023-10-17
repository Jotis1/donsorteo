"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [carrousel, setCarrousel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carrousel === 2) {
        setCarrousel(0);
      } else {
        setCarrousel(carrousel + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [carrousel]);

  return (
    <main className="flex flex-col gap-10 p-2 my-2">
      <section
        className="font-medium mx-auto text-center flex bg-neutral-600/60 flex-wrap gap-5 shadow-md items-center justify-around text-white bg-cover bg-center relative max-w-[1500px] w-full min-h-[400px] rounded-md p-10">
        {carrousel == 0 ? (
          <section className="z-[1] animate-fadeInOut flex-grow flex flex-col justify-center items-center gap-2.5">
            <p className="text-4xl font-black">Sorteo Tarjeta Amazon 100€</p>
            <p className="text-pink-100">Inscríbete en aquí y gana una tarjeta regalo de Amazon valorada en 100€</p>
            <Link href={`/amazon_gift_card_100`} className="bg-pink-600 px-4 py-2 text-white w-fit mt-10 rounded-md hover:bg-white hover:text-pink-600 transition-all">Participa ahora</Link>
            <span className="absolute -z-[1] bg-neutral-600/60 w-full h-full"></span>
            <Image alt="fondo 1" className="-z-[2]" fill objectFit="cover" src={`/Fondo1.png`}></Image>
          </section>
        ) : carrousel == 1 ? (
          <header className="z-[1] animate-fadeInOut flex-grow flex flex-col justify-center items-center gap-2.5">
            <p className="text-4xl font-black">Sorteo Samsung Galaxy M13</p>
            <p className="text-pink-100">Inscríbete en aquí y gana un móvil Samsung Galaxy M13 valorado en +200€</p>
            <Link href={`/amazon_gift_card_100`} className="bg-pink-600 px-4 py-2 text-white w-fit mt-10 rounded-md hover:bg-white hover:text-pink-600 transition-all">Participa ahora</Link>
            <span className="absolute -z-[1] bg-neutral-600/60 w-full h-full"></span>
            <Image alt="fondo 2" className="-z-[2]" fill objectFit="cover" src={`/Fondo2.png`}></Image>
          </header>
        ) : carrousel == 2 && (
          <div className="z-[1] animate-fadeInOut flex-grow flex flex-col justify-center items-center gap-2.5">
            <p className="text-4xl font-black">Sorteo Tablet Facetel</p>
            <p className="text-pink-100">Inscríbete en aquí y gana una tablet Facetel valorada en +200€</p>
            <Link href={`/amazon_gift_card_100`} className="bg-pink-600 px-4 py-2 text-white w-fit mt-10 rounded-md hover:bg-white hover:text-pink-600 transition-all">Participa ahora</Link>
            <span className="absolute -z-[1] bg-neutral-600/60 w-full h-full"></span>
            <Image alt="fondo 3" className="-z-[2]" fill objectFit="cover" src={`/Fondo3.png`}></Image>
          </div>
        )}
        <section className="absolute z-[11] bottom-0 p-2.5 flex items-center justify-center w-full gap-2.5">
          <button onClick={() => setCarrousel(0)} className={`${carrousel == 0 ? "w-12" : "w-4"} transition-all h-4 rounded-full bg-white`}></button>
          <button onClick={() => setCarrousel(1)} className={`${carrousel == 1 ? "w-12" : "w-4"} transition-all h-4 rounded-full bg-white`}></button>
          <button onClick={() => setCarrousel(2)} className={`${carrousel == 2 ? "w-12" : "w-4"} transition-all h-4 rounded-full bg-white`}></button>
        </section>
      </section>
      <section>
        <header className="text-center mb-10 text-orange-500">
          <p className="text-4xl font-black ">Sorteos</p>
          <p className="text-sm font-medium">Estos son los sorteos activos, ¡participa para ganar!</p>
        </header>
        <section className="flex py-2 gap-5 justify-center flex-wrap">
          <Link href={`/giveaway/amazon_gift_card_100`} className="flex gap-2.5 flex-col min-w-[320px] text-orange-500 font-medium p-2.5 rounded-md bg-white hover:bg-orange-100 transition-all border-orange-300 border">
            <section className="w-full h-40 bg-orange-400 rounded-md"></section>
            <header className="flex-grow text-center">
              <p className="font-bold">Tarjeta de Amazon de 100€</p>
            </header>
          </Link>
          <Link href={`#!`} className="flex gap-2.5 flex-col min-w-[320px] text-orange-500 font-medium p-2.5 rounded-md bg-white hover:bg-orange-100 transition-all border-orange-300 border">
            <section className="w-full h-40 bg-orange-400 rounded-md"></section>
            <header className="flex-grow text-center">
              <p className="font-bold">Móvil Samsung Galaxy</p>
            </header>
          </Link>
          <Link href={`#!`} className="flex gap-2.5 flex-col min-w-[320px] text-orange-500 font-medium p-2.5 rounded-md bg-white hover:bg-orange-100 transition-all border-orange-300 border">
            <section className="w-full h-40 bg-orange-400 rounded-md"></section>
            <header className="flex-grow text-center">
              <p className="font-bold">Tablet Samsung Galaxy</p>
            </header>
          </Link>
        </section>
      </section>
      <section id="winners" className="max-w-[1000px] w-full mx-auto mb-10">
        <header className="text-center mb-10">
          <p className="text-4xl font-black text-pink-600">Ganadores</p>
          <p className="text-sm text-pink-500 font-medium">Aquí podrás ver todos los ganadores de sorteos anteriores</p>
        </header>
        <section className="flex items-center gap-2.5 justify-center flex-wrap">
          <section className="flex flex-col items-center gap-2.5 p-5">
            <figure className="w-32 h-32 bg-pink-500 rounded-full"></figure>
            <header className="text-center">
              <p className="text-xl text-pink-600 font-bold">Juan Manuel Cuellar</p>
              <p className="text-sm text-pink-600 font-medium">Ganador del Samsung Galaxy M13</p>
            </header>
          </section>
          <section className="flex flex-col items-center gap-2.5 p-5">
            <figure className="w-32 h-32 bg-pink-500 rounded-full"></figure>
            <header className="text-center">
              <p className="text-xl text-pink-600 font-bold">Juan Manuel Cuellar</p>
              <p className="text-sm text-pink-600 font-medium">Ganador del Samsung Galaxy M13</p>
            </header>
          </section>
          <section className="flex flex-col items-center gap-2.5 p-5">
            <figure className="w-32 h-32 bg-pink-500 rounded-full"></figure>
            <header className="text-center">
              <p className="text-xl text-pink-600 font-bold">Juan Manuel Cuellar</p>
              <p className="text-sm text-pink-600 font-medium">Ganador del Samsung Galaxy M13</p>
            </header>
          </section>
          <section className="flex flex-col items-center gap-2.5 p-5">
            <figure className="w-32 h-32 bg-pink-500 rounded-full"></figure>
            <header className="text-center">
              <p className="text-xl text-pink-600 font-bold">Juan Manuel Cuellar</p>
              <p className="text-sm text-pink-600 font-medium">Ganador del Samsung Galaxy M13</p>
            </header>
          </section>
          <section className="flex flex-col items-center gap-2.5 p-5">
            <figure className="w-32 h-32 bg-pink-500 rounded-full"></figure>
            <header className="text-center">
              <p className="text-xl text-pink-600 font-bold">Juan Manuel Cuellar</p>
              <p className="text-sm text-pink-600 font-medium">Ganador del Samsung Galaxy M13</p>
            </header>
          </section>
          <section className="flex flex-col items-center gap-2.5 p-5">
            <figure className="w-32 h-32 bg-pink-500 rounded-full"></figure>
            <header className="text-center">
              <p className="text-xl text-pink-600 font-bold">Juan Manuel Cuellar</p>
              <p className="text-sm text-pink-600 font-medium">Ganador del Samsung Galaxy M13</p>
            </header>
          </section>
        </section>
      </section>
    </main>
  )
}
