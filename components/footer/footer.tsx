import Link from "next/link";

export default function Footer() {
    return (
        <nav className="h-14 bg-pink-600 mt-20 flex justify-between flex-wrap items-center p-5 text-sm text-white">
            <header>
                <p>© 2023 <Link href={`/`}>Don Sorteo.</Link> Todos los derechos reservados.</p>
            </header>
            <main className="flex gap-5 items-center">
                <Link className="underline decoration-2 hover:decoration-white decoration-transparent transition-all" href={`#!`}>Términos y condiciones</Link>
                <Link className="underline decoration-2 hover:decoration-white decoration-transparent transition-all" href={`#!`}>Política de Privacidad</Link>
                <Link className="underline decoration-2 hover:decoration-white decoration-transparent transition-all" href={`#!`}>Contacto</Link>
            </main>
        </nav>
    )
}