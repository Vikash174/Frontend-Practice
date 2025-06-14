import { useState } from 'react'


import ChipsInput from './components/ChipsInput'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ChipsInput/>
  );
}

export default App
