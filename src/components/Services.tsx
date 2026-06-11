import { Building2, FileText, Handshake, Lightbulb, Scale, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

const icons = [
	<Building2 key="building" className="h-8 w-8" strokeWidth={1.5} />,
	<Handshake key="handshake" className="h-8 w-8" strokeWidth={1.5} />,
	<FileText key="document" className="h-8 w-8" strokeWidth={1.5} />,
	<Lightbulb key="bulb" className="h-8 w-8" strokeWidth={1.5} />,
	<Scale key="scale" className="h-8 w-8" strokeWidth={1.5} />,
	<ShieldCheck key="shield" className="h-8 w-8" strokeWidth={1.5} />,
];

export function Services() {
	return (
		<section id="services" className="bg-primary-light/5 py-20">
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeading>{SERVICES.sectionTitle}</SectionHeading>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{SERVICES.items.map((service, i) => (
						<ServiceCard
							key={service.title}
							title={service.title}
							description={service.description}
							icon={icons[i]}
							delay={i * 100}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
