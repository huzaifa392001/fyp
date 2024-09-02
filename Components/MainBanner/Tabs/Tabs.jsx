import React, { useState } from 'react';
import './Tabs.scss'
import Image from 'next/image';

function Tabs() {
    const [activeTab, setActiveTab] = useState('b2b');

    return (
        <div className="container mx-auto">
            <div className="tabsNav">
                <ul>
                    <li>
                        <button className={activeTab === 'b2b' ? 'active' : ''} onClick={() => setActiveTab('b2b')}>B2B</button>
                    </li>
                    <li>
                        <button className={activeTab === 'p2p' ? 'active' : ''} onClick={() => setActiveTab('p2p')}>P2P</button>
                    </li>
                    <li>
                        <button className={activeTab === 'b2c' ? 'active' : ''} onClick={() => setActiveTab('b2c')}>B2C</button>
                    </li>
                </ul>
            </div>
            <div className={activeTab === 'b2b' ? "tabContent noLeft" : 'tabContent'}>
                {activeTab === 'b2b' && (
                    <div className="tab" id="b2b">
                        <div className="content">
                            <h2>Business to Business</h2>
                            <p>
                                {"For businesses that need to send parcels, documents, or supplies to other businesses, our Business to Business delivery service provides a fast and secure solution. Whether it's sending contracts to a partner company, delivering supplies to a branch office, or transferring goods between warehouses, we ensure your deliveries are handled professionally and arrive on time. With our service, you can focus on your core operations while we take care of the logistics."}
                            </p>
                        </div>
                        <figure>
                            <Image
                                src={'/images/delivery-3.png'}
                                alt=''
                                fill
                            />
                        </figure>
                    </div>
                )}
                {activeTab === 'p2p' && (
                    <div className="tab" id="p2p">
                        <div className="content">
                            <h2>Person to Person</h2>
                            <p>
                                {"Our Person to Person delivery service connects individuals for personal deliveries. Whether you're sending a gift to a friend, delivering a package to a family member, or coordinating a delivery with a neighbor, our service ensures your items are delivered quickly and safely."}
                            </p>
                        </div>
                        <figure>
                            <Image
                                src={'/images/delivery-3.png'}
                                alt=''
                                fill
                            />
                        </figure>
                    </div>
                )}
                {activeTab === 'b2c' && (
                    <div className="tab" id="b2c">
                        <div className="content">
                            <h2>Business to Consumer</h2>
                            <p>
                                {"For businesses that need to send parcels directly to consumers, our Business to Consumer delivery service provides a reliable solution. Whether you're delivering products to customers, sending out promotional materials, or fulfilling e-commerce orders, our service ensures your deliveries reach your customers promptly and in perfect condition."}
                            </p>
                        </div>
                        <figure>
                            <Image
                                src={'/images/delivery-3.png'}
                                alt=''
                                fill
                            />
                        </figure>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;
