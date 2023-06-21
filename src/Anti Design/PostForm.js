import React, { useState } from 'react';
import { Formik, Field, Form } from "formik";
import  Axios  from 'axios';
function PostForm(){
   
    const [mytitle, setTitle] = useState()
    const [mybody, setBody] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:mytitle,
            body:mybody
        })
        .then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(error)

        })
    }



    return(
        <div className="App">
        <h1 style={{fontFamily:'arial', marginTop:'10px'}}>Post Form</h1>
        <Formik >
          <Form style={{fontFamily:'arial', marginTop:'10px'}} onSubmit={handleSubmit}>
            <div>
             <label> Enter The Title:</label>
             <input type='text' name='Title' value={mytitle} onChange={(e) => setTitle(e.target.value)} className='form-control' /> 
            </div>

            <div >
             <label> Enter The Body:</label>
             <input type='text' name='Body' value={mybody} onChange={(e) => setBody(e.target.value)} className='form-control' /> 
             
            </div>
            <div>
             <input type='submit' value='post'  className='btn btn-primary p-2 text-center' style={{color: 'black',marginTop:'5px'}}/> 
            </div>
          </Form>
        </Formik>
      </div>
    )
}

export default  PostForm;
  

