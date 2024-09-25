import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Tables from '@/Admin-ui/Tables/Tables'
import riderTableData from '@/Data/AdminRiderData.json'

function page() {
    return (
        <div className="dashboardWrapper">
            <div className="headingCont">
                <SectionHeading heading={"Pending Request"} />
            </div>
            <div className="tableCont">
                <Tables tableData={riderTableData} rows={16} pending={true} />
            </div>
        </div>
    )
}

export default page
