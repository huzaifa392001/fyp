import InnerBanner from '@/Components/InnerBanner/InnerBanner'
import React from 'react'

function page() {
    return (
        <main>
            <InnerBanner heading={"FAQs"} />
        </main>
    )
}

export default page

export const metadata = {
  title: "FAQs - ParcelPro",
  alternates: {
    canonical: "https://parcelproconnect.vercel.app/faqs",
  },
};
