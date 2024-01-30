import styled from "styled-components"

const TitleElement = styled.h1`
    font-weight: 500;
    text-align: center;
`

const Titulo = ({children}) => {
    return(
        <TitleElement>
            {children}
        </TitleElement>
    )
}

export default Titulo