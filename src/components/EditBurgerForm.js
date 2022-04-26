import React from "react";
import PropTypes from 'prop-types';

export default class EditBurgerForm extends React.Component {
  static propTypes = {
    burger: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    index: PropTypes.string,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func
  };


 
  handleChange = event => {
    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? parseFloat(event.currentTarget.value) || 0
          : event.currentTarget.value
    };
    this.props.updateBurger(this.props.index, updatedBurger);
  };
  render() {
    return (
      <div className="burger-edit">
           <input onChange={this.handleOnChange}  name = 'name' type="text"  value={this.props.Burgers.name}/>
            <input onChange={this.handleOnChange}  name = 'price' type="text" value={this.props.Burgers.price}   />
            <select  name = 'status' className="status" value={this.props.Burgers.status} >
                <option value="available">Доступно</option> 
                <option value="unavailable">не доступно</option> 
                </select>
            <textarea onChange={this.handleOnChange}  name = 'desc' type="text" value={this.props.Burgers.desc}  />
            <input onChange={this.handleOnChange}  name = 'image' type="text" value={this.props.Burgers.image} />
            <button onClick={()=>this.props.deleteburger(this.props.index)}>  удалить из меню </button>
      </div>
    )
  }
}

