import Image from 'next/image';
import Link from 'next/link';

import { ContainerGrid } from "./container";
import Logo from '@/assets/logo.svg'
import IconMenu from '@/assets/icon-hamburger.svg'

const itemsNav = [
    'Download',
    'NFTs',
    'Rank',
    'FAQ'
]

export function Header() {
    return (
        <header className='absolute top-0 left-0 w-full py-6 @laptop:py-5'>
            <ContainerGrid className='flex items-center justify-between'>
            <Image 
                src={Logo} 
                alt="Logo NFTBoost"
                className='max-w-logo-size-mobile'
            />
            <div className='hidden @laptop:flex flex-1 max-w-nav-header items-center justify-between'>
                <nav className='flex gap-12'>
                    {
                        itemsNav.map((item, index) => (
                            <Link 
                                href='#' 
                                key={index} 
                                className='font-medium hover:text-blue-primary transition-colors ease-linear'
                                >
                                {item}
                            </Link>
                        ))
                    }
                </nav>
                <button className='py-3 px-6 bg-blue-primary rounded-full text-sm font-semibold hover:bg-blue-700 transition-all ease-linear'>Conectar carteira</button>
            </div>
            <button className='w-10 h-10 p-2 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @desktop:hidden @laptop:hidden'>
                <Image 
                    src={IconMenu} 
                    alt="Icon menu mobile"
                />
            </button>
            </ContainerGrid>
        </header>
    )
}