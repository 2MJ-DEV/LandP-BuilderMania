import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Computer } from 'lucide-react';
import GitHubStarButton from '../ui/GitHubStarButton';

export default function LandingPage() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                    <div className="flex items-center justify-center gap-2 hover:text-blue-600 transition duration-300">
                        <Computer className="" />
                        <span className="hidden lg:block">
                            <a href="/" className='lg:text-lg text-black'>BuilderMania</a>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">
                        <GitHubStarButton user="2MJ-DEV" repo="LandP-BuilderMania" className='' />
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="cursor-pointer py-2 px-6 hover:bg-blue-500 duration-300 active:scale-90 active:bg-blue-800 rounded-lg font-light border border-zinc-950/5 bg-blue-600 lg:text-sm text-xs text-white"
                    >
                        <span className='lg:text-sm font-light'>Get started</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
