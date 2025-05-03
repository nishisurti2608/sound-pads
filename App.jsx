import React from "react"
import padsData from "./pads"
import Pad from "./Components/Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad isOn={pad.on} color={pad.color} key={pad.id} />
    ))


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
