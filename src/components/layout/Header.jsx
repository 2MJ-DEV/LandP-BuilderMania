import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Computer } from 'lucide-react';
import GitHubStarButton from '../ui/GitHubStarButton'; // Assurez-vous que le chemin est correct

export default function LandingPage() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // active le blur si scroll > 10px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // clean
    }, []);

    return (
        <header
            id="navbar"
            className={`fixed top-1 left-1 w-full z-50 rounded-lg border-1 border-zinc-950/5 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-md shadow-md'
                : 'bg-white/50 backdrop-blur-0'
                }`}
        >
            <div className="flex justify-between items-center lg:w-[90vw] mx-auto py-2 px-5">
                <div className="flex items-center gap-16">
                    <div className="flex items-center gap-2">
                        <Computer className="" />
                        <span className="">
                            <a href="/" className='text-lg'>BuilderMania</a>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* <button
                        onClick={() => navigate('/')}
                        className="cursor-pointer hover:border-blue-600 text-black border border-zinc-950/5 hover:bg-zinc-50 transition duration-300 rounded-lg px-3 py-2 capitalize flex justify-center items-center gap-2">
                        <Github size={20} /><Star size={12} />
                        <span className='text-sm font-light'>Github</span>
                        <span className='text-sm font-light'>10, 120</span>
                    </button> */}
                    <GitHubStarButton user="2MJ-DEV" repo="LandP-BuilderMania" />

                    <button
                        onClick={() => navigate('/')}
                        className="cursor-pointer py-2 px-6 hover:bg-blue-500 duration-300 active:scale-90 active:bg-blue-800 rounded-lg font-light border border-zinc-950/5 bg-blue-600 text-sm text-white"
                    >
                        <span className='text-sm font-light'>Get started</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
