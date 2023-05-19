import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteUser} from './UserReducer';
const Home = () => {
    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    const handleDelete=(id)=>{
        dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container'>
     <h2>Crud App with Json Server</h2>
     <Link to="/create" className='btn btn-success my-3'>Create +</Link>
     <table className='table'>
        <thread>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thread>
        <tbody>
          {users.map((user,index)=>(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-sm m-2 btn-primary'>Edit</Link>
                <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
     </table>    
    </div>
  )
}

export default Home