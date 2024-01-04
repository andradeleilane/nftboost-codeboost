import Image from 'next/image'

import ImageNft01 from '@/assets/img-neft/01.jpg'
import IconHeart from '@/assets/icon-heart.svg'
import IconVerify from '@/assets/verify.svg'
import IconEth from '@/assets/icon-eth.svg'
import IconClock from '@/assets/icon-clock.svg'

export function CardNFT() {
    return (
        <div className='w-full max-w-card-nft overflow-hidden rounded-2xl border border-gray-border-card'>
            <div className='relative w-full h-area-image-nft overflow-hidden'>
                <Image
                    src={ImageNft01}
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
            <div>
                <h4>Cartoon Collection
                    <Image
                        src={IconVerify}
                        alt='Icon verify'
                    />
                </h4>
                <h3>Cat #221</h3>
                <div>
                    <div>
                        <span>Preço atual</span>
                        <h3> 
                            <Image
                                src={IconEth}
                                alt='Icon ETH'
                            />
                            0.0721 BTC
                        </h3>
                    </div>
                    <h5>R$ 602,02</h5>
                </div>
            </div>
            <button>Buy now</button>
            <div>
                <Image
                  src={IconClock}
                  alt='Icon Clock'
                />
                <p>Fim em 4h 8m 22s</p>
            </div>
        </div>
    )
}