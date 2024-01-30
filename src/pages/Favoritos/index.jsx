import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Titulo from "../../components/Titulo"
import { ContainerCard } from "../Inicio"
import { useFavoritoContext } from "../../components/contexts/Favoritos"

const Favoritos = () => {
    const { favorito } = useFavoritoContext()
    return(
        <>
            <Banner img='imgs/Banner Favoritos.png'/>
            <Titulo>Meus Favoritos</Titulo>
            <ContainerCard>
                { favorito.length ? favorito.map(item => <Card key={item.id} {...item}/>) : <h1>tem nada aqui não</h1> }
            </ContainerCard>
        </>
    )
}

export default Favoritos