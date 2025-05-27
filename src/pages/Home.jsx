import Header from "../components/layout/Header.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import Issues from "../components/sections/Issues.jsx";
import Pricing from "../components/sections/Pricing/Pricing.jsx";
import Faq from "../components/sections/Faq.jsx";
import CallToAction from "../components/sections/CallToAction.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {

    return (
        <section className="font">
            <Header />
            <HeroSection />
            <Issues />
            <Pricing />
            <Faq />
            <CallToAction />
            <Footer />
        </section>
    );
}