import React from "react";

const Search = (props) => {
    return (




<div>
<h1>Meteo App</h1>
    <input onChange = {props.search}></input>
    <button onClick = {props.btn}>Search</button>   

</div>


    )
}
export default Search;