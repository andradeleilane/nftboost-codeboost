import Image from 'next/image';

import { ContainerGrid } from "../container";
import IconBoost from '@/assets/icon-boost.svg'
import ImageDoubleNFT from '@/assets/double-nft.png'
import ImageSmallNFT from '@/assets/nft-small.png'
import GooglePlay from '@/assets/google.svg'
import AppleStore from '@/assets/apple.svg'

export function SectionHero() {
    return (
        <section className='pt-36 bg-hero-pattern bg-no-repeat'>
            <ContainerGrid className='flex flex-col items-center'>
                <h3 className='flex items-center gap-2 text-sm @tablet:text-base @desktop:text-xl mb-3'>
                    <Image 
                        src={IconBoost} 
                        alt="Icon NFTBoost"
                    />
                    <span>Adentre um reino de possibilidades infinitas</span>
                </h3>
                <h1 className='text-5xl/normal @desktop:text-7xl/normal text-center font-poppins mb-4'>
                    Explore um Universo
                    <div className='inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32'>
                        <Image 
                            src={ImageSmallNFT} 
                            alt="Image NFT"
                            className='w-11 @desktop:w-auto'
                        />
                    </div>         
                    Digital de
                        <Image 
                            src={ImageDoubleNFT} 
                            alt="Image NFT"
                            className='inline-block w-16 mx-2 @desktop:w-auto'
                        />
                    Colecionáveis Únicos!
                </h1>
                <p className='w-full @desktop:max-w-content-description-dektop text-center text-sm mb-6 @desktop:mb-9 @tablet:text-base @desktop:text-xl'>Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, 
                    onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.
                </p>
                <div className='flex flex-col items-center gap-4 @tablet:flex-row'>
                    <Image 
                        src={GooglePlay} 
                        alt="Google Play"
                    />
                    <Image 
                        src={AppleStore} 
                        alt="Apple Store"
                    />
                </div>
            </ContainerGrid>
        </section>
    )
}