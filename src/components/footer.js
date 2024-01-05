import Image from 'next/image';

import { ContainerGrid } from "./container";
import Logo from '@/assets/logo.svg'

const footerNav = [
    {
        titleMenu: 'NFT Boost®',
        items: [
            'Download',
            'NFTs',
            'Rank',
            'FAQ'
        ]
    },
    {
        titleMenu: 'Links importantes',
        items: [
            'About us',
            'Questions',
            'Press',
            'Contact us',
            'Legal'
        ]
    }

]

export function Footer() {
    return (
        <footer className='py-10 @laptop:pt-32 @laptop:pb-14'>
            <ContainerGrid className='flex flex-col @laptop:flex-row justify-between gap-10'>
                <div className='text-left max-w-full @laptop:max-w-left-content-footer'>
                    <Image 
                        src={Logo} 
                        alt="Logo NFTBoost"
                        className='max-w-logo-size-mobile'
                    />
                    <p className='mt-4 mb-6 text-lg text-white text-opacity-70'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>
                    <button className='w-full @tablet:w-auto py-3 px-6 bg-blue-primary rounded-full text-sm font-semibold hover:bg-blue-700 transition-all ease-linear'>Conectar carteira</button>
                </div>
                <div className='gap-10 @laptop:gap-20 flex flex-col @laptop:flex-row'>
                    {
                        footerNav.map(({titleMenu, items}) => (
                            <nav key={`Menu-${titleMenu}`}>
                                <strong 
                                 className='text-xl mb-4 block'
                                >
                                    {titleMenu}
                                </strong>
                                <ul className='space-y-4'>
                                    {
                                        items.map((item, index) => (
                                            <li key={index}>
                                                <a 
                                                href='#' 
                                                className='text-lg text-white text-opacity-70 hover:text-blue-primary transition-colors ease-linear'
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        ))
                    }
                </div>
           
            </ContainerGrid>
        </footer>
    )
}