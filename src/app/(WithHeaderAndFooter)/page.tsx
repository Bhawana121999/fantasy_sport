
import React from 'react'
import AboutCompany from '@/components/HomePageComponents/AboutCompany/AboutCompany'
import HomeBanner from '@/components/HomePageComponents/HomeBanner/HomeBanner'
import WorkFlow from '@/components/HomePageComponents/WorkFlow/WorkFlow'
import Solutions from '@/components/HomePageComponents/Solutions/Solutions'
import ChooseUs from '@/components/HomePageComponents/ChooseUs/ChooseUs'
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm'


export default function page() {

  return (
    <>

      <HomeBanner />
      <AboutCompany />
      <WorkFlow />
      <Solutions />
      <ChooseUs />
      <EnquiryForm />
    </>
  )
}

