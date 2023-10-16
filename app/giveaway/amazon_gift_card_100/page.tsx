export default function Page() {
    return (
        <main className="flex h-[calc(100vh_-_120px)] justify-end items-center p-5" style={{ backgroundImage: `url(https://donsorteo.com/wp-content/uploads/2023/08/fondo.jpg)` }}>
            <form className="flex flex-col gap-2.5 p-5 w-full text-white bg-pink-500/70 backdrop-blur-sm max-w-[700px] rounded-md border border-pink-200 shadow-lg">
                <section className="flex flex-col gap-1 ">
                    <label htmlFor="name" className="font-medium">Nombre</label>
                    <input required className="form-input border-0 focus:ring-0 p-2 text-pink-500 rounded-md ring-0 outline-none text-sm placeholder:text-pink-500" name="name" id="name" type="text" placeholder="Introduce tu nombre" />
                </section>
                <section className="flex flex-col gap-1">
                    <label htmlFor="lastname" className="font-medium">Apellido</label>
                    <input required className="form-input border-0 focus:ring-0  p-2 text-pink-500 rounded-md ring-0 outline-none text-sm placeholder:text-pink-500" name="lastname" id="lastname" type="text" placeholder="Introduce tu apellido" />
                </section>
                <section className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Correo electrónico</label>
                    <input required className="form-input border-0 focus:ring-0 p-2 text-pink-500 rounded-md ring-0 outline-none text-sm placeholder:text-pink-500" name="email" id="email" type="email" placeholder="Introduce tu correo electrónico" />
                </section>
                <section className="flex flex-col gap-1">
                    <label htmlFor="phone" className="font-medium">Número de teléfono</label>
                    <input required className="form-input border-0 focus:ring-0 p-2 text-pink-500 rounded-md ring-0 outline-none text-sm placeholder:text-pink-500" name="phone" id="phone" type="tel" placeholder="Introduce tu número de teléfono" />
                </section>
                <section className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Edad</label>
                    <select required className="form-select border-0 focus:ring-0 p-2 bg-white text-pink-500 rounded-md ring-0 outline-none text-sm placeholder:text-pink-500" name="" id="">
                        <option selected className="font-sans font-medium">Selecciona tu edad</option>
                        <option value="<25" className="font-sans font-medium">{"<25"}</option>
                        <option value="25-30" className="font-sans font-medium">{"25-30"}</option>
                        <option value="31-45" className="font-sans font-medium">{"31-45"}</option>
                        <option value="46-55" className="font-sans font-medium">{"46-55"}</option>
                        <option value="56-70" className="font-sans font-medium">{"56-70"}</option>
                        <option value=">70" className="font-sans font-medium">{">70"}</option>
                    </select>
                </section>
                <section className="flex flex-col gap-1">
                    <label htmlFor="cp" className="font-medium">Código postal</label>
                    <input required className="form-input border-0 focus:ring-0 p-2 text-pink-500 rounded-md ring-0 outline-none text-sm placeholder:text-pink-500" name="cp" id="cp" type="tel" placeholder="Introduce tu número postal" />
                </section>
                <section className="inline mt-5">
                    <label htmlFor="datatreatment" className="text-sm mr-2 font-medium">Acepto que mis datos sean tratados para su uso comercial por parte del titular de la web</label>
                    <input required type="checkbox" className="form-checkbox text-pink-600 ring-0 focus:ring-0  border-0 rounded" name="datatreatment" id="datatreatment" />
                </section>
                <section className="inline">
                    <label htmlFor="adult" className="text-sm mr-2 font-medium">Declaro ser mayor de 18 años</label>
                    <input required type="checkbox" className="form-checkbox text-pink-600 ring-0 focus:ring-0  border-0 rounded" name="adult" id="adult" />
                </section>
                <button className="px-4 py-2 bg-white  text-pink-500 mt-5 text-sm font-medium rounded-md w-fit mx-auto" type="submit">Participa ahora</button>
            </form>
        </main>
    )
}