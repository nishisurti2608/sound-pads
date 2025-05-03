import React from "react"
import padsData from "./pads"
import Pad from "./Components/Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    function toggle(id){
        setPads((prevPads) => prevPads.map((item) => {
            return item.id === id ? {...item ,on: !item.on} : item
        }))
    }

    const buttonElements = pads.map(pad => (
        <Pad id={pad.id} toggle={toggle} isOn={pad.on} color={pad.color} key={pad.id} />
    ))


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
