import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
	HomeIcon,
	SearchIcon,
	LightningBoltIcon,
	UserIcon,
	CollectionIcon,
	BadgeCheckIcon
} from '@heroicons/react/outline';

function Header() {
	return (
		<header className='flex flex-col m-5 sm:flex-row justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Image
				className='object-contain cursor-pointer'
				src='/images/hulu-white.png'
				width={140}
				height={80}
			/>
		</header>
	);
}

export default Header;
