import React from 'react'
import Cards from './Cards'


const Animals = () => {
    return (
    <div className="Main">

       <Cards
       image="https://cdn.britannica.com/37/125637-050-775F1B98/Agama.jpg"
       imagetitle="Reptile"
       title="Lizard"
       text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
       across all continents except Antarctica"
       />

       <Cards
       image="https://picsum.photos/536/354"
       imagetitle="Horse"
       title="Horse"
       text="A pet, or companion animal, is an animal kept primarily for a person's company or ... in any"
       />

     < Cards
       image="https://ichef.bbci.co.uk/news/320/cpsprodpb/AAE7/production/_111515734_gettyimages-1208779325.jpg"
       imagetitle="Cats"
       title="Cats"
       text="A pet, or companion animal, is an animal kept primarily for a person's company or ... in any"
       />

     {/* < Cards
       image="https://ichef.bbci.co.uk/news/320/cpsprodpb/AAE7/production/_111515734_gettyimages-1208779325.jpg"
       imagetitle="Cats"
       title="Cats"
       text="A pet, or companion animal, is an animal kept primarily for a person's company or ... in any"
       /> */}
    </div>


    )
}

export default Animals
