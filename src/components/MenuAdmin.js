import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from 'prop-types'
import firebase from "firebase";
   class MenuAdmin extends React.Component{
    state = {
      photo: '',
      user:''    
    }
     
  static propTypes = {
    burgers: PropTypes.object,
    deleteBurger: PropTypes.func,
    updateBurger: PropTypes.func,
    addBurger: PropTypes.func,
    loadSampleBurgers: PropTypes.func,
  };


  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.authHendler({user})
      }
    })
      }
    
    authHendler = async authData =>{
    console.log(authData);
    const {email , photoURL} = authData.user
    this.setState({user:email, photo: photoURL} )
    
    }

    render(){
      const {user,photo}= this.state
      const avatar = photo ? photo : '/images/avatar.png'
      return(
         <div className="admin-nenu">

          {user ? (<div className="login-header">
             <div className="avatar">
               <img src={avatar} alt={user} />
             </div>
             <button className="buttonLogout" onClick={this.props.handlogAuth}>Выйти</button>
           </div>) : null}
        <h2> {this.props.title} </h2>
        { Object.keys(this.props.Burgers).map(key =>{
          return <EditBurgerForm 
          key={key}
          index = {key}
          Burgers = {this.props.Burgers[key]}
          updateburger = {this.props.updateburger}
          deleteburger = {this.props.deleteburger}
           />
          
        }) }
        <AddBurgerForm addburger = {this.props.addburger}
       
        />
        <button onClick={this.props.LoadSamleBurgers}>загрузить в меню</button>
      

    </div>
      )
    }
   }

     

export default MenuAdmin;