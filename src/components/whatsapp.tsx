import Image from "next/image";
import Link from "next/link";

export function WhatsappCallToAction() {
    return (
        <Link className="fixed animate-pulse right-5 bottom-5 animate-vibrate" href="#">
            <Image src="/whatsapp-logo.png" alt="Whatsapp" width={90} height={90} />
        </Link>
    )
}