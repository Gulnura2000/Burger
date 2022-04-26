import React from "react";
import restaurants from "../sample-restaurants"
// import {Router, Link} from "react-router-dom"

function Landing(){
    const [state, setstate] = React.useState(
        {
            display: false,
            title: "",
            url: ''
        }
    );

  let  getTitle = (e)=>{
        const {url,title}= e
       setstate ({url:url,title:title,display:false})
  
    }
  
    let  displayList =()=>{
          const display = display
          setstate({display: !display})
      }
  
     let goToRestaurant = ()=>{
        //   const {url} = state
     
    //   const {history} = props
    //   console.log(this.context.history);
  
      }

return(
    <div className="restaurant_select">
    <div className="restaurant_select_top">

<div onClick={displayList} className="restaurant_select_top-header "> 
{this.state.title?this.state.title :"Выбери ресторан" }
</div>

        <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
        </div>
    </div>

{this.state.display ?(
<div className="restaurant_select_bottom">
        <ul>
      {restaurants.map(e =>{
        return <li onClick={()=>{getTitle(e)}} key={e.id}>{e.title}</li> 
      })}
        </ul>
    </div> ): null } 
   {this.state.title && !this.state.display ? 
   ( <button onClick={goToRestaurant} >перейти в ресторан</button>) :null}
</div>
)
}


   
    

    
//    displayList = this.displayList.bind(this)
//   getTitle = (e)=>{
//       const {url,title}= e
//      this.setState({url:url,title:title,display:false})

//   }

//     displayList =()=>{
//         const display = this.state.display
//         this.setState({display: !display})
//     }

//     goToRestaurant = ()=>{
//         const {url} = this.state
//       //  console.log(url);
//     // console.log(this.props);
//     // console.log(this.state);
//     const {history} = this.props
//     // console.log(history);
//     console.log(this.context.history);

//     }

//     render(){
//         return(
          
//                 <div className="restaurant_select">
//                     <div className="restaurant_select_top">

//             <div onClick={this.displayList} className="restaurant_select_top-header "> 
//            {this.state.title?this.state.title :"Выбери ресторан" }
//             </div>

//                         <div className="arrow_picker">
//                             <div className="arrow_picker-up"></div>
//                             <div className="arrow_picker-down"></div>
//                         </div>
//                     </div>

//            {this.state.display ?(
//            <div className="restaurant_select_bottom">
//                         <ul>
//                       {restaurants.map(e =>{
//                         return <li onClick={()=>{this.getTitle(e)}} key={e.id}>{e.title}</li> 
//                       })}
//                         </ul>
//                     </div> ): null } 
//                    {this.state.title && !this.state.display ? 
//                    ( <button onClick={this.goToRestaurant} >перейти в ресторан</button>) :null}
//                 </div>
               
           
//         )
//     }
// }
export default Landing