import {React, useEffect, useState, } from "react";
import { Result, Table } from 'antd';
import axios from 'axios';
const Appantd = () => {
    const [columns,setColumns] = useState([]);
    const [dataSource,setDataSource] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then((result)=>{
        const list = result.quotes || []
        const firsObject = list[0] || {}
        const cols = []
        for (const key in firsObject) {
            const col = {
                title: key,
                dataIndex: key
            }
            cols.push(col)
            
        }
        setColumns(cols)
        setDataSource(result.quotes)
      })

    },[])
    
    return (
        <div>
         <Table dataSource={dataSource} columns={columns} />
        </div>
       
    )
}
export default Appantd;