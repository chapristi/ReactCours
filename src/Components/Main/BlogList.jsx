import {Link} from "react-router-dom";


import React, { useState } from 'react';


function BlogList(props) {

    const [search,setSearch] = useState('');

    const HandleInput = (e) =>{
        //console.log(e.target.value)
        setSearch(e.target.value)

        const element = search.toLowerCase();
        return search.filter(user => user.email.toLowerCase().includes(element))
        



    }
    return (
        <>
            <div>
                <ul>
                    <input onChange={HandleInput.bind(search)} value={search} type="search"/>
                    {props.blog.map((blog)=>(
                        <div className="blog-preview"  key={blog.id}>
                            <p>{blog.email}</p>
                            <p>{blog.roles[0] } {blog.roles[1] && blog.roles[1]}</p>

                            <Link to={"/"} params={{ token: "qsdflj" }} >Voir plus</Link>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default BlogList;
