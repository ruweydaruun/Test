import {React, } from "react";
import 'antd/dist/reset.css';
import { Button,Input, Select } from 'antd';

import {UserOutlined } from '@ant-design/icons';

const Appantd = () => {

    //button
    const onButtonClick=(e) =>{
        console.log("Button Clicked");
    }

    //Select
    const subjects = ["React,Java, Communication Skills, Telecommunication, Computer Organization Architecture, Research Methodology"];

    return (
       <div className="App">
       
       <Input className = "inputname" 
       placeholder="Please Enter Your Name" 
       prefix = {<UserOutlined />}
       allowClear
       />
      <p>Please Select Your Favorate Subject</p> 

       <select  placeholder = "Select Subject"  style = {{fontColor:"black"}}className = "select"  >
        {subjects.map((subject,index) => {
            return <Select.Option key = {index} vlue = {subject}>{subject}</Select.Option>
        })}
       </select>
       
        <Button type = "primary" onClick={onButtonClick} >    Primary Button
        </Button>
      

       </div>
    )
}
export default Appantd;