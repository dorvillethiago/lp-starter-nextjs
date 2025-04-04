import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    return (
        <section className=" mt-16" id="contato">
            <div className="container mx-auto text-center px-4">
                <div className="mb-14">
                    <span className="text-sm font-semibold">Fale Conosco</span>
                    <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
                        Converse com a nossa equipe!
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Nós adoraríamos falar com você. Entre em contato conosco presencialmente ou através dos nossos meios de contato.
                    </p>
                </div>
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="flex flex-col items-center">
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary text-white border border-primary/30">
                            <Mail className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Email</p>
                        <p className="mb-3 text-muted-foreground">
                            Estamos prontos para responder a todas as suas perguntas.
                        </p>
                        <Link href="#" className="font-semibold hover:underline">
                            email@exemplo.com
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary text-white border border-primary/30">
                            <MapPin className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Nos dê uma visita!</p>
                        <p className="mb-3 text-muted-foreground">
                            Converse conosco presencialmente.
                        </p>
                        <Link href="#" className="font-semibold hover:underline">
                            1234 Rua Tal de Tal, Cidade/Estado
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary text-white border border-primary/30">
                            <Phone className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Ligue por telefone</p>
                        <p className="mb-3 text-muted-foreground">
                            Estamos disponíveis 24/7 para atendê-lo.
                        </p>
                        <Link href="#" className="font-semibold hover:underline">
                            +55 11 1234-5678
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact
