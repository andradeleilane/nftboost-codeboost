'use client'

import { useRef } from 'react';
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { CardNFT } from "./card-nft";

import Arrow from '@/assets/arrow.svg'

// Import Swiper styles
import 'swiper/css';

export function CarrouselCards({data}) {

    const swiperRef = useRef();

    return (
        <div className='w-full relative'>
            <button className='w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5
            rounded-full hidden @desktop:flex items-center justify-center absolute z-10 top-1/2 -mt-6 -left-6'
                onClick={() => {
                    swiperRef.current?.slidePrev()
                }}
            >
                <Image
                    src={Arrow}
                    alt='Arrow previous'
                    className=''
                />
            </button>
            <Swiper
                slidesPerView={4}
                spaceBetween={32}
                speed={800}
                loop={true}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 24
                    },
                    768: {
                        slidesPerView: 2.5
                    },
                    1024: {
                        slidesPerView: 3.3
                    },
                    1250: {
                        slidesPerView: 4,
                        spaceBetween: 32
                    }
                }}
                className='!px-3'
            >
                {
                    data.map(({name,thumbnail, value, value_brl}, index) => (
                        <SwiperSlide key={index}>
                            <CardNFT
                                name={name}
                                thumbnail={thumbnail}
                                value={value}
                                value_brl={value_brl}
                            />
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
            <button className='w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5
            rounded-full hidden @desktop:flex items-center justify-center rotate-180 absolute z-10 top-1/2 -mt-6 -right-6'
                onClick={() => {
                    swiperRef.current?.slideNext()
                }}
            >
                <Image
                    src={Arrow}
                    alt='Arrow previous'
                    className=''
                />
            </button>
        </div>
    )
}