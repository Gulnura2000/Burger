import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers"
import Burger from "./Burger";
import base from "../Base";
import SignIn from "./auth/SignIn";
import PropTypes from 'prop-types';
import firebase from "firebase";
export default class App extends React.Component{
    static propTypes = {
        match: PropTypes.object,
      };


    state = {
        burgers: {},
        order: {},
    };

componentDidMount(){
  
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }


    this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`,{
        context: this,
        state: 'burgers'
    }) 
    
}
 componentDidUpdate(){
     localStorage.setItem(this.props.match.params.restaurantId ,JSON.stringify(this.state.order))
 }

componentWillUnmount(){
base.removeBinding(this.ref)

}

addburger = (burger)=>{
    // console.log('burger' , burger);
    // 1 делаем копию  обьекта state
    const burgers = {...this.state.burgers};
    // 2 добавить новый бургер в переменную burgers
    burgers[`burger ${Date.now()}`] = burger;
    // 3 записать наш новый обьект burgers в state
    this.setState({burgers})
    console.log(Date.now());
}

updateburger = (key, updatedBurger)=>{
     // 1 делаем копию  обьекта state
     const burgers = {...this.state.burgers};
     // 2 обновляем нужный burger
     burgers[key] = updatedBurger
     // 3 записать наш новый обьект burgers в state
     this.setState({burgers:burgers})


}


LoadSamleBurgers = ()=>{
    this.setState({
        burgers: sampleBurgers
    })
}
addtoOrder = (key)=>{
      // 1 делаем копию  обьекта state
      const orders = {...this.state.order}
      // 2 добавить ключ к заказу со значением , лиьо обнавит текущее значение
      orders[key] = orders[key]+1||1;
       // 3 записать наш новый обьект order в state
       this.setState({order: orders})


}


deleteburger = (key)=>{
// 1 делаем копию  обьекта state
const burgers = {...this.state.burgers};
// 2 удаляем burger
burgers[key] = null
 // 3 записать наш новый обьект burgers в state
 this.setState({burgers:burgers})
}
deleteFromOrder = (key)=>{
       // 1 делаем копию  обьекта state
       const orders = {...this.state.order}
       // 2 удаляем burger
       delete orders[key]
        // 3 записать наш новый обьект order в state
        this.setState({order: orders})
}



handlogAuth =  async()=>{
    await firebase.auth().signOut()
    window.location.reload()
}

    render(){
        return(
            <SignIn>
        <div className="burger-paradise">
            <div className="menu">
                <Header title="Osh Burger" />

                <ul>
                {Object.keys(this.state.burgers).map(key=>{
                    return <Burger  addtoOrder = {this.addtoOrder}
                    key={key}
                    index= {key}
                    details={this.state.burgers[key]}
                    />
                })}
                </ul>
            </div>
            <Order title = "Ваш заказ"
             burgers = {this.state.burgers} 
            order = {this.state.order}
            deleteFromOrder = {this.deleteFromOrder} />
            <MenuAdmin LoadSamleBurgers = {this.LoadSamleBurgers} 
            addburger = {this.addburger}
             title = "Управление меню"
             Burgers = {this.state.burgers}
             updateburger = {this.updateburger}
             deleteburger = {this.deleteburger}
             handlogAuth = {this.handlogAuth}
             />
        </div>
        </SignIn>
        )
    }
}