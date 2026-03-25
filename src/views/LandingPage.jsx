import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { Helmet } from 'react-helmet-async';
import nova_main from '../resources/img/nova_main.jpeg';
import logo_close_transparent from '../resources/img/transparent/logo_close_transparent.png';

export const LandingPage = () => {
    return (
        <PageWrapper
            title="Nova Enigma - AI Development & Software Solutions"
            metaDescription="Nova Enigma is an AI Development & Software Solutions Company in India building scalable intelligent systems for modern businesses."
            canonicalUrl="https://novaenigma.in/"
            bgUrl={nova_main}
            sectionId="first"
            className="first"
        >
            <Helmet>
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Nova Enigma",
                        "url": "https://novaenigma.in/",
                        "logo": "https://novaenigma.in/logo512.png",
                        "sameAs": []
                    }
                `}
                </script>
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Nova Enigma",
                        "url": "https://novaenigma.in/"
                    }
                `}
                </script>
            </Helmet>
            <img height={200} src={logo_close_transparent} alt="Nova Enigma Logo" />
            <h1 className="section-title title">Nova Enigma</h1>
            <p className="small-text" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
                AI Development & Software Solutions Company in India <br />
                We build scalable intelligent systems for modern businesses. <br />
                Nova Enigma builds AI-powered software, automation systems,
                and scalable web applications for businesses across India.
            </p>
        </PageWrapper>
    );
};

export default LandingPage;
