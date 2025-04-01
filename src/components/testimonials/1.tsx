import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 bg-gradient-to-b from-primary/80 to-primary">
                <div className="mx-auto max-w-6xl px-3 xl:px-0">
                    <div className="text-center text-background">
                        <p className="text-body">O que os nossos clientes tem dito sobre nós</p>
                        <h2 className="text-title mt-4 text-3xl font-semibold">A confiança dos nossos clientes!</h2>
                    </div>
                    <div className="mt-16 gap-18 lg:gap-4 md:mt-22 flex justify-center flex-wrap">
                        {/* Hardcoded Testimonial 1 */}
                        <div className="space-y-3 drop-shadow-xl">
                            <Card>
                                <CardContent className="flex flex-col gap-2 relative items-center justify-center text-center max-w-[370px] min-h-[100px] max-h-[250px]">
                                    <Avatar className="size-20 absolute border -top-16">
                                        <AvatarImage
                                            alt="Mila Wachholz"
                                            src="https://randomuser.me/api/portraits/women/81.jpg"
                                            loading="lazy"
                                            width="120"
                                            height="120"
                                        />
                                        <AvatarFallback>MW</AvatarFallback>
                                    </Avatar>
                                    <div className="mt-10">
                                        <h2 className="font-semibold text-lg">"Equipe qualificada"</h2>
                                        <blockquote className="mt-3">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Comprometidos com seus clientes, atendimento excepcional, equipe qualificada e preparada. Somos clientes a 3 anos e sem dúvidas temos o melhor atendimento.
                                            </p>
                                        </blockquote>
                                        <br />
                                        <h3 className="font-medium">Mila Wachholz</h3>
                                        <span className="text-muted-foreground block text-sm tracking-wide">Prestação de serviços</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Hardcoded Testimonial 2 */}
                        <div className="space-y-3 drop-shadow-xl">
                            <Card>
                                <CardContent className="flex flex-col gap-2 relative items-center justify-center text-center max-w-[370px] min-h-[100px] max-h-[250px]">
                                    <Avatar className="size-20 absolute border -top-16">
                                        <AvatarImage
                                            alt="Roberta Schutz"
                                            src="https://randomuser.me/api/portraits/women/48.jpg"
                                            loading="lazy"
                                            width="120"
                                            height="120"
                                        />
                                        <AvatarFallback>RS</AvatarFallback>
                                    </Avatar>
                                    <div className="mt-10">
                                        <h2 className="font-semibold text-lg">"Ótimos profissionais"</h2>
                                        <blockquote className="mt-3">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Ótimos profissionais, sérios e comprometidos… super recomendo!
                                            </p>
                                        </blockquote>
                                        <br />
                                        <h3 className="font-medium">Roberta Schutz</h3>
                                        <span className="text-muted-foreground block text-sm tracking-wide">Saúde</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Hardcoded Testimonial 3 */}
                        <div className="space-y-3 drop-shadow-xl">
                            <Card>
                                <CardContent className="flex flex-col gap-2 relative items-center justify-center text-center max-w-[370px] min-h-[100px] max-h-[250px]">
                                    <Avatar className="size-20 absolute border -top-16">
                                        <AvatarImage
                                            alt="Carlos Jorge"
                                            src="https://randomuser.me/api/portraits/men/7.jpg"
                                            loading="lazy"
                                            width="120"
                                            height="120"
                                        />
                                        <AvatarFallback>CJ</AvatarFallback>
                                    </Avatar>
                                    <div className="mt-10">
                                        <h2 className="font-semibold text-lg">"Serviços de Qualidade"</h2>
                                        <blockquote className="mt-3">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Valorizo os serviços pela organização e precisão que proporcionam, garantindo segurança nas finanças. Eles são essenciais para o sucesso e conformidade de qualquer um!
                                            </p>
                                        </blockquote>
                                        <br />
                                        <h3 className="font-medium">Carlos Jorge</h3>
                                        <span className="text-muted-foreground block text-sm tracking-wide">Software House</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}