import TypographyH1 from '@/components/TypographyH1';
import TypographyH2 from '@/components/TypographyH2';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { calculators } from '@/constants/calculators';
import { featuredApps } from '@/constants/data';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<TypographyH1 className="mb-6">Choose a Calculator</TypographyH1>

			<div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2">
				{calculators.map((calculator, i) => (
					<Link
						key={`calculator-${i}`}
						href={`/${calculator.url}`}
						className=" g border-2 p-4 hover:bg-muted focus-visible:bg-muted transition-all  relative rounded-lg bg-card group"
					>
						<Card className="border-none group-hover:bg-muted group-focus-visible:bg-muted transition-all">
							<TypographyH2 className="mb-2">{calculator.name}</TypographyH2>

							<Separator className="h-[2px]" />

							<p className="mt-4 text-neutral-700 dark:text-neutral-300">
								{calculator.description}
							</p>
						</Card>
					</Link>
				))}
			</div>

		
		</>
	);
}
