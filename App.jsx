import padData from "./pads"
import { useState } from "react"

export default function App(props) {

    const [pad,setPad]= useState(padData)
    const styles = {
        backgroundColor : props.darkMode ? "#222222" : "#cccccc"  
    }
    return (
        <main>
            <div className="pad-container">
                {/* always add key when mapping */}
                {pad.map((eachPad) => <button style={styles} key={eachPad.id}></button>)} 
            </div>
        </main>
    )
}
