import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CallToAction = ({ label, highlight, description }) => {
    const navigate = useNavigate();
    return (
        <section className="">
            <div className="">
                <div className="flex flex-col items-center justify-center w-[80vw] mx-auto mb-25 mt-16 p-8 bg-white rounded-lg border-1 border-zinc-950/5 shadow">
                    <div className="relative w-20 h-20">
                        <div className="w-20 h-20 bg-zinc-950/5 rounded-full flex items-center justify-center">

                        </div>
                    </div>
                    <div className="flex flex-col mb-6 mt-6">
                        <div className="">
                            <h2 className="text-3xl text-center font-normal text-gray-900">
                                {label}
                                <span className="text-blue-600">{highlight}</span>
                            </h2>
                            <p className='w-[50vw] mx-auto text-center text-gray-600 mt-4'>{description}</p>
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            <div className="">

                                <button
                                    onClick={() => navigate('/')}
                                    className="cursor-pointer py-2 px-6 hover:bg-blue-500 duration-300 active:scale-90 active:bg-blue-800 rounded-lg font-light border border-zinc-950/5 bg-blue-600 text-sm text-white"
                                >
                                    <span className='text-sm font-light capitalize'>get started now</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

CallToAction.propTypes = {
    label: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
};

// Exemple d’utilisation dans le même fichier
export default function CallToActionWrapper() {
    const handleFreeTrialClick = () => {
        alert("Free Trial clicked!");
    };

    return (
        <CallToAction
            label="Ready to bring your digital projects to"
            highlight=" life ?"
            description="Create, collaborate, and innovate with skilled professionals. BuilderMania connects you with top tech talent, no matter the size of your idea."
            builderM=""
            buttonText="Get started"
            onButtonClick={handleFreeTrialClick}
        />
    );
}