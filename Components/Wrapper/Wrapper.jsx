"use client";
import React, { useLayoutEffect, useRef } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

function Wrapper({ children }) {
    const mainWrapperRef = useRef(null);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            let customScroll = ScrollSmoother.create({
                smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true, // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
            });
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();
                    customScroll.scrollTo(
                        this.getAttribute("href"),
                        true,
                        "top"
                    );
                });
            });
        },
        { scope: mainWrapperRef.current }
    );
    return (
        <div id="smooth-wrapper" ref={mainWrapperRef}>
            <div id="smooth-content">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Wrapper