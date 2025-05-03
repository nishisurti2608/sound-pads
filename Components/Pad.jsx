

export default function Pad (props){
  
 
   
   
    return <button 
    onClick={()=>props.toggle(props.id)}  
    className = {props.isOn ? "on" : "null"} 
    style={{backgroundColor:props.color}}>
     </button>
 

}