import { Trash } from "lucide-react";
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(['do laudry', 'do homework'])
  const [input, setInput] = useState('')
  function addTask(){
    if(input !== '') {
      setTasks([...tasks,input])
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="flex items-center justify-center w-full ">
          <div className="">
    
            
            <input type="text" className="rounded-xl p-2 border-zinc-400 focus:border-blue-500 border-2 outline-none" onChange={(e)=>{setInput(e.target.value)}} />
            <button className="p-2 bg-slate-400 rounded-lg m-2" onClick={addTask}>Add</button>

            <div className="grid">
              {tasks.map((task) => (
                <div className="">{task}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
