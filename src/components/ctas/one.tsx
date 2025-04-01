import { Button } from "../ui/button";

export default function CtaOne() {
    return (
        <div className="bg-primary/20">
            <div className="container mx-auto flex flex-col gap-16 items-center py-16 px-4">
                <div className="flex flex-col text-center items-center">
                    <h1 className="max-w-3xl">
                        Boilerplate for Next.js 14 with Tailwind CSS, Radix UI, and Shadcn UI
                    </h1>
                    <p className="mt-2">
                        This is a boilerplate for Next.js 14 with Tailwind CSS, Radix UI, and Shadcn UI.
                    </p>
                    <Button className="mt-8">Call To Action</Button>
                </div>
            </div>
        </div>
    )
}