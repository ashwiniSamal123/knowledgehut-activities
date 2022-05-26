import {useState} from 'react';
export function Forms(){
    let [name, setName]= useState('');
    let [age, setAge] = useState('');

    return (
        <div>
            <h3>Simple login Form </h3>
            <form onSubmit ={(e)=>{e.preventDefault();console.log(`send ${name} and ${age} to backend`);setName('');setAge('');}}>
                <div><label> Username: <input type='text' autoComplete = 'off' name = 'n1'onChange = {(e)=>{setName(e.target.value)}}  value = {name}  ></input></label></div>
                <div><label>Age: <input type = 'number' autoComplete= 'off' name = 'n2' onChange =  {(e)=>{setAge(e.target.value)}} value = {age} ></input></label></div>
                <div><input type = 'Submit' value = 'Submit'></input></div>
                <div><h5>Hello {name}!..Your Age is {age}</h5></div>
            </form>

        </div>
    )
}