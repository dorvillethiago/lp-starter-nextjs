import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface InformationProps {
    imageSrc: string;
    badgeText?: string;
    title: string;
    description: string[];
    invert?: boolean;
    reverse?: boolean;
    className?: string;
    callToAction?: {
        jsx: React.ReactNode;
        href: string;
    },
    id?: string;
}

const Information: React.FC<InformationProps> = ({
    callToAction,
    imageSrc,
    badgeText,
    title,
    description,
    invert = false,
    reverse = false,
    id,
}) => {
    return (
        <div id={id} className={cn({
            "bg-background": !invert,
            "bg-primary": invert,
        })}>
            <div
                className={`container py-20 px-4 xl:px-0 max-w-7xl mx-auto flex flex-col-reverse md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                    } gap-6 md:gap-20`}
            >
                <div className="flex-1 text-center md:text-left">
                    {badgeText && <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {badgeText}
                    </span>}
                    <h2 className={cn("text-4xl font-bold mb-4", {
                        "text-primary": !invert,
                        "text-background": invert,
                    })}>{title}</h2>
                    {
                        description.map((desc) => (
                            <p key={desc} className={cn("text-muted-foreground mb-4", {
                                "text-foreground/85": !invert,
                                "text-background/85": invert,
                            })}>{desc}</p>
                        ))
                    }
                    {
                        callToAction && (
                            <Button asChild size="lg" variant={
                                !invert ? "default" : "secondary"
                            } className="mt-8">
                                <Link href={callToAction.href}>
                                    {callToAction.jsx}
                                </Link>
                            </Button>
                        )
                    }
                </div>
                <div className={cn("flex-1 flex justify-center items-center md:block")}>
                    <Image
                        width={1000}
                        height={1000}
                        src={imageSrc}
                        alt={title}
                        className={cn("w-[500px] aspect-square object-cover rounded-lg drop-shadow-2xl")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Information;