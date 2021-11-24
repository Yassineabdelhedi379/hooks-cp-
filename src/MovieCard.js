import React, { useState } from "react";

const MovieCard = props => {

 const [name , setName] = useState("Dachra");
 const [disc , setDisc] = useState("Dachra est un film d'horreur tunisien écrit et réalisé par Abdelhamid Bouchnak et sorti en 2018") ;

  
 const handleClick = () =>[setName('Titanic') , setDisc('Titanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997')]
 //const whenClick =() =>setDisc ('Titanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997') ;
 return (
   <div>
   <p>{name }</p>
   <h5>{disc }</h5>
   <button onClick={handleClick}>Click to change movie </button>
   </div>
 );
};
export default MovieCard ; 