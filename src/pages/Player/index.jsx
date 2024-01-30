import { useParams } from "react-router-dom"
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import styled from "styled-components"
import NaoEncontrada from "../NaoEncontrada"
import { useEffect } from "react"
import { useVideosContext } from "../../components/contexts/Favoritos"

const ContainerIframe = styled.div `
    display: flex;
    justify-content: center;
    height: 80vh;
`

const Player = () => {
    const {video, getVideo}  = useVideosContext()
    const { id } = useParams()
    useEffect(() => {
        getVideo(id)
    }, [getVideo, id])
    if(!video[0]) return <NaoEncontrada/>
    return(
        <>
        <Banner img='imgs/Banner Player.png'/>
        <Titulo>Player</Titulo>
            <ContainerIframe>
                <iframe
                    width="560" 
                    height="315" 
                    src={video[0].link}
                    title={video[0].titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </ContainerIframe>
        </>
    )
}
export default Player