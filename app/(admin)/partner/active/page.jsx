import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Tables from '@/Admin-ui/Tables/Tables'
import riderTableData from '@/Data/AdminRiderData.json'

function page() {
  // Filter the rider data to only include those with status 1
  const filteredRiderData = riderTableData.filter(rider => rider.status === 0);
    return (
        <div className="dashboardWrapper">
            <div className="headingCont">
                <SectionHeading heading={"Active Delivery Partners"} />
            </div>
            <div className="tableCont">
                <Tables tableData={filteredRiderData} rows={16} />
            </div>
        </div>
    )
}

export default page
