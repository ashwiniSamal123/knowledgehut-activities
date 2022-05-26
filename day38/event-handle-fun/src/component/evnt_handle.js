function Evnt(){
    let handleClick = ()=>{console.log('handleclick is called');}
    let handleClick2= (e)=>{console.log(e)}
    return(
        <div>
            <h1>Evwnts in React js</h1>
            <button onClick={handleClick}> Button 1 </button>&nbsp;
            <button onClick={()=>{console.log('handleclick by inline')}}> Button 2 </button>&nbsp;
            <button onClick={handleClick2}> Button 3 </button>&nbsp;
            <button onClick={(e)=>{console.log(e)}}> Button 4 </button>&nbsp;
        </div>
    )
}
export default Evnt;