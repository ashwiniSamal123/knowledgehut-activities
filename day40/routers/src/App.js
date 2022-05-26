import {Link , Route, Routes } from 'react-router-dom';
import {Forms} from './component/Form'
import axios from 'axios';
import { useState } from 'react';

function Users(){
  let [users, setUsers] = useState([]);
  let handleclick=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUsers(res.data)})
    .catch( error => console.log(error))
  }
  return (
    <div>
      <h2>List of all uses from fake API</h2>
      <button onClick = {handleclick}>Load</button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th><th>Name</th><th>Username</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=> <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>)
          }
        </tbody>

      </table>
    </div>
  )
}

function Home(){
  return(
    <div>
      <h2>Home Component</h2>
    </div>
  )
}
function Contact(){
  return(
    <div>
      <h2> This is contact page</h2>
    </div>
  )
}
function About(){
  return(
    <div>
      <h2>Thsis is About us page</h2>
    </div>
  )
}
function App(){
  return (
    <div>
      <h1 className='text-center'>This is an Exampple of SPA</h1>
      <div>
        <Link to = "/home">Home</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to = "/about">About us</Link> |
        <Link to ="/Form">Forms</Link> |
        <Link to ="/fetch">Fetch</Link>

      </div>
      <hr/>
      <div>
        <Routes>
          <Route path="/home" element = {<Home/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/form" element = {< Forms/>}></Route>
          <Route path="" element = {< Home/>}></Route>
          <Route path="/fetch" element = {< Users/>}></Route>

        </Routes>
      </div>
    </div>
  )
}
export default App;
