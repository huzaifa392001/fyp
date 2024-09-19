import Link from 'next/link'
import React from 'react'
import './Sidebar.scss'

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link href={'#'}><i class="fas fa-home"></i> Dashboard</Link>
        </li>
        <li>
          <Link href={'#'}><i class="far fa-users"></i> Customers</Link>
        </li>
        <li>
          <Link href={'#'}><i class="fal fa-biking"></i> Riders</Link>
        </li>
        <li>
          <Link href={'#'}><i class="fas fa-badge-dollar"></i> Deals</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
