import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Tables from '@/Admin-ui/Tables/Tables'
import customerTableData from '@/Data/AdminCustomerData.json'

function page() {
  return (
    <div className="dashboardWrapper">
      <div className="headingCont">
        <SectionHeading heading={"Customers"} />
      </div>
      <div className="tableCont">
        <Tables tableData={customerTableData} rows={16} />
      </div>
    </div>
  )
}

export default page
