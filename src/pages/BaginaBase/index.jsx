import { Outlet } from "react-router-dom"
import HeaderBar from "../../components/HeaderBar"
import FavoritosProvider, { VideosProvider } from "../../components/contexts/Favoritos"
import Rodape from "../../components/Rodape"

const PaginaBase = () => {
    return (
        <main>
            <HeaderBar />
            <VideosProvider>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </VideosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase