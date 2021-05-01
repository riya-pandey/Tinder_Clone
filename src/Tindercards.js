
import './TinderCards.css'
import React, {useState} from "react";
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core';
// import { SwipeableDrawer } from '@material-ui/core';

function Tindercards() {

    const[people,setPeople]=useState([
        {
            name:"Riya Pandey",
            url:"https://jackewilson.files.wordpress.com/2016/04/walston.jpg?w=656"
        },
        {
            name:"Elon Musk",
            url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        }
    ]);
const swiped=(direction,nametodelete)=>{
    console.log("romiving:"+ nametodelete)
}
const outOfFrame=(name)=>{
    console.log(name+"left the screen")
}
    return (
        <div className="tinderCards">
        <div className="tinderCards__cardContainer">

       </div>
        {people.map((person)=>(
           <TinderCard 
           className="swipe"
        //    onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
           preventSwipe={['up', 'down']}
           key={person.name}
           onSwipe ={(dir)=> swiped(dir, person.name)}
           onCardLeftScreen={()=>outOfFrame(person.name)}
           >
<div
style={{backgroundImage:"url("+ person.url+ ")"}}
className="card"
>
<h3 style={{color:"white",position:"absolute",bottom:"0"}}>{person.name}</h3>
</div>       
 </TinderCard>
        ))}
        </div>
    )
}

export default Tindercards
