import React ,{useState} from "react";
import restaurants from "../sample-restaurants"
import PropTypes from 'prop-types';
// import {BrowserHistory}
// import {Router, Link} from "react-router-dom"

 const Landing = (props)=>{
  const [display, toggleDisplay] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

const displayList =()=>{ 
  toggleDisplay( !display)
}

  const getTitle = (e)=>{
    const {url,title}= e
    setTitle(title)
    setUrl(url)
  toggleDisplay(false)

}




 const goToRestaurant = ()=>{
      // const {url} = this.state   
    //  window.location.href = `/restaurant/${url}`
  props.history.push(`/restaurant/${url}`);
      
  }

  return(
          
    <div className="restaurant_select">
        <div className="restaurant_select_top">

<div onClick={displayList} className="restaurant_select_top-header "> 
{title?title :"Выбери ресторан" }
</div>

            <div className="arrow_picker">
                <div className="arrow_picker-up"></div>
                <div className="arrow_picker-down"></div>
            </div>
        </div>

{display ?(
<div className="restaurant_select_bottom">
            <ul>
          {restaurants.map(e =>{
            return <li onClick={()=>getTitle(e)} key={e.id}>{e.title}</li> 
          })}
            </ul>
        </div> ): null } 
       {title && !display ? 
       ( <button onClick={goToRestaurant} >перейти в ресторан</button>) :null}
    </div>
   

)
}

Landing.propTypes = {
  history: PropTypes.object
};
export default Landing