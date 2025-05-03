import padData from "./pads"
import { useState } from "react"

export default function App() {

    const [pad,setPad]= useState(padData)
    return (
        <main>
            <div className="pad-container">
                {pad.map((eachPad) => <button key={eachPad.id}></button>)}
            </div>
        </main>
    )
}
