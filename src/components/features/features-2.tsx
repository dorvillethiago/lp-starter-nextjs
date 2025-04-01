import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Hospital, Settings2, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Button } from '../ui/button';

export default function Features2() {
    const mainFeature = {
        icon: <Hospital className="size-6" aria-hidden />,
        title: "Feature 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
    const features = [
        {
            icon: <Zap className="size-6" aria-hidden />,
            title: "Feature 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            icon: <Settings2 className="size-6" aria-hidden />,
            title: "Feature 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            icon: <Sparkles className="size-6" aria-hidden />,
            title: "Feature 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];

    return (
        <section className="bg-primary/70 relative text-background py-16 md:py-20 dark:bg-transparent">
            <Image alt='Hero' width={1920} height={1080} className="rounded-b-4xl absolute -z-10 inset-0 object-cover w-full h-full" src="/feat-1.jpg" />
            <div className="absolute -z-10 inset-0 bg-primary opacity-70 rounded-b-4xl" />
            <div className="mx-auto max-w-7xl px-4 xl:px-0">
                <div className="text-center md:text-left grid grid-cols-1 md:grid-cols-2">
                    <div className='my-auto px-10 pb-16 xl:pb-0'>
                        <p className="mt-4">Nossas especialidades</p>
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Somos especialistas em diversos setores, incluindo:</h2>
                    </div>
                    <FeatureCard className='h-full' {...mainFeature} />
                </div>
                <div className="gap-6 mt-16 grid grid-cols-1 gap-y-16 xl:gap-y-0 xl:grid-cols-3 md:justify-start">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({ icon, title, description, className }: { icon: ReactNode; title: string; description: string, className?: string }) => (
    <Card className={cn("group relative text-center shadow-zinc-950/5 h-[440px] rounded-3xl", className)}>
        <CardHeader>
            <div className='absolute -top-10 bg-accent p-6 rounded-full left-1/2 -translate-x-1/2'>{icon}</div>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
            <p className="opacity-70">{description}</p>
        </CardContent>
        <CardFooter className='mt-auto'>
            <Button variant="default" className="mx-auto w-40 h-12 rounded-full">
                SAIBA MAIS
                <ArrowRight />
            </Button>
        </CardFooter>
    </Card>
);