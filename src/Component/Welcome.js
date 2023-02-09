import {Component} from 'react'
class Welcome extends Component {
   constructor(props){
    super(props)
    this.state={
        txt : "skander",
        count : 0,
        depart : [
            {id:1,nom:"Info"},
            {id:2,nom:"GC"}
        ]
       
    };
   }
   Incrementer=()=>{ this.setState(
    {count:this.state.count +1 ,
    txt : "mazgarrr",
    depart :[...this.state.depart,
    {id:3,nom:'ff'}]}
   )}

    render() { 
        return (<> <h1>Bonjour {this.state.txt} </h1> 
        <h1>count: {this.state.count}</h1>
        <ul>
            {this.state.depart.map((e)=>{
            return <li key={e.id}>
            {e.nom} 

            </li>})}
        </ul>
        <button onClick={this.Incrementer}>Increment</button>
        </>
        );
        
    }
}
 
export default Welcome;