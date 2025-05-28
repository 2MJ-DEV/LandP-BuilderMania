// import {  } from 'lucide-react';
import PropTypes from 'prop-types';

const Footer = ({ copyright, contact, contactDescript, Privacy, Terms, right }) => {
    return (
        <footer className="bg-zinc-950/5">
            {/* Copyright */}
            <div className="flex justify-between items-center w-[80vw] mx-auto py-5">
                <div className="text-xs flex justify-center items-center gap-2">
                    <span className="">{copyright}</span>
                    <span>|</span>
                    <span className="">{right}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <span className='text-xs'>{contactDescript}
                        <a href="mailto:julesmukadi.dev@gmail.com" className='underline'>{contact}</a>
                    </span>
                    <span>|</span>
                    <span className='text-xs'>
                        <a href="#" className='underline'>{Privacy}</a>
                    </span>
                    <span>|</span>
                    <span className='text-xs'>
                        <a href="#" className='underline'>{Terms}</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
    community: PropTypes.arrayOf(PropTypes.string).isRequired,
    newsletter: PropTypes.shape({
        description: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
    }).isRequired,
    copyright: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    contactDescript: PropTypes.string.isRequired,
    Privacy: PropTypes.func.isRequired,
    Terms: PropTypes.func.isRequired,
    right: PropTypes.func.isRequired,
};

export default function App() {
    return (
        <Footer
            resources={["Documents", "Fortuits", "Blog", "Virtine"]}
            community={["Github", "X (Twitter)"]}
            newsletter={{
                description: "Restez informé des actualités de buildermania, notamment des nouvelles versions, des événements, etc.",
                contact: "contact@buildermania.com",
            }}
            copyright="&copy; By Jules MUKADI"
            right="All rights reserved."
            contact=" here"
            contactDescript="Contact support  "
            Privacy="Privacy Police"
            Terms="Terms"
        />
    );
}