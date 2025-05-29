import PropTypes from 'prop-types';
import { SquareCheckBig, DollarSign, Minus } from 'lucide-react';

function PricingCard({ title, price, features, descript, duration, submitBtn, isFeatured }) {
    return (
        <div
            className={`rounded-2xl p-3 flex flex-col justify-between max-w-sm w-full transition shadow-sm hover:shadow-md 
            ${isFeatured ? 'bg-zinc-100 text-black border-4 border-white scale-[1.02]' : 'border border-zinc-950/5 bg-white text-zinc-900'}`}
        >
            <div className="flex flex-col flex-grow">
                
                <div className={`rounded-lg p-3 ${isFeatured ? 'bg-white border border-white/20' : 'border border-zinc-950/5'}`}>
                    <h2 className="text-xl font-bold mb-2 capitalize">{title}</h2>
                    <p className={`text-sm ${isFeatured ? 'text-black' : 'text-zinc-600'}`}>{descript}</p>
                </div>
                <div className="mt-4 flex-grow flex flex-col">
                    <p className="text-2xl font-semibold flex items-center gap-1 mb-3">
                        <DollarSign />{price} <span className="font-light text-sm">/ {duration}</span>
                    </p>
                    <hr className={`mb-3 w-[10vw] ${isFeatured ? 'border-zinc-950/10' : 'border-zinc-950/5'}`} />
                    <ul className="mb-6 space-y-2">
                        {features.map((feature, idx) => (
                            <li className="flex items-center gap-2" key={idx}>
                                <SquareCheckBig size={18} /> <span className='text-sm font-light'>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className={`mb-3 ${isFeatured ? 'border-zinc-950/10' : 'border-zinc-950/5'}`} />
            <button className={`${isFeatured? 'bg-black text-white text-sm hover:bg-zinc-700 cursor-pointer transition duration-300' : ''} py-2 px-4 cursor-pointer text-sm hover:bg-zinc-100 transition duration-300 rounded-lg flex items-center justify-center gap-3`}>
                {submitBtn} <Minus className='' />
            </button>
        </div>
    );
}

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    descript: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    submitBtn: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
};

export default PricingCard;