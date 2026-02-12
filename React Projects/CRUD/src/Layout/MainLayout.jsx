import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="surface-ground min-h-screen">
      <div className="layout-container p-3 md:p-4 lg:p-5 max-w-7xl mx-auto">
        <Header/>
        <div className="layout-content mt-4">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout