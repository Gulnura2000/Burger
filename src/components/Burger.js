import React from "react";
import  PropTypes from "prop-types";

   class Burger extends React.Component{

static propTypes = {
    details:PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        desc: PropTypes.string,
        status: PropTypes.string
    }),
    index: PropTypes.string,
    addtoOrder: PropTypes.func
}


handleClick = ()=>{
    this.props.addtoOrder(this.props.index);
}

    render(){
        const {image, name,price,desc,status} = this.props.details;
        const isAvailable = status=== "available"
    
        
      return(
  <div>
      <li className="menu-burger">
          <div className="image-container">
              <img src={image} alt="" />
          </div>
          <div className="burger-details">
              <h3 className="burger-name">{name}
              <span className="">{price}  Сом</span></h3>
              <p>{desc}</p>
              <button onClick={this.handleClick} className="buttonOrder" disabled = {!isAvailable}>
                  {isAvailable ? "заказать" : 'временно нет'}</button>
          </div>
      </li>
  </div>
      )
    }
   }

     

export default Burger ;
