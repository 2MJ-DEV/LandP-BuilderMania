import { Lightbulb, NotebookPen, Users, Computer } from "lucide-react";

export default function Issues() {
    const icons = [
        { component: Lightbulb, label: "Present your need in an instant", description: "Describe your MVP, your stack, or your product vision. In just a few clicks, your project will be visible to a community of experts." },
        { component: Users, label: "Receive qualified technical profiles", description: "In less than 48 hours, receive relevant proposals from developers, devOps, UI/UX designers or freelance project managers." },
        { component: NotebookPen, label: "Collaborate with the right profile", description: "Exchange, validate expertise and start your agile collaboration with complete confidence." },
        { component: Computer, label: "BuilderMania MVP", description: "MVP version of BuilderMania implemented to validate the idea, test the need." },
    ];

    return (
        <section className="bgCall mt-0">
            <div className="grid grid-cols-4 gap-4 justify-between w-[90vw] mx-auto items-center">
                {icons.map((icon, index) => {
                    const IconComponent = icon.component;
                    return (
                        <div key={index} className="mt-15 mb-15 h-53 w-full border border-zinc-950/5 bg-zinc-50 rounded-2xl p-1">
                            <div className="h-41 w-full bg-blue-200 rounded-2xl p-4 shadow-lg">
                                <div className="flex justify-start">
                                    <IconComponent className="size-6" aria-label={icon.label} />
                                </div>
                                <h2 className="mt-3 text-lg font-normal">{icon.label}</h2>
                                <p className="mt-2 text-sm text-gray-600 font-light">{icon.description}</p>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <span>good</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}