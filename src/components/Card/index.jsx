import { CiHeart as CoracaoVazio } from "react-icons/ci";
import { FaHeart as CoracaoCheio } from "react-icons/fa";
import styled from "styled-components";
import { useFavoritoContext } from "../contexts/Favoritos";
import { Link } from "react-router-dom";

const CardContainer = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 282px;
    height: 540px;
    background: #E2E2E2;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    a{
        text-decoration: none;
    }
`
const ImgContent = styled.img `
    border-radius: 20px 20px 0 0;
    height: 425px;
    width: 100%;
`
const CardTitle = styled.h2 `
    font-size: 18px;
    font-weight: 700;
    padding: 0 27px;
    text-align: left;
    color: #000;
`
const ContainerIcon = styled.div `
    svg {
        cursor: pointer;
    }
    font-size: 24px;
    margin: 10px 35px;
`
const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const favFiltrado = favorito.filter(item => item.id === id)
    const addCard = () => adicionarFavorito({ id, titulo, capa })
    return(
        <CardContainer>
                <Link to={`/${id}`}>
                <ImgContent src={capa} alt={titulo} />
                <CardTitle>{titulo}</CardTitle>
            </Link>
            <ContainerIcon>
                { favFiltrado.length ? <CoracaoCheio onClick={()=> addCard()}/> : <CoracaoVazio onClick={()=> addCard()}/> }
            </ContainerIcon>
        </CardContainer>
    )
}

export default Card