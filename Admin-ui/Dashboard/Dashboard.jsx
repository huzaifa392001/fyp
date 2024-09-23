import React from 'react'
import TotalUserChart from '../Charts/TotalUserChart'
import './Dashboard.scss'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { ActiveUserChart } from '../Charts/ActiveUserChart'
import Tables from '../Tables/Tables'
import customerTableData from '@/Data/AdminCustomerData.json'
import riderTableData from '@/Data/AdminRiderData.json'

const totalUsersData = [
  { month: "January", deliveryPartners: 12000, customers: 10500 },
  { month: "February", deliveryPartners: 13500, customers: 11500 },
  { month: "March", deliveryPartners: 15000, customers: 12500 },
  { month: "April", deliveryPartners: 16500, customers: 13500 },
  { month: "May", deliveryPartners: 18000, customers: 14500 },
  { month: "June", deliveryPartners: 19500, customers: 15500 },
  { month: "July", deliveryPartners: 21000, customers: 17000 },
  { month: "August", deliveryPartners: 23000, customers: 18500 },
  { month: "September", deliveryPartners: 25000, customers: 20000 },
  { month: "October", deliveryPartners: 27000, customers: 22000 },
  { month: "November", deliveryPartners: 29000, customers: 24000 },
  { month: "December", deliveryPartners: 31000, customers: 26000 },
];

const totalCustomers = [
  { month: "January", customers: 186 },
  { month: "February", customers: 305 },
  { month: "March", customers: 237 },
  { month: "April", customers: 73 },
  { month: "May", customers: 209 },
  { month: "June", customers: 214 },
]

const totalPartners = [
  { month: "January", partners: 186 },
  { month: "February", partners: 305 },
  { month: "March", partners: 237 },
  { month: "April", partners: 73 },
  { month: "May", partners: 209 },
  { month: "June", partners: 214 },
]

function Dashboard() {

  return (
    <>
      <div className="dashboardWrapper">
        <div className="headingCont">
          <SectionHeading heading={"Dashboard"} />
        </div>
        <div className="chartRow">
          <TotalUserChart chartData={totalUsersData} />
          <ActiveUserChart chartData={totalCustomers} title={"customers"} heading={"Total Active Customers"} />
          <ActiveUserChart chartData={totalPartners} title={"partners"} heading={"Total Active Deliver Partners"} />
        </div>
        <div className="tableCont">
          <h3>Recent Customers</h3>
          <Tables tableData={customerTableData} />
        </div>
        <div className="tableCont">
          <h3>Recent Delivery Partners</h3>
          <Tables tableData={riderTableData} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
