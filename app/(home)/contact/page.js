import InnerBanner from '@/Components/InnerBanner/InnerBanner'
import React from 'react'
import './contact.scss'

function page() {
    return (
        <main>
            <InnerBanner heading={"Let's Connect"} />
            <section className="contactInnerSec">
                <div className="container">
                    <form>
                        <div className="formCont">
                            <div className="inputCont">
                                <label for="">First Name</label>
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className="inputCont">
                                <label for="">Last Name</label>
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <div className="inputCont">
                                <label for="">Email Address</label>
                                <input type="text" placeholder='Email Address' />
                            </div>
                            <div className="inputCont">
                                <label for="">Phone Number</label>
                                <input type="text" placeholder='Phone Number' />
                            </div>
                            <div className="inputCont">
                                <label for="">Query</label>
                                <textarea type="text" placeholder='Enter your Query' rows={5} />
                            </div>
                        </div>
                        <button className="themeBtn">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default page

export const metadata = {
    title: "Contact - ParcelPro",
    alternates: {
        canonical: "https://parcelproconnect.vercel.app/contact",
    },
};