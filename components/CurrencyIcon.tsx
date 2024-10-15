import { currencies } from '@/constants/data';
import { cn, getCurrencyName } from '@/lib/utils';
import {
	DollarSign,
	Coins 
} from 'lucide-react';

interface CurrencyIconProps extends Omit<any, 'ref'> {
	currency: (typeof currencies)[number]['value'];
	SrNamePlural?: boolean;
}

const CurrencyIcon = ({
	currency,
	SrNamePlural = false,
	className,
	...props
}: CurrencyIconProps) => {
	const getIcon = () => {
		const SRCurrencyName = (
			<span className="sr-only">{getCurrencyName(currency, SrNamePlural)}</span>
		);

		switch (currency) {
			case 'etb':
				return (
					<>
					<Coins {...props} className={cn('h-4 w-4', className)} aria-hidden />
						{/* <p {...props} className={cn('h-4 w-z', className)} aria-hidden >ETB </p> */}
						{SRCurrencyName}
					</>
				);
			
			case 'usd':
				return (
					<>
						<DollarSign {...props} className={cn('h-4 w-4', className)} aria-hidden />
						{SRCurrencyName}
					</>
				);
			
			default:
				return (
					<>
						<DollarSign {...props} className={cn('h-4 w-4', className)} aria-hidden />
						{SRCurrencyName}
					</>
				);
		}
	};

	return <>{getIcon()}</>;
};

export default CurrencyIcon;
