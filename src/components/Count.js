import React from 'react'



const food = [
     {id :1, name:"Egg"}, 
     {id:2, name:"Bread"}, 
     {id:3, name:"Mango" }
    ]
const Count = () => {
    return (
        <div>
            <h1>My Favorit Food</h1>
            {food.map(foody => 
            <ul key={foody.id}>
                <li> {foody.name} </li>
            </ul>
            )}
        </div>
    )
}


export default Count