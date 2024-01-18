import Image from 'next/image';
import CardsLeft from  '@/assets/cards-left.png'
import CardsRight from '@/assets/cards-right.png'

export function CardsHero() {
    return (
        <div className='relative w-area-cards-mobile h-area-cards-mobile mt-12 @desktop:w-full @desktop:h-area-cards-desktop @desktop:mt-20'>
             <Image 
                src={CardsLeft} 
                alt="Cards NFTBoost"
                className='absolute top-0 left-8 w-1/2 z-10'
            />
            <Image 
                src={CardsRight} 
                alt="Cards NFTBoost"
                className='absolute top-0 right-8 w-1/2'
            />
        </div>
    )
}