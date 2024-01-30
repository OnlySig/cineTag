import styled from "styled-components"

const BgElement = styled.div`
    background-image: url('${props => props.$img}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 347px;
`

const Banner = ({ img }) => {
    return(
        <BgElement $img={img}/>
    )
}

export default Banner