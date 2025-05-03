import React from "react"
import padsData from "./pads"
import Pad from "./Components/Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    function toggle(){
    console.log("clicked!")}

    const buttonElements = pads.map(pad => (
        <Pad onClick={toggle} isOn={pad.on} color={pad.color} key={pad.id} />
    ))


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
