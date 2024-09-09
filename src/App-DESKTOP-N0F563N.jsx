import { useState } from 'react'
import Index from './Pages/Index'
import AuthProvider  from './assets/Context/Context'
import TodoInput from './Components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <Index />
    </AuthProvider>
    </>
  )
}

export default App
