import './App.css'
import { ProjectProvider } from './context/projectProvider';
import Home from './pages/Home';
import Header from './pages/header';


function App() {

  return (
    <>
        <ProjectProvider  >
          <Header />
          <Home />
        </ProjectProvider>
    </>
  )
}

export default App
