function Emp(){
    let employee = [
    {id:100, name:'Raj', salary:20000, address:{state:'Maharashtra', city:'pune'} },
    {id:100, name:'Raj', salary:20000, address:{state:'Maharashtra', city:'pune'} },
    {id:100, name:'Raj', salary:20000, address:{state:'Maharashtra', city:'pune'} },
    {id:100, name:'Raj', salary:20000, address:{state:'Maharashtra', city:'pune'} }
  ]
  return (
    <div >
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr><th>Employee Id</th><th>Employee name</th><th>Employee Salary</th><th>Employee State</th><th>Employee city</th>
          </tr>
        </thead>
        <tbody>{
          employee.map((employee,index)=>
          <tr key={index}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.salary}</td>
            <td>{employee.address?.state}</td>
            <td>{employee.address?.city}</td>
          </tr>)}

        </tbody>
      </table>


    </div>
  )
}
export default Emp;