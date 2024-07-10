import React from 'react'
import Banner from './Banner'
import CategoriasBanner from './CategoriasBanner'
import BannerLocales from './BannerLocales'



const Home = () => {
  return (
    <div className=' bg-white '>
<Banner />
<CategoriasBanner/>
<BannerLocales/>


    </div>
  )
}

export default Home