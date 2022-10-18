import React, { useEffect } from 'react'
import { useState } from 'react'
import UpdateUser from './UpdateUser';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [userdata, setUserdata] = useState(null);

    const getUserData = async () => {

        const response = await fetch('http://localhost:5000/user/getall')
        console.log(response.status);
        const data = await response.json();

        console.log(data);
        setUserList(data);
    }

    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/'+id, {
            method: 'DELETE'
        })

        console.log(res.status);
        getUserData();
    }

    const update = (user) => {
        console.log(user);
        setUserdata(user);
        setShowForm(true);
    }

    useEffect(() => {
        getUserData();
    }, [])


    const displayUsers = () => {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user) => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={ () => { deleteUser(user._id) }} >Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-primary' onClick={ () => { update(user) } } >Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }


  return (
    <div>
        <div className='container-fluid'>
            <h1 className='text-center'>Manage Users</h1>
           
            <div className='row'>
                <div className="col">
                    {displayUsers()}
                </div>
                {
                    showForm ? 
                    <div className='col'>
                        <UpdateUser userdata={userdata} getUserData={getUserData} setShowForm={setShowForm} />
                    </div>
                    :
                    ""
                }
                
            </div>

        </div>
    </div>
  )
}

export default ManageUser;