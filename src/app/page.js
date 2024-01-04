import { CardNFT } from '@/components/card-nft'
import { ContainerGrid } from '@/components/container'
import { TitleSection } from '@/components/title-section'
import Image from 'next/image'

export default function Home() {
  return (
    <ContainerGrid>
      <TitleSection
        title='Destaque em Coleções'
        subtitle='Coleções notáveis'
      />
      <CardNFT></CardNFT>
    </ContainerGrid>
  )
}
