import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { logos } from '@/static'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="relative py-6">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={200}
                            gap={112}>
                            {logos.map((logo, index) => (
                                <div className="flex" key={index}>
                                    <img
                                        className="mx-auto h-16 w-fit rounded-lg"
                                        src={logo.src}
                                        alt={logo.alt}
                                        height={logo.height}
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
            </div>
        </section>
    )
}
