import Link from 'next/link'
import React from 'react'
import './Sidebar.scss'

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link href={'#'}><i className="fas fa-home"></i> Dashboard</Link>
        </li>
        <li>
          <Link href={'#'}><i className="far fa-users"></i> Customers</Link>
        </li>
        <li>
          <Link href={'#'}><i className="fal fa-biking"></i> Delivery Partners</Link>
        </li>
        <li>
          <Link href={'#'}><i className="fas fa-badge-dollar"></i> Deals</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
