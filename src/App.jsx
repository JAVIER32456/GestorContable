import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from '../src/pages/loginPage.jsx'
import SignUp from '../src/pages/signUpPage.jsx'
import Home from '../src/pages/homePage.jsx'
import HomeDash from '../src/pages/homeDash.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dhome' element={<HomeDash/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
