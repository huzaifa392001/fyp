import Profile from '@/Admin-ui/Profile/Profile'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import React from 'react'
import rider from '@/Data/DriverData.json'

function page() {
    return (
        <div className="dashboardWrapper">
            <div className="headingCont ">
                <SectionHeading heading={"Edit Application"} />
            </div>
            <div className="profileContainer">
                <Profile data={rider} />
            </div>
        </div>
    )
}

export default page
