import React from 'react'

function Ingredient(props) {
    return (

        <div>
<h3><span>Ingredient: </span>{props.items.strIngredient}</h3>
    <h4><span>Description: </span>{props.items.strDescription}</h4>
<h3><span>Alcohol: </span>{props.items.strAlcohol}</h3>
        </div>

    )
}


export default Ingredient