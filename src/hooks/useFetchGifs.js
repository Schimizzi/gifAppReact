import { useState, useEffect } from "react";

const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KwjPriMMCaeOxgzvgRGo20aHYbVGxX2s&q=${category}&limit=10`;
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map (img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);

    return gifs
} 

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState ([]);

    const getImages = async() => {
        const newImages = await getGifs (category);
        setImages (newImages);
    }

    useEffect( () => {
        getImages();
    }, [ ]);

    return {
        images: images,
        isLoading: true
    }
}