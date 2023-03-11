import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import PuffLoader from "react-spinners/PuffLoader";
import { useState,useEffect } from "react";
import Homepage from './page/Homepage'
import NotFoundPage from './page/NotFoundPage';
import ComunityPage from './page/ComunityPage';
// import BlogPosts from './page/BlogPosts';

const MyRoute = () => {

    const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)

    },3000)

  },[])

  return (
    <BrowserRouter>
    <div >
      {
        loading?
            <div className="loading flex-col">
            <PuffLoader
            color={'#ff5e00d8'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            <div>
            <p className='text-[#ff5e00d8] font-bold p-2 text-3xl m-2'>Welcome to website..</p>
          </div>
        </div>
        :
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/blogspost" component={ComunityPage} />
            {/* <Route path="/blogspost" component={BlogPosts}/> */}
            <Route path="*" component={NotFoundPage} />
        </Switch>
        }
    </div>
       
    </BrowserRouter>
  )
}

export default MyRoute