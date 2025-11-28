import {createContext} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import {publicRoutes} from './pages/routes'
import DefaultLayout from './components/Layouts/DefaultLayout'

export const PathContext = createContext();

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component
            return <Route key={index} path={route.path} element={
            <PathContext.Provider value={route.path}>
              <Layout>
                <Page/>
              </Layout>
            </PathContext.Provider>
            }/>
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
