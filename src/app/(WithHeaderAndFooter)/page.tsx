
import Image from 'next/image'
import React from 'react'
import { Images } from '../assets/utility/Images'
import Games from '@/components/Games/Games'
import Featured from '@/components/Featured/Featured'
import AppsLoved from '@/components/AppsLoved/AppsLoved'
import Banner from '@/components/Banner/Banner'


export default function page() {

  return (
    <>

      <Banner />
      
      <Games />

      <AppsLoved />

      <Featured />


    </>
  )
}

