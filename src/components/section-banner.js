import Image from 'next/image'

import { ContainerGrid } from "./container";

import GooglePlay from '@/assets/google.svg'
import AppleStore from '@/assets/apple.svg'

export function SectionBanner() {
    return (
       <section>
        <ContainerGrid>
            <div className='w-full h-auto @laptop:h-area-banner bg-banner bg-no-repeat bg-center bg-cover 
            flex flex-col items-center justify-center rounded-xl py-10 @laptop:py-0 px-2 @laptop:px-0'>
                <h2 className='text-4xl @laptop:text-6xl/snug font-poppins text-center mb-4'>Abra as Portas para a Próxima Revolução Digital!</h2>
                <p className='text-center text-base @laptop:text-xl mb-6 max-w-xl'>Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo Digital. Sua Oportunidade, Sua História</p>
                <div className='flex flex-col @laptop:flex-row items-center gap-6'>
                    <Image 
                        src={GooglePlay}
                        alt="Google Play"
                    />
                    <Image 
                        src={AppleStore}
                        alt="Apple Store"
                    />
                </div>
            </div>
        </ContainerGrid>
       </section>
    )
}