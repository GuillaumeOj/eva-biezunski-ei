import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { CONTACT, FOOTER, NAV_LINKS } from "@/lib/constants";

const contactItems = [
	{ Icon: MapPin, text: CONTACT.address },
	{ Icon: Phone, text: CONTACT.phone },
	{ Icon: Mail, text: CONTACT.email },
];

export function Footer() {
	return (
		<footer className="bg-darker-teal py-12 text-white">
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid gap-8 md:grid-cols-3">
					{/* Logo */}
					<div>
						<Image
							src="/images/logo-white-for-black-background.svg"
							alt="Eva Biezunski - Avocate"
							width={180}
							height={40}
							className="mb-4"
						/>
						<p className="text-sm font-300 text-white/60">Avocate au Barreau de Lyon</p>
					</div>

					{/* Quick links */}
					<div>
						<h4 className="mb-4 text-sm font-700">Navigation</h4>
						<ul className="space-y-2">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-sm font-300 text-white/60 transition-colors hover:text-white"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="mb-4 text-sm font-700">Contact</h4>
						<ul className="space-y-2 text-sm text-white/60">
							{contactItems.map(({ Icon, text }) => (
								<li key={text} className="flex items-start gap-2 font-300">
									<Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
									<span>{text}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
					<p className="text-xs font-300 text-white/60">{FOOTER.copyright}</p>
					<div className="flex gap-4">
						<a href="#" className="text-xs font-300 text-white/60 hover:text-white/60">
							{FOOTER.legalNotice}
						</a>
						<a href="#" className="text-xs font-300 text-white/60 hover:text-white/60">
							{FOOTER.privacyPolicy}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
