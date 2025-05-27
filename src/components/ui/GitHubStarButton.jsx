import { useEffect, useState } from 'react';
import { Github, Star } from 'lucide-react'; // ou ton icône source
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const GitHubStarButton = ({ user, repo }) => {
    const [stars, setStars] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/${user}/${repo}`);
                const data = await res.json();
                setStars(data.stargazers_count);
            } catch (error) {
                console.error("Erreur lors du chargement des étoiles GitHub :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStars();
    }, [user, repo]);

    const formatStars = (n) => {
        if (!n) return '0';
        return n.toLocaleString('en-US'); // Ex: 1234 → 1,234
    };

    return (
        <button
            onClick={() => navigate('/')}
            className="cursor-pointer hover:border-blue-600 text-black border border-zinc-950/5 hover:bg-zinc-50 transition duration-300 rounded-lg px-3 py-2 capitalize flex justify-center items-center gap-2"
        >
            <Github size={20} />
            <Star size={12} />
            <span className="text-sm font-light">GitHub</span>
            <span className="text-sm font-light">
                {loading ? '...' : formatStars(stars)}
            </span>
        </button>
    );
};
GitHubStarButton.propTypes = {
    user: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
};

export default GitHubStarButton;