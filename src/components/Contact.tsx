"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";

const contactItems = [
	{ Icon: MapPin, text: CONTACT.address },
	{ Icon: Phone, text: CONTACT.phone },
	{ Icon: Mail, text: CONTACT.email },
];

const labelClass = "mb-1 block text-sm font-500 text-near-black";
const inputClass =
	"w-full rounded border border-gray-300 px-4 py-2 font-300 text-sm text-near-black focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 focus:outline-none transition-colors";

export function Contact() {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<section id="contact" className="bg-white py-20">
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeading>{CONTACT.sectionTitle}</SectionHeading>
				<div className="grid gap-12 md:grid-cols-2">
					{/* Contact info */}
					<div>
						<h3 className="mb-6 text-xl font-700 text-near-black">Coordonnées</h3>
						<div className="space-y-4">
							{contactItems.map(({ Icon, text }) => (
								<div key={text} className="flex items-start gap-3">
									<Icon className="mt-1 h-5 w-5 shrink-0 text-primary-light" />
									<p className="text-sm font-300 text-gray-700">{text}</p>
								</div>
							))}
						</div>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="lastName" className={labelClass}>
									{CONTACT.formFields.lastName}
								</label>
								<input id="lastName" type="text" className={inputClass} />
							</div>
							<div>
								<label htmlFor="firstName" className={labelClass}>
									{CONTACT.formFields.firstName}
								</label>
								<input id="firstName" type="text" className={inputClass} />
							</div>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="email" className={labelClass}>
									{CONTACT.formFields.email}
								</label>
								<input id="email" type="email" className={inputClass} />
							</div>
							<div>
								<label htmlFor="phone" className={labelClass}>
									{CONTACT.formFields.phone}
								</label>
								<input id="phone" type="tel" className={inputClass} />
							</div>
						</div>
						<div>
							<label htmlFor="subject" className={labelClass}>
								{CONTACT.formFields.subject}
							</label>
							<select id="subject" className={inputClass}>
								<option value="">-- Sélectionnez --</option>
								{CONTACT.subjectOptions.map((opt) => (
									<option key={opt} value={opt}>
										{opt}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="message" className={labelClass}>
								{CONTACT.formFields.message}
							</label>
							<textarea id="message" rows={5} className={inputClass} />
						</div>
						<Button type="submit">{CONTACT.formFields.submit}</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
