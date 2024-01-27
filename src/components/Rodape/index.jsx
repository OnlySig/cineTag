import styled from "styled-components"

const ContainerRodape = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    width: 100%;
    background-color: #000;
    h3{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
    }
`

const Rodape = () => {
    return(
        <ContainerRodape>
            <h3>Desenvolvido por aluno da Alura.</h3>
        </ContainerRodape>
    )
}

export default Rodape