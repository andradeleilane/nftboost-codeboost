import { CardNFT } from '@/components/card-nft'
import { CardCollectiors } from '@/components/card-collectiors'
import { ContainerGrid } from '@/components/container'
import { TitleSection } from '@/components/title-section'

import ImageNft01 from '@/assets/img-neft/01.jpg'

export default function Home() {
  return (
    <>
      <section className='w-full h-screen flex'>

      </section>
    
    </>
    /*<ContainerGrid>
      <TitleSection
        title='Destaque em Coleções'
        subtitle='Coleções notáveis'
      />
      <CardNFT
        thumbnail={ImageNft01}
        name='Cat #221'
        value='0.0721'
        value_brl='602,02'
      />
      <CardCollectiors
        image={ImageNft01}
        name='Lorem Ipsum'
        value_btc='0.0721'
        percent='20%'
      />
    </ContainerGrid>
    */
  )
}
