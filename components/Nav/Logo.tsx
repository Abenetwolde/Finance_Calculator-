'use client';

import { USER_QUERY_KEY } from '@/constants/api';
import { getUser } from '@/lib/queryFns/auth';
import { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import ablogo from '../../public/assets/images/ablogo.png';
import { Skeleton } from '../ui/skeleton';

const Logo = () => {
	const [src, setSrc] = useState<null | StaticImageData>(null);

	const { status: sessionStatus } = useSession();
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		setSrc(resolvedTheme === 'dark' ? ablogo : ablogo);
	}, [resolvedTheme]);

	const { data: userData } = useQuery<User | null>({
		queryKey: [USER_QUERY_KEY, { sessionStatus }],
		queryFn: () => getUser(sessionStatus),
		enabled: sessionStatus === 'authenticated',
		refetchOnWindowFocus: false,
	});

	return (
		<div>
			<Link
				href="/"
				className="gap-2 items-center justify-center flex ring-offset-background focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-ring rounded-md p-1"
			>
				{src ? (
					<Image
						src={src}
						alt="KoronKorko Logo"
						className="h-[54px] w-[54px] cursor-pointer select-none min-h-[54px] min-w-[54px]"
					/>
				) : (
					<Skeleton className="h-[34px] w-[34px] rounded-full" />
				)}

				<p aria-hidden className="font-bold text-2xl hidden xs:block">
					{userData?.plan === 'premium' ? 'Finance Calculator Pro' : 'Finance Calculator'}
				</p>
			</Link>
		</div>
	);
};

export default Logo;
