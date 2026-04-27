import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashboardLayout from './layouts/dashboardLayout.jsx'
import AccountingPage from './pages/accountingPage.jsx'
import SettingPage from '../src/pages/settingPage.jsx'
import LoginPage from '../src/pages/loginPage.jsx'
import SignUp from '../src/pages/signUpPage.jsx'
import HomeDash from '../src/pages/homeDash.jsx'
import Home from '../src/pages/homePage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
        <Route path='/dashboard' element={<DashboardLayout/>}> 

          <Route index element={<HomeDash/>}/>
          <Route path='transactions' element={<AccountingPage/>} />
          <Route path='accounting' element={<AccountingPage/>} />
          <Route path='settings' element={<SettingPage/>} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
