import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Titulo from '../../components/Titulo'
import { useEffect, useState } from 'react'
import { useVideosContext } from '../../components/contexts/Favoritos'

export const ContainerCard = styled.section `
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    height: 90vh;
`

const Inicio = () => {
    const { videos } = useVideosContext()
    //console.log(videos)
    return(
        <>
            <Banner img="public/imgs/Banner Home.png"/>
            <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
            <ContainerCard>
                {videos.map(card => <Card key={card.id} {...card}/>)}
            </ContainerCard>
        </>
    )
}

export default Inicio