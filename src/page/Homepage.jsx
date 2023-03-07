import React from 'react'
import ContactUs from '../components/main-component/ContactUs'
import DevSkill from '../components/main-component/DevSkill'
import Me from '../components/main-component/Me'
import NavBack from '../components/main-component/NavBack'
import NavBar from '../components/main-component/NavBar'
import WelcomePage from '../components/main-component/WelcomePage'

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