import React from 'react'
import Header from './Header'


const Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {

  return (
 <div className='Layout'>
     <Header/>
    <main className={`${className} Layout_Body`}>
        {children}
    </main>
    {/* <Footer/> */}
 </div>
  )
}

export default Layout