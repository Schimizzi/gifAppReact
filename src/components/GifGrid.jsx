import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs (category);

    console.log( {images, isLoading} )
    

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifGridItem key={image.id} 
                        { ...image}
                        />

                    ))
                }
            </div>
        
        </>
    )
}