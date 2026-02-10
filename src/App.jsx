
import './App.css'
import AddExpense from './component/addExpense'
import News from './component/News'
import Signup from './component/Signup'
import Signin from './component/Signin'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  const isLoggedIn = localStorage.getItem("isLoggedIn") 

  return (
 <Routes>
  <Route path="/signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/news" element={isLoggedIn ? <News /> : <Navigate to="/signin" />} />
   <Route path="/" element={<Navigate to="/signin" />} />
 </Routes>

  )
}

export default App
