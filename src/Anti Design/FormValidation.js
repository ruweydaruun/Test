import React from 'react';
import 'antd/dist/reset.css';
import { Button,Checkbox,DatePicker,Input,Select,Form } from 'antd';



function FormValidation() {

    
  return (
    <div className="App">
      <header className="App-header">
       <Form autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{span: 14 }}>
       <Form.Item 
       name="FullName" 
       label="FullName" 
       rules={[{
        required: true,
        message: "please Enter your name",

       },
         {whitespace: true},
         {min: 5},
      ]}
      hasFeedback
        >
        <Input placeholder='Type Your Name'/>
        </Form.Item>

         <Form.Item name="Email" label="Email"
           rules={[{
            required: true,

           },
           
           {type: 'email', message: "please Enter A valid Email"},
          ]}
          hasFeedback
         >
        <Input placeholder='Type Your Email'/>
        </Form.Item>

         <Form.Item 
         name="PassWord" 
         label="PassWord"
         rules={[{
          required: true,
         },
         {min: 6},
        
         ]}
         hasFeedback
         >
        

        <Input.Password placeholder='Type Your PassWord'/>
        </Form.Item>

         <Form.Item 
         
         name="ConfirmPassword" 
         label="ConfirmPassword"
         rules={[{
          required: true,
         },
        ({ getFieldValue }) => ({
        validator(_, value){
          if (!value || getFieldValue("PassWord") === value){
            return Promise.resolve();
          }
         return Promise.reject("the two password you entered that not mach");
        },
        }),
        ]}
        hasFeedback
         >
        <Input.Password placeholder='Confirm your Password'/>
        </Form.Item>
       

        <Form.Item name="Gender" label="Gender" requiredMark="optional" >
        <Select placeholder=' Select Your Gender '>
        <Select.Option value="male">Male</Select.Option>
        <Select.Option value="female">Female</Select.Option> 
        </Select>
        </Form.Item>

        <Form.Item name="dob" label="Date Of Birth"
        rules={[{
          required: true,
          message: "select Your BirthDay"

         },]}
              hasFeedback
         >
     
        <DatePicker style={{width:'100%'}} picker='Date' placeholder='Select your Date Of Birth'/>
        </Form.Item>

        <Form.Item Name="agreement" 
        wrapperCol={{ span: 24 }}
        rules={[{
          required: true,
          message: "to proceed, you need to agree with our terms and coditions"
         },
         
        
        ]}
        >
       <Checkbox>{" "}
       Agree To Our <a href='#'>Terms And Conditions</a></Checkbox>
        </Form.Item>
        
        <Form.Item wrapperCol={{ span: 24 }}>
       <Button block type="primary" htmlType="submit">Register</Button>
        </Form.Item>


       </Form>
      </header>
    </div>
  );
}

export default FormValidation;