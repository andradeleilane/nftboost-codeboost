import { CardCollectiors } from "./card-collectiors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import ImageNft01 from '@/assets/img-neft/01.jpg'
import ImageNft02 from '@/assets/img-neft/02.jpg'
import ImageNft03 from '@/assets/img-neft/03.jpg'
import ImageNft04 from '@/assets/img-neft/04.jpg'
import ImageNft05 from '@/assets/img-neft/05.jpg'
import ImageNft06 from '@/assets/img-neft/06.jpg'
import ImageNft07 from '@/assets/img-neft/07.jpg'
import ImageNft08 from '@/assets/img-neft/08.jpg'

const collectors = [
    {
        image: ImageNft01,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft02,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft03,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft04,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft05,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft06,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft07,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },
    {
        image: ImageNft08,
        name: 'Lorem Ipsum',
        percent: '20%',
        value_btc: '0.721'
    },

]

export function SectionCollectors() {
    return (
        <section className="py-10 @desktop:py-28">
            <ContainerGrid>
                <TitleSection 
                    subtitle='Colecionadores em Foco'
                    title='Principais colecionadores'
                />
                <div className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4">
                    {
                        collectors.map(({image, name, percent, value_btc}, index) => (
                            <CardCollectiors 
                                key={index}
                                position={index + 1}
                                image={image}
                                name={name}
                                percent={percent}
                                value_btc={value_btc}
                            />
                        ))
                    }
                </div>
            </ContainerGrid>
        </section>
    )
}