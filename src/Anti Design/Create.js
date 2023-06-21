import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {

   const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');



     

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6492e92a428c3d2035d0e388.mockapi.io/crud', {
            name: name,
            age: age,
            email: email,
            phone:phone,
            gender:gender
        })
        
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
            
                    {/*
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>*/}
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}
 >
                        <div className='form-group'>
                            <label>Enter Name : </label>
                            <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)}  />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age : </label>
                            <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)}   />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email : </label>
                            <input type='email' placeholder='Email'  className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Phone : </label>
                            <input type='number' placeholder='Phone'  className='form-control' onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div  className='form-group' style={{marginTop:'10px'}}>
                            <label> Select Gender : </label><br/>
                            <select className='custom-select' value={" "}  requiredMark="optional"
                            onChange={(e) => setGender(e.target.value)}>
                                <option value={'male'}  > Male </option>
                                <option value={'female'} > Female </option>

                            </select>
                        </div>
                        <br />  
                        <div className='d-grid'>
                            <input type='submit' value='Submit' className='btn btn-primary' />
                        </div>
                    </form>

                   {name}
                    <br />
                    {age}
                    <br />
                    {email}
                    <br />
                    {phone}
                    <br/>
                    {gender}
                </div>
                
            </div>
        </>
    )
}

export default Create;