import { useState } from 'react'
import './Monkey.css'

export default function Monkey() {
    const [visible, setVisible] = useState(false)

    return (
        <div className='monkey'>
            <button onClick={() => {setVisible(!visible)}}>Monkey!</button>
            {/* {visible && <img src='https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>} */}
            {visible ? <img  className="monkeyImg" src='https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> : null}
        </div>
    )
}