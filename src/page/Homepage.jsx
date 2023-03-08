import React from 'react'
import ContactUs from '../components/main-component/ContactUs'
import DevSkill from '../components/main-component/developer/DevSkill'
import Me from '../components/main-component/developer/Me'
import NavBack from '../components/main-component/header/NavBack'
import NavBar from '../components/main-component/header/NavBar'
import WelcomePage from '../components/main-component/welcomePage/WelcomePage'

const Homepage = () => {
  return (
    <div>
        <NavBar/>
        <NavBack/>
        <WelcomePage/>
        <Me/>
        <DevSkill/>
        <ContactUs/>
    </div>
  )
}

export default Homepage