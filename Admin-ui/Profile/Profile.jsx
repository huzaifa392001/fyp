'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import './Profile.scss'
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BalanceChart } from '../Charts/BalanceChart';

function Profile(data) {
  const profile = data?.data;
  useEffect(() => {
    console.log(profile)
  }, [])
  return (
    <div>
      <div className="infoCont">
        <figure>
          <Image src={'/images/profile.png'} fill alt={profile?.name + ' Profile Picture'} />
        </figure>
        <div className='info'>
          <h3>{profile?.name}</h3>
          <h5><Link href={`mailto:${profile?.email}`}>{profile?.email}</Link></h5>
          <h5><Link href={`tel:${profile?.phone_number}`}>{profile?.phone_number}</Link></h5>
        </div>
        <div className="status">
          <h2>{profile?.average_rating}</h2>
          <span className={profile?.status === 0 ? 'active' : 'inactive'} />
        </div>
      </div>
      <div className="seperator" />
      <h3 className="heading">
        Balance
      </h3>
      <div className="balanceCont">
        <Table className='orderTable borderTable'>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Last month Earnings</TableCell>
              <TableCell>{profile?.cash_received}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last month Orders</TableCell>
              <TableCell>{profile?.total_deliveries}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Amount Deposited</TableCell>
              <TableCell>{profile?.last_deposit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Deposit Date</TableCell>
              <TableCell>{profile?.last_deposit_date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="seperator" />
      <h3 className="heading">
        Balance
      </h3>
      <div className="chartCont">
        <BalanceChart chartData={profile?.earnings} />
        <BalanceChart chartData={profile?.earnings} />
      </div>
      <div className="seperator" />
      <h3 className="heading">
        Vehicle Details
      </h3>
      <div className="balanceCont">
        <Table className='orderTable borderTable'>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Vehicle ID</TableCell>
              <TableCell>{profile?.vehicle?.vehicle_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle Model</TableCell>
              <TableCell>{profile?.vehicle?.model}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle License Number</TableCell>
              <TableCell>{profile?.vehicle?.license_plate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle Type</TableCell>
              <TableCell>{profile?.vehicle?.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle Color</TableCell>
              <TableCell>{profile?.vehicle?.color}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="seperator" />
      <h3 className="heading">
        Completed Deliveries
      </h3>
      <Table className='orderTable'>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Pickup Address</TableHead>
            <TableHead>Delivery Address</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Order Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profile?.completed_deliveries.map((order) => (
            <TableRow>
              <TableCell>{order?.delivery_id}</TableCell>
              <TableCell>{order?.customer_name}</TableCell>
              <TableCell>{order?.pickup_address}</TableCell>
              <TableCell>{order?.delivery_address}</TableCell>
              <TableCell>{order?.status}</TableCell>
              <TableCell>{order?.cash_received}</TableCell>
              <TableCell>{order?.delivery_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="orderBox">

      </div>
    </div>
  )
}

export default Profile  
