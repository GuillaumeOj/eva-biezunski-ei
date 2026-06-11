import { Globe, UserPlus } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { QR_CARD } from "@/lib/constants";

export const metadata: Metadata = {
	title: `${QR_CARD.title} — ${QR_CARD.subtitle}`,
	robots: { index: false, follow: false },
};

const MOBILE_UA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i;

export default async function CartePage() {
	const userAgent = (await headers()).get("user-agent") ?? "";
	if (!MOBILE_UA.test(userAgent)) {
		redirect("/");
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-darker-teal to-dark-teal px-6 py-16">
			<div className="flex w-full max-w-sm flex-col items-center text-center">
				<Image
					src="/images/logo-for-dark-green-background.svg"
					alt="Eva Biezunski - Avocate"
					width={260}
					height={70}
					className="mb-10"
					priority
				/>
				<h1 className="text-3xl font-700 text-white">{QR_CARD.title}</h1>
				<p className="mt-2 text-lg font-300 text-white/80">{QR_CARD.subtitle}</p>

				<div className="mt-12 flex w-full flex-col gap-4">
					<a
						href="/carte/vcard"
						download
						className="inline-flex items-center justify-center gap-2 rounded bg-primary-light px-8 py-4 font-500 text-white transition-all duration-300 hover:bg-primary"
					>
						<UserPlus className="h-5 w-5" strokeWidth={1.5} />
						{QR_CARD.saveContact}
					</a>
					<a
						href="/"
						className="inline-flex items-center justify-center gap-2 rounded border-2 border-white px-8 py-4 font-500 text-white transition-all duration-300 hover:bg-white/10"
					>
						<Globe className="h-5 w-5" strokeWidth={1.5} />
						{QR_CARD.visitWebsite}
					</a>
				</div>
			</div>
		</main>
	);
}
