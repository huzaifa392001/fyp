import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Tables from '@/Admin-ui/Tables/Tables'
import riderTableData from '@/Data/AdminRiderData.json'

function page() {
    return (
        <div className="dashboardWrapper">
            <div className="headingCont">
                <SectionHeading heading={"Delivery Partners"} />
            </div>
            <div className="tableCont">
                <Tables tableData={riderTableData} rows={16} />
            </div>
        </div>
    )
}

export default page
