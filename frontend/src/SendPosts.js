import react from 'react';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
require('dotenv/config');

function SendPosts() {

const {register, handleSubmit} = useForm();



const [posts, setPosts] = useState({
    title: '',
    description: '',
});  


    const onSubmit = (data) => {
        axios.post('http://localhost:'+ process.env.REACT_APP_API_PORT +'/posts/', data )
        .then(res =>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit)} >
         <div>
             
             <input placeholder="Title" type="text " name="title" ref={register}  />
         </div>
         <div>
             <input placeholder="Description" type="text " name="description"  ref={register}  />
         </div>
         <button type="submit"> Sign Up  </button>
     </form>
   </div>
  );
}

export default SendPosts;
