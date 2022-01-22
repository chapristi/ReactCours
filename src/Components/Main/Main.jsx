
import React, { useState } from 'react';
import BlogList from "./BlogList";
import useFetch from "../useFetch";
import {Link} from "react-router-dom";
import PopUp from "./PopUp";



function Main(props) {
    const {data,isPending,error} = useFetch("https://127.0.0.1:8000/api/users?page=2");
    return (
        <>
            <Link to={"/about"}>retour à l'acceuil</Link>
            {error && error}
            {isPending && <img src='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif'></img> }
           {data &&  <BlogList blog={data} />}
           <PopUp/>


        </>
    )
}
export default Main;
