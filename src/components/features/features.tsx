import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface Feature13Props {
    heading?: string;
    features?: Feature[];
}

const Features = ({
    features = [
        {
            id: "feature-1",
            title: "Feature 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/abstract.jpg",
        },
        {
            id: "feature-2",
            title: "Feature 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/abstract.jpg",
        }, {
            id: "feature-3",
            title: "Feature 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/abstract.jpg",
        }, {
            id: "feature-4",
            title: "Feature 4",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/abstract.jpg",
        },
    ],
}: Feature13Props) => {
    return (
        <section className="my-16" id="servicos">
            <div className="container max-w-7xl text-center mx-auto bg-muted drop-shadow-2xl p-4 lg:p-10 rounded-xl">
                <p className="mb-4 text-primary">Built to cover your needs</p>
                <h2 className="text-3xl font-medium lg:text-4xl">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</h2>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex max-w-[260px] flex-col items-center gap-3 justify-between rounded-lg bg-transparent p-2"
                        >
                            <Image
                                width={400}
                                height={400}
                                src={feature.image}
                                alt={feature.title}
                                className="rounded-full size-36 object-cover"
                            />
                            <h3 className="text-xl">{feature.title}</h3>
                            <p className="text-sm opacity-70 text-balance">
                                {feature.description}
                            </p>
                            <Button className="px-10 mt-4" variant="default">
                                SAIBA MAIS
                                <ArrowRight />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features
