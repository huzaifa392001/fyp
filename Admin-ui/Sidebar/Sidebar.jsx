'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import './Sidebar.scss'

function Sidebar() {

  const [dropdownActive, setDropdownActive] = useState(false)

  const toggleDropdown = (status) => {
    setDropdownActive(status)
  }

  return (
    <aside>
      <ul>
        <li>
          <Link href={'/admin'}><i className="fas fa-home"></i> Dashboard</Link>
        </li>
        <li>
          <Link href={'/customer'}><i className="far fa-users"></i> Customers</Link>
        </li>
        <li className={`dropdown ${dropdownActive ? 'active' : ''}`}>
          <Link href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(!dropdownActive); }}>
            <i className="fal fa-biking"></i> Delivery Partners
          </Link>
          {dropdownActive && (
            <ul>
              <li>
                <Link href='/partner'>All Partners</Link>
              </li>
              <li>
                <Link href='/partner/active'>Active Partners</Link>
              </li>
              <li>
                <Link href='/partner/in-active'>In-Active Partners</Link>
              </li>
              <li>
                <Link href='/partner/rejected'>Rejected</Link>
              </li>
              <li>
                <Link href='/partner/pending'>Pending Request</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href={'#'}><i className="fas fa-badge-dollar"></i> Deals</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
