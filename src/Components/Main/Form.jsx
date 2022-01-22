import React, { useState } from 'react';


const Form = () =>{
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [author,setAuthor] = useState("mario");

    const HandleRightTitle = (value)=>{
        setTitle(value)
    }
    const  HandleRightDescription = (value)=>{
        setDescription(value)
    };
    const  HandleRightAuthor = (value)=>{
        setAuthor(value)
    };
    const HandleSubmit = (e)=>{
        e.preventDefault();
        if (isCorrect()){
            const datas = {title,description,author}
            console.log(datas);
            document.location.href="/";
            fetch("url",{
                method:"POST",
                headers: { "Content-Type" : "application/json" },
                body : JSON.stringify(datas)


            }).then(()=>{
                console.log('new blog added')
            })


        }


    }
    const isCorrect = ()=>{
        if (title !== "" && description !=="" &&author!== ""){
            return true
        }
        return false
    }



    return(
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={HandleSubmit} action="">
                <label >Blog title</label>
                <input value={title} onChange={(e)=>{
                    HandleRightTitle(e.target.value)
                }} type="text"/>
                <label >Blog description</label>
                <textarea value={description} onChange={(e)=>{
                    HandleRightDescription(e.target.value)
                }}/>
                <label >blog author</label>
                <select value={author} onChange={(e)=>{
                    HandleRightAuthor(e.target.value)
                }} >
                    <option value="luigi">luigi</option>
                    <option value="mario">mario</option>
                </select>
                <button type="submit">add blog</button>
                <p>{title}</p>
                <p>{description}</p>
                <p>{author}</p>

            </form>
        </div>
    )
}
export default Form;