'use client';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faTrophy, faCrown, faTablet, faMoneyCheckDollar, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
        <nav className="z-10 h-16 w-full sticky top-0 bg-white flex justify-between items-center px-5">
            <Link href={`/`} className="flex items-center gap-2.5">
                <Image alt="" width={44} height={44} src={`/Logo don sorteo.png`}></Image>
                <p className="text-xl text-orange-500">Don<span className="font-black">Sorteo</span></p>
            </Link>
            <main className="h-full font-medium flex gap-2 text-center items-center text-orange-500 transition-all">
                <Link href={`/#winners`} className="gap-2.5 p-2 flex items-center rounded-xl border border-transparent hover:bg-orange-100 hover:border-orange-200 transition-all">
                    <I icon={faCrown}></I>
                    <p>Ganadores</p>
                </Link>
                <section className="group relative">
                    <button className="gap-2.5 p-2 flex items-center  rounded-xl border border-transparent hover:bg-orange-100 hover:border-orange-200 transition-all">
                        <I icon={faTrophy}></I>
                        <p>Premios</p>
                    </button>
                    <span className="font-normal text-sm transition-all z-100  group-focus-within:opacity-100 opacity-0 group-focus-within:px-2.5 px-0 py-2.5 group-focus-within:w-80 overflow-hidden absolute gap-2.5 flex flex-col text-orange-600 top-[calc(100%_+_10px)] w-0 bg-white border border-orange-200 text-start right-0">
                        <Link className="p-2 flex items-center gap-2.5 hover:bg-orange-100 w-full truncate rounded-md hover:border-orange-200 border border-transparent" href={`/giveaway/amazon_gift_card_100`}>
                            <I icon={faMoneyCheckDollar}></I>
                            <p>Tarjeta Amazon 100€</p>
                        </Link>
                        <Link className="p-2 flex items-center gap-2.5 hover:bg-orange-100 w-full truncate rounded-md hover:border-orange-200 border border-transparent" href={`#!`}>
                            <I icon={faTablet}></I>
                            <p>Tablet Samsung</p>
                        </Link>
                        <Link className="p-2 flex items-center gap-2.5 hover:bg-orange-100 w-full truncate rounded-md hover:border-orange-200 border border-transparent" href={`#!`}>
                            <I icon={faMobile}></I>
                            <p>Móvil Samsung</p>
                        </Link>
                    </span>
                </section>
            </main>
        </nav>
    )
}