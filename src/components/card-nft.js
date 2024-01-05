import Image from 'next/image'

import ImageNft01 from '@/assets/img-neft/01.jpg'
import IconHeart from '@/assets/icon-heart.svg'
import IconVerify from '@/assets/verify.svg'
import IconEth from '@/assets/icon-eth.svg'
import IconClock from '@/assets/icon-clock.svg'

export function CardNFT({thumbnail, name, value, value_brl}) {
    return (
        <div className='w-full max-w-card-nft overflow-hidden rounded-2xl border border-gray-border-card bg-gray-area-favorite'>
            <div className='relative w-full h-area-image-nft overflow-hidden'>
                <Image
                    src={thumbnail}
                    alt='NFT 01'
                    className='w-full h-full object-cover'
                />
                <div className='absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-area-favorite rounded-full border border-gray-border-card'>
                    <Image
                        src={IconHeart}
                        alt='Icon heart'
                    />
                    <small>0</small>
                </div>
            </div>
            <div className='w-full p-4'>
                <h4 className='flex items-center gap-1 text-xs mb-1'>Cartoon Collection
                    <Image
                        src={IconVerify}
                        alt='Icon verify'
                    />
                </h4>
                <h3 className='text-lg/none font-semibold mb-4'>{name}</h3>
                <div className='flex items-end justify-between mb-4'>
                    <div className='space-y-1'>
                        <span className='text-xs text-white text-opacity-70'>Preço atual</span>
                        <h3 className='flex items-center gap-1 text-lg font-semibold'> 
                            <Image
                                src={IconEth}
                                alt='Icon ETH'
                            />
                            {value}
                        </h3>
                    </div>
                    <h5 className='relative bottom-1 text-xs font-medium'>R$ {value_brl}</h5>
                </div>
                <button className='w-full py-4 bg-blue-primary rounded-full mb-4 text-sm font-semibold hover:bg-blue-700 transition-all ease-linear'>Buy now</button>
                <div className='flex items-center gap-1'>
                    <Image
                    src={IconClock}
                    alt='Icon Clock'
                    />
                    <p className='text-xs'>Fim em 4h 8m 22s</p>
                </div>
            </div>
        </div>
    )
}