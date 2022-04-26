import React, { Component } from 'react'
import Login from './Login'
import firebase from 'firebase'
import { firebaseApp } from '../../Base'

export default class SignIn extends Component {
  state = {
user: ""
  }


  componentDidMount(){
firebase.auth().onAuthStateChanged(user=>{
  if(user){
    this.authHendler({user})
  }
})
  }

authHendler = async authData =>{
console.log(authData);
const {email} = authData.user
this.setState({user:email} )

}

  authenticate = ()=>{
    const authenProvider= new firebase.auth['GithubAuthProvider'](); 
    firebaseApp
    .auth()
    .signInWithPopup(authenProvider)
    .then(this.authHendler)
 
  }
  render() {
    if(!this.state.user){
      return <Login  authenticate = {this.authenticate}/>
    }
  return this.props.children
  }
}

