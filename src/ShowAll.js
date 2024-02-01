import { faExclamation, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react'

export default function ShowAll() {
    const [categories, getCategories] = useState([]);
    
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/category');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          getCategories(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchCategories();
    }, []);
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title:'Actions',
        dataIndex:'actions',
        key: 'actions',
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, record) => (
          <span>
            <button><FontAwesomeIcon icon={faPencil}/></button>
            <button><FontAwesomeIcon icon={faExclamation}/></button>
            <button><FontAwesomeIcon icon={faTrashCan}/></button>
          </span>
        ),
      },
    ];
  return (
    <div style={{width:'50vw',margin:'auto'}}>
      <Table pagination={false} dataSource={categories} columns={columns}/>
    </div>
  );
}