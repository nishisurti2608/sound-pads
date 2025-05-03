

export default function Pad (props){
  
 
   
   
    return <button onClick={props.onClick}  className = {props.isOn ? "on" : "null"} style={{backgroundColor:props.color}}></button>
 

}