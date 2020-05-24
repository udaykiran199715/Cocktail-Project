import React from 'react'
// import { v4 as uuidv4 } from 'uuid'

function Name(props) {
  // let {item} = props.items
  //console.log(props.items)
  return (

    <div className="col-12 col-lg-6" style={{ backgroundColor: " darkred" }}>
      <div className="card mb-3" style={{ backgroundColor: "darkred" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img width="200px" height="275px" src={props.items.strDrinkThumb} className="card-img p-3" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title"><span>Name:</span>{props.items.strDrink}</h3>
              <h4><span>Category:</span>{props.items.strCategory}</h4>
              <h4><span>Alcohol:</span>{props.items.strAlcoholic}</h4>
              <h4><span>Glass:</span>{props.items.strGlass}</h4>
              <p className="card-text text-truncate"><span>Instructions:</span>{props.items.strInstructions} <h6 className="text-primary" data-toggle="modal" data-target="#exampleModalCenter">seemore</h6></p>
              <p className="card-text"><span>Ingredients:</span> {props.items.strIngredient1}, {props.items.strIngredient2}, {props.items.strIngredient3} {props.items.strIngredient4} {props.items.strIngredient5} {props.items.strIngredient6} {props.items.strIngredient7} {props.items.strIngredient8}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal  fade" style={{fontSize:"20px"}} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header " style={{backgroundColor:"darksalmon"}}>
              <h5 className="modal-title text-dark" id="exampleModalCenterTitle">Instructions</h5>
              <button type="button" className="close text-dark" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{backgroundColor:"black"}}>
              {props.items.strInstructions + 2}
            </div>

          </div>
        </div>
      </div>


    </div>


  )
}

export default Name