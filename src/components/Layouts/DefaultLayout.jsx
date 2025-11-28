import Additionbar from "../Additionbar/Additionbar"
import Sidebar from "../Sidebar/Sidebar"

function DefaultLayout({children}){
    return (
        <div>
            <Additionbar/>
            <div className = 'container'>
                <Sidebar/>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout