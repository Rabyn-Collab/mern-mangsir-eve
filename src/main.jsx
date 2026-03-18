import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/sonner.jsx'
import { TodoProvider } from './context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(

  <TodoProvider>
    <App />
    <Toaster

      duration={700}
      position='top-center'


    />
  </TodoProvider>



)
