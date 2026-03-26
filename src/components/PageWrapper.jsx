import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import '../App.css';
import '../App.scss';

export const PageWrapper = ({ title, metaDescription, canonicalUrl, bgUrl, sectionId, className, children }) => {
    const sectionRef = useRef(null);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const bgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.set(outerRef.current, { yPercent: 100 });
        gsap.set(innerRef.current, { yPercent: -100 });
        gsap.set(sectionRef.current, { autoAlpha: 1, zIndex: 1 });

        let tl = gsap.timeline({ defaults: { duration: 1.25, ease: "power1.inOut" } });

        tl.fromTo([outerRef.current, innerRef.current], { yPercent: 100 }, { yPercent: 0 }, 0)
            .fromTo(bgRef.current, { yPercent: 15 }, { yPercent: 0 }, 0)
            .fromTo(contentRef.current, { autoAlpha: 0, yPercent: 150 }, {
                autoAlpha: 1,
                yPercent: 0,
                duration: 1,
                ease: "power2"
            }, 0.2);
    }, []);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <div className="app-container">
                <header className="header">
                    <nav>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                        <Link to="/services">Services</Link>&nbsp;&nbsp;
                        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
                        <Link to="/faq">FAQ</Link>
                    </nav>
                </header>
                <section id={sectionId} ref={sectionRef} className={`section ${className}`} style={{ visibility: 'visible', zIndex: 1, opacity: 1 }}>
                    <div className="wrapper-outer" ref={outerRef}>
                        <div className="wrapper-inner" ref={innerRef}>
                            <div className="background" ref={bgRef} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bgUrl})` }}>
                                <div ref={contentRef} style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '3rem' }}>
                                        {children}
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
