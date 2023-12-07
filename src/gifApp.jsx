import React, { useState } from "react";
import { AddCategory } from './components/AddCategory';


export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

   /*  const onAddCategory = () => {
        setCategories( [ ...categories, 'Valorant' ] )

    }; */


    return (
        <>
            {/*un titulo*/}
            <h1>Buscador de  Gif</h1>
        
            {/* un input */}
            <AddCategory setCategories = {setCategories}/>
            {/* listado de gif */}
            <ol>
                { categories.map( category => {
                    return <li key={ category } >{category}</li>
                })}
                
            </ol>
                {/*gif items */}

        </>
    )
}

