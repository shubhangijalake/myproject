import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([])

  //   Name:"shubhu", Email:"shubhu@gmail.com", Age:32
  // }]);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setUsers(result.data) )
      
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
   
    axios.delete('http://localhost:3001/deleteUser/' +id)
      .then(res=>console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'> 
        <div className='w-60 bg-white rounded p-3'>
          <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
       
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}> 
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Update</Link>
                    <Button variant="danger" onClick={(e) => handleDelete(user._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
