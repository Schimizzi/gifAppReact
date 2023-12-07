import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(inputValue);
        setCategories( categories => [inputValue, ...categories] )
    }
    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input type="text"
                placeholder="buscar gif"
                value={ inputValue }
                onChange={(event) => onInputChange(event)}
            />
        </form>
        
    )
}