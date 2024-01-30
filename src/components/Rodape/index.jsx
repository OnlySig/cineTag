import styled from "styled-components"

const ContainerRodape = styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    width: 100%;
    background-color: #000000dc;
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