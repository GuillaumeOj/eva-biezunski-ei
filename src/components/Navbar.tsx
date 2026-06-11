"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_LINKS } from "@/lib/constants";

const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Navbar() {
	const navRef = useRef<HTMLElement>(null);
	const { activeId, navBackground, logoVisible } = useScrollSpy(sectionIds, navRef);
	const [menuOpen, setMenuOpen] = useState(false);

	// When the mobile menu is open, force the header background and logo to show
	// even at the top of the page, so the menu doesn't drop from an empty header.
	const showBackground = navBackground || menuOpen;
	const showLogo = logoVisible || menuOpen;

	return (
		<nav
			ref={navRef}
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
				showBackground ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
			}`}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 md:py-4">
				<a
					href={NAV_LINKS[0].href}
					className={`flex items-center transition-all duration-500 ${showLogo ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
				>
					<Image
						src="/images/logo-for-white-background.svg"
						alt="Eva Biezunski - Avocate"
						width={180}
						height={40}
						className="w-[120px] md:w-[180px]"
						priority
					/>
				</a>

				{/* Desktop nav */}
				<div className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`text-sm font-500 transition-colors ${
								activeId === link.href.replace("#", "")
									? navBackground
										? "text-primary"
										: "text-white"
									: navBackground
										? "text-near-black/70 hover:text-primary"
										: "text-white/70 hover:text-white"
							}`}
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					className="md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Menu"
				>
					{menuOpen ? (
						<X className={`h-6 w-6 ${showBackground ? "text-near-black" : "text-white"}`} />
					) : (
						<Menu className={`h-6 w-6 ${showBackground ? "text-near-black" : "text-white"}`} />
					)}
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="border-t border-gray-100 md:hidden">
					<div className="flex flex-col px-6 py-4">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className={`border-b border-gray-100 py-3 text-sm font-500 last:border-0 ${
									activeId === link.href.replace("#", "") ? "text-primary" : "text-near-black/70"
								}`}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
