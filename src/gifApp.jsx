import React, { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifApp = () => {

    const [categories, setCategories] = useState(['Family Guy']);

    const onAddCategory = ( newCategory ) => {

        if (categories.includes(newCategory) ) return;
        console.log(newCategory)
        setCategories( [newCategory, ...categories ] )

    };


    return (
        <>
            {/*un titulo*/}
            <h1>Buscador de  Gif</h1>
        
            {/*  un input  */}
            <AddCategory
            // setCategories = {setCategories}
                onNewCategory = {event => onAddCategory(event)}
            />
            {/* listado de gif */}
            <ol>
                { categories.map( (category) => ( //return implisito
                        <GifGrid key={category} category={category}  />
                    )
                )}
                
            </ol>
                {/*gif items */}

        </>
    )
}

