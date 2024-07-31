import './App.css'
import Button from './Button'
import Input from './Input'
import Data from './Data'
import { createContext,useState } from 'react'

const Btnval = createContext();

function App() {
  const [val, setVal] = useState("")
  return (
    <>
    <div className="container">
            <h1 className="h">CALCULATOR</h1>
        <div className="calc">
            <Btnval.Provider value={{ val, setVal }}>
             <div className="in">
              <Input />
             </div>
          <div className="btn">
              {Data.map((value) => {
                return (<Button
                  keys={value.id}
                  btn={value.val} />)
              })}
          </div>
            </Btnval.Provider>
        </div>
      </div>
      
    </>
  )
}

export default App
export {Btnval}