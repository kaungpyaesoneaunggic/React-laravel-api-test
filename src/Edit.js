import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Edit() {
  const {id}=useParams();
  const [editName,setEditName]=useState('');
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/category/ /${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: editName })
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
  
      console.log('Success');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const fetchName = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/category/edit/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json(); // Parse the JSON response
      setEditName(data.name);
      console.log(data.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {  
    fetchName();
  }, []);
  

  return (
    <div>
      <Form onSubmitCapture={handleSubmit}>
        <div style={{ height:'100vh' }} className='d-flex align-items-center justify-content-center flex-column'>
        <Input
        style={{ width:'500px',fontSize:'30px', textAlign:'center', margin:'20px'}}
        type="text"
        value={editName}
        onChange={(event) => setEditName(event.target.value)}
        placeholder="Enter name"/>
        <Button
        style={{ width:'500px', margin:'20px'}}
        htmlType='submit'
        >Submit</Button>
        </div>
      </Form>
    </div>
  )
}
