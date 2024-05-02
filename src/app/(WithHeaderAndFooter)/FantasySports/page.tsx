
import React from 'react'
import Banner from '@/components/Banner/Banner'
import Games from '@/components/Games/Games'
import AppsLoved from '@/components/AppsLoved/AppsLoved'
import Featured from '@/components/Featured/Featured'
import AppServices from '@/components/AppServices/AppServices'
import AppSolution from '@/components/AppSolution/AppSolution'
import Benefits from '@/components/Benefits/Benefits'
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm'

export default function page() {

    return (

        <>
            <Banner />

            <Games />

            <AppsLoved />

            <Featured />

            <AppServices />

            <AppSolution />

            <Benefits />

            <EnquiryForm />

        </>
    )
}
