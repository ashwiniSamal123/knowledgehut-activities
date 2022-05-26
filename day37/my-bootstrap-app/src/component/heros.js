function Heros(props){
    return( <div>
        <h5>Hello {props.name}</h5>
        </div>
    );
}
function Call(){
    let hero=["Varun Dhavan","Ranbeer Kapoor","Ritik Roshan","Vicky koushal"];

    return(
        <div>
            <h1>This is List OF Heros</h1>

        
        <h3>NAme of Heros:</h3>
        <ul>
        {
            hero.map((hero,index)=> <li Heros key= {index} name = {hero}>{hero}</li>)
        }
        </ul>
        
        </div>

    );
}
export default Call;