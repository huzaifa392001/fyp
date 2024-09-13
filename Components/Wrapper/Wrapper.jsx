"use client";
import React, { useLayoutEffect, useRef } from "react";
import Footer from '../Footer/Footer';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import "./Wrapper.scss"
import Image from "next/image";

function Wrapper({ children }) {
    const mainWrapperRef = useRef(null);
    const preloaderRef = useRef(null);

    useGSAP(() => {
        let tl = gsap.timeline({ defaults: { duration: 1.125, ease: 'circ' } })

        tl.to('.preloader img', {
            autoAlpha: 0,
            delay: 1
        }).to('.preloader', {
            autoAlpha: 0,
        }, "-=0.5").to('.preloader', {
            display: 'none'
        })
    }, { scope: preloaderRef.current })

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            let customScroll = ScrollSmoother.create({
                smooth: 1,
                effects: true,
                smoothTouch: 0.1,
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
        <>
            <div className="preloader" ref={preloaderRef}>
                <Image src={'/images/logo.png'} width={300} height={102} alt="Website Logo" />
            </div>
            <div id="smooth-wrapper" ref={mainWrapperRef}>
                <div id="smooth-content">
                    {/* <Header /> */}
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Wrapper;
