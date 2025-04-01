import Image from "next/image";

export default function HorizontalBgShort() {
    return (
        <main className="bg-primary/20">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-16 items-center py-16 px-4">
                <div className="flex flex-col">
                    <p className="px-4 text-xs mb-4 py-1 w-fit rounded-full border border-foreground">Cool Label</p>
                    <h1 className="max-w-3xl">
                        Boilerplate for Next.js 14 with Tailwind CSS, Radix UI, and Shadcn UI
                    </h1>
                    <p className="mt-2">
                        This is a boilerplate for Next.js 14 with Tailwind CSS, Radix UI, and Shadcn UI.
                    </p>
                </div>
                <Image src="" alt="Hero Logo" width={800} height={400} />
            </div>
        </main>
    )
}