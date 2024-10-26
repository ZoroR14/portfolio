export default function Nav(){
    return (
        <section className=" bg-black text-white sm:16 md:32 lg:48 xl:48">
            <h2>My Portfolio</h2>
            <nav>
                <ul className="flex justify-end list-none space-x-4">
                    <li><a href="">Sobre mi</a></li>
                    <li><a href="">Experiencia</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </section>
    )
}