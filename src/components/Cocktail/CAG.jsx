import React from 'react'

function Categories(props) {

  return (

    <div className="col-12 col-md-6 col-lg-3 text-white" style={{ backgroundColor: "black" }}>
      <div class="card" style={{ backgroundColor: "black" }}>
        <img className="card-img p-3" width="200px" height="275px" src={props.items.strDrinkThumb} alt={props.items.strDrink} />
        <div className="card-body">
          <h3 style={{ color: "cyan" }}>{props.items.strDrink}</h3>
        </div>
      </div>

    </div>


  )
}

export default Categories