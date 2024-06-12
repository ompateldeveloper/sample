import { Trash } from "lucide-react";
import Button from "./Button"
import Navbar from "./Navbar"

function App() {
  const greet = () =>{
    console.log('Hello World');
  }
  return (
    <div>
      <Navbar greet={greet}/>
      <div className="my-grid mt-10 px-4 sm:px-8 lg:px-32 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Button title='button 1'>Click Me</Button>
        <Button title='button 2'>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
      </div>
    </div>
  )
}

export default App
