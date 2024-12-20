import { Routes,Route} from 'react-router-dom'
import { MultiStepForm, ThankYouPage } from './components'


function Router() {

  return (
    <Routes>
      <Route path='/' element={<MultiStepForm/>}/>
      <Route path='/thankYou' element={<ThankYouPage/>}/>
      <Route path='*' element={<MultiStepForm/>}/>
    </Routes>
  )
}

export default Router