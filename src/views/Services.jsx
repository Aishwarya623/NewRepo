import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import servicesBg from '../resources/img/services.jpg';
import tech1 from '../resources/img/tech-1.jpg';
import tech2 from '../resources/img/services.jpg';
import tech3 from '../resources/img/tech-3.jpg';
import tech4 from '../resources/img/pixels.jpg';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Button, Grid, Card as MuiCard, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export const Services = () => {
    return (
        <PageWrapper
            title="Our Services - AI & Software Solutions | Nova Enigma, Bangalore"
            metaDescription="Explore Nova Enigma's comprehensive services including Generative AI, IT Consulting, IoT Solutions, and Cloud computing in Bangalore, India."
            canonicalUrl="https://novaenigma.in/services"
            bgUrl={servicesBg}
            sectionId="second"
            className="second"
        >
            <Helmet>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "AI and Software Development",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Nova Enigma",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Bangalore",
                                "addressCountry": "India"
                            }
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Bangalore"
                        },
                        "description": "Providing cutting-edge software solutions, generative AI models, Cloud Computing, and IoT services for modern digital transformation."
                    }
                `}
                </script>
            </Helmet>

            <Box sx={{
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                padding: { xs: "80px 20px 20px", md: "100px 40px 40px" },
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
            }}>
                {/* 1. Hero Section */}
                <Box sx={{ textAlign: "center", backgroundColor: "rgba(0,0,0,0.7)", padding: { xs: "2rem", md: "2.5rem" }, borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", mb: 2 }}>
                        Our Services
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.2rem", md: "1.5rem" }, fontWeight: "500", mb: 3 }}>
                        Next-Gen AI & Software Solutions in Bangalore, India
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                        We leverage cutting-edge technologies to drive digital transformation. From building custom Generative AI tools to deploying scalable cloud architectures, our team in Bangalore is equipped to elevate your business operations.
                    </Typography>
                </Box>

                {/* 2. Services Grid using MUI Cards instead of basic wrapper */}
                <Box>
                    <Grid container spacing={4} justifyContent="center">
                        <ServiceCard img={tech1} title="Generative AI" description="Implement advanced AI models and LLMs to automate workflows, generate content, and uncover deep insights." />
                        <ServiceCard img={tech2} title="IT Consulting" description="Strategic development and IT consulting to build robust, scalable products tailored for your target audience." />
                        <ServiceCard img={tech3} title="IoT Solutions" description="Connect and monitor devices with intelligent sensors and IoT frameworks for real-time data processing." />
                        <ServiceCard img={tech4} title="Cloud Computing" description="Seamlessly migrate and scale your resources with secure, high-performance cloud infrastructure services." />
                    </Grid>
                </Box>

                {/* 3. CTA Section */}
                <Box sx={{ textAlign: "center", mt: 2, backgroundColor: "rgba(0,0,0,0.7)", padding: "2rem", borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold", mb: 3 }}>
                        Need a custom software solution?
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: "#0e48fe",
                                color: "white",
                                fontSize: "1.1rem",
                                padding: "12px 36px",
                                borderRadius: "30px",
                                fontWeight: "bold",
                                "&:hover": { backgroundColor: "#29e6a7", color: "black" },
                            }}
                        >
                            Get In Touch
                        </Button>
                        <Button
                            component={Link}
                            to="/faq"
                            variant="outlined"
                            size="large"
                            sx={{
                                borderColor: "white",
                                color: "white",
                                fontSize: "1.1rem",
                                padding: "12px 36px",
                                borderRadius: "30px",
                                fontWeight: "bold",
                                borderWidth: "2px",
                                "&:hover": { borderColor: "#29e6a7", color: "#29e6a7", borderWidth: "2px" },
                            }}
                        >
                            View FAQs
                        </Button>
                    </Box>
                </Box>
            </Box>
        </PageWrapper>
    );

    function ServiceCard({ img, title, description }) {
        return (
            <Grid item xs={12} sm={6} md={3}>
                <MuiCard sx={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    transition: "all 0.4s ease",
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: "12px",
                    overflow: "hidden",
                    "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
                    }
                }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt={`Nova Enigma - ${title} Services`}
                        sx={{ filter: "brightness(0.9)", transition: "all 0.4s ease", "&:hover": { filter: "brightness(1.1)", transform: "scale(1.05)" } }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", pt: 3, pb: 4 }}>
                        <Typography gutterBottom variant="h3" component="h3" sx={{ fontSize: "1.4rem", fontWeight: "bold", color: "#161d34" }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, fontSize: "1rem", lineHeight: 1.5, mb: 0 }}>
                            {description}
                        </Typography>
                    </CardContent>
                </MuiCard>
            </Grid>
        );
    }
};

export default Services;
