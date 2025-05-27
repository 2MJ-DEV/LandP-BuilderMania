import PricingCard from './PricingCard';

export default function Pricing() {
    const plans = [
        {
            title: 'free',
            price: '0',
            duration: 'per month',
            descript: 'Ideal for getting started and testing the platform without commitment. Perfect for beginner freelancers.',
            features: ['1 active project/month', '3 proposals sent', 'Simplified dashboard'],
            submitBtn: 'Get started for',
        },
        {
            title: 'starter',
            price: '0',
            duration: 'per month',
            descript: 'For freelancers who want to grow, manage multiple projects and gain visibility.',
            features: ['Up to 3 active projects', 'Unlimited proposals', 'Professional portfolio', 'Direct messaging with clients'],
            submitBtn: 'Get started for',
        },
        {
            title: 'pro',
            price: '0',
            duration: 'per month',
            descript: 'Designed for professionals who want to maximize their impact, trust and revenue on the platform.',
            features: ['Direct messaging with clients', 'Verified Pro badge', 'Priority support', 'Advanced statistics', 'Increased visibility on the platform'],
            submitBtn: 'Get started for',
        },
    ];

    return (
        <section className=''>
            <div className="grid md:grid-cols-3 gap-3 w-[70vw] mx-auto py-16 items-stretch">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index} {...plan}
                        isFeatured={index === 1}
                    />
                ))}
            </div>
        </section>
    );
}