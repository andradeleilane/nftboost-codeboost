import { SectionHero } from '@/components/section-hero'
import { SectionCarrousel } from '@/components/section-carrousel'

import ImageNft01 from '@/assets/img-neft/01.jpg'
import ImageNft02 from '@/assets/img-neft/02.jpg'
import ImageNft03 from '@/assets/img-neft/03.jpg'
import ImageNft04 from '@/assets/img-neft/04.jpg'
import ImageNft05 from '@/assets/img-neft/05.jpg'
import ImageNft06 from '@/assets/img-neft/06.jpg'
import ImageNft07 from '@/assets/img-neft/07.jpg'
import ImageNft08 from '@/assets/img-neft/08.jpg'
import ImageNft09 from '@/assets/img-neft/09.jpg'
import ImageNft10 from '@/assets/img-neft/10.jpg'
import ImageNft11 from '@/assets/img-neft/11.jpg'
import ImageNft12 from '@/assets/img-neft/12.jpg'
import { SectionCollectors } from '@/components/section-collectors'
import { SectionBanner } from '@/components/section-banner'
import { SectionQuestions } from '@/components/section-questions'

const featureCollections = [
  {
    name: 'Cat #221',
    thumbnail: ImageNft01, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Snike #2331',
    thumbnail: ImageNft02, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Skull Hatter #2311',
    thumbnail: ImageNft03, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Nox #2611',
    thumbnail: ImageNft04, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Crazy Monkey #131',
    thumbnail: ImageNft05, 
    value: '0.0721',
    value_brl: '602,02'
  }
]

const highlightMonth = [
  {
    name: 'Crazy Monkey #131',
    thumbnail: ImageNft05, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Alien Shooter #2211',
    thumbnail: ImageNft06, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Yordlee #1221',
    thumbnail: ImageNft07, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Dragon Cannon #4401',
    thumbnail: ImageNft08, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Nox #2611',
    thumbnail: ImageNft04, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Snike #2331',
    thumbnail: ImageNft02, 
    value: '0.0721',
    value_brl: '602,02'
  }
]

const tendencies = [
  {
    name: 'Borex #171',
    thumbnail: ImageNft09, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Durtre #2391',
    thumbnail: ImageNft10, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Hatter #321',
    thumbnail: ImageNft11, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Sailor Skull #4431',
    thumbnail: ImageNft12, 
    value: '0.0721',
    value_brl: '602,02'
  },
  {
    name: 'Snike #2331',
    thumbnail: ImageNft02, 
    value: '0.0721',
    value_brl: '602,02'
  }
]

export default function Home() {
  return (
    <>
      <SectionHero>
      </SectionHero>
      <SectionCarrousel 
        subtitle='Destaque em Coleções'
        title='Coleções notáveis'
        data={featureCollections}
      >
      </SectionCarrousel>
      <hr className='max-w-grid mx-auto border-t border-white border-opacity-5 @desktop:mt-36'/>
      <SectionCarrousel 
        subtitle='Seleção Mensal'
        title='Destaque do Mês'
        data={highlightMonth}
      >
      </SectionCarrousel>
      <hr className='max-w-grid mx-auto border-t border-white border-opacity-5 @desktop:mt-36'/>
      <SectionCollectors/>
      <hr className='max-w-grid mx-auto border-t border-white border-opacity-5 @desktop:mt-36'/>
      <SectionCarrousel 
        subtitle='Em Tendência'
        title='Tendências'
        data={tendencies}
      >
      </SectionCarrousel>

      <SectionBanner/>

      <SectionQuestions/>
    </>
  )
}
