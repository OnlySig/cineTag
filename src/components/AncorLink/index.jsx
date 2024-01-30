import { Link } from "react-router-dom"
import styled from "styled-components"

const Ancor = styled.li `
    list-style: none;
    a {
        text-decoration: ${props => props.$localizer ? 'underline' : 'none'};
        color: #f0f0f0;
    }
`

const AncorLink = ({ local, url, children }) => {
    return(
        <Ancor $localizer={local}>
            <Link to={url}>{children}</Link>
        </Ancor>
    )
}
export default AncorLink