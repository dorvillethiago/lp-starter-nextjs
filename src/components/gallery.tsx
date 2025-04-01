'use client'

import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

const images = [
    "/abstract.jpg",
    "/abstract.jpg",
    "/abstract.jpg",
    "/abstract.jpg",
    "/abstract.jpg",
    "/abstract.jpg",
    "/abstract.jpg",
    "/abstract.jpg",
]


export default function Gallery() {
    return <section className="py-16">
        <div className="px-4 sm:px-0 max-w-6xl mx-auto flex flex-col">
            <h2>Our Products</h2>
            <div className="relative py-6">
                <InfiniteSlider
                    speedOnHover={20}
                    speed={100}
                    gap={112}>
                    {images.map((image, index) => (
                        <div className="flex" key={index}>
                            <img
                                className="size-76 rounded-lg"
                                src={image}
                                alt="Product"
                                height="auto"
                                width="auto"
                            />
                        </div>
                    ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                />
                <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                />
            </div>
        </div>
    </section>
}