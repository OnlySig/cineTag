import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

export const VideosContext = createContext()
VideosContext.displayName = "Videos"

export function VideosProvider({ children }) {
    const [videos, setVideos] = useState([])
    return(
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}
export function useVideosContext() {
    const {videos, setVideos} = useContext(VideosContext)
    const [video, setVideo] = useState({})

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/OnlySig/JSON-cineTag/videos')
            .then(resp => resp.json())
            .then(dados => setVideos(dados))
    }, [setVideos])

    const getVideo = useCallback((id) => {
        fetch(`https://my-json-server.typicode.com/OnlySig/JSON-cineTag/videos/?id=${id}`)
            .then(resp => resp.json())
            .then(dados => setVideo({...dados}))
    }, [])

    return {videos, video, getVideo}
}

export default function FavoritosProvider({ children }){
    const [favorito, setFavorito] = useState([])
    return(
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext)
    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
        let novaLista = [...favorito]
        if(!favoritoRepetido) {
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }
        const filtro = novaLista.filter(item => item.id !== novoFavorito.id)
        return setFavorito(filtro)
    }
    return {
        favorito,
        adicionarFavorito
    }
}