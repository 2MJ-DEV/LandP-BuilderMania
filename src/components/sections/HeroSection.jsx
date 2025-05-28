import { Rocket } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative lg:mt-27 overflow-hidden">
            {/* Décoration flottante */}
            <div className="absolute top-10 left-0 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-pulse -z-10" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl -z-10" />

            <div className="">
                <div className="flex flex-col w-[90vw] mx-auto py-30 px-4 lg:mb-15 gap-6 items-center justify-center lg:items-start lg:justify-start">

                    {/* Badge d'annoce */}
                    <div className="flex items-center gap-2 backdrop-blur-md shadow border border-blue-600/20 bg-blue-50 rounded-lg px-1.5 py-1">
                        <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-lg">
                            New
                        </span>
                        <span className="text-sm text-zinc-600 font-light">
                            BuilderMania is now available!
                        </span>
                        <Rocket />
                    </div>

                    {/* Titre */}
                    <h1 className="text-5xl sm:text-4xl lg:w-[60vw] text-[45px] md:text-5xl font-normal lg:text-[52px] text-prettylg:text-4xl text-pretty text-zinc-900 leading-tight">
                        Welcome to your platform that connects <span className="text-blue-600">Freelancers, Startups,</span> and Individuals.
                    </h1>

                    {/* Sous-titre */}
                    <p className="text-zinc-600 text-base sm:text-lg max-w-xl">
                        The preferred tool of <span className="font-semibold text-black">5,000+</span> users
                        for easily carrying out innovative projects.
                    </p>

                    {/* Bouton CTA */}
                    <div className="flex items-center gap-5">
                        <button className="cursor-pointer p-3 lg:p-2 capitalize text-sm bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 font-light hover:bg-blue-500 ring-1 ring-white/10 text-white rounded-lg hover:shadow-blue-600/70 w-full lg:w-max lg:px-10 border border-zinc-950/5 flex justify-center duration-500 active:scale-90 shadow-xl lg:shadow-2xl shadow-blue-600/10 lg:shadow-blue-600/30">
                            <span className='text-sm'>get started for free</span>
                        </button>
                        <button className="cursor-pointer capitalize p-3 lg:p-2 border border-zinc-950/5 flex items-center justify-center lg:px-10 hover:bg-zinc-950/5 rounded-lg active:scale-90 text-sm duration-300 w-full lg:w-max font-light">
                            <span className='text-sm'>get started</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}