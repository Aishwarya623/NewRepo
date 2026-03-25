import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { Helmet } from 'react-helmet-async';
import nova_main from '../resources/img/nova_main.jpeg';
import logo_close_transparent from '../resources/img/transparent/logo_close_transparent.png';
import { Box, Typography, Button, Grid, Card as MuiCard, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <PageWrapper
            title="Nova Enigma - AI Development & Software Solutions | Bangalore, India"
            metaDescription="Nova Enigma is a top AI Development & Software Solutions Company in Bangalore, India. We build scalable intelligent systems for modern businesses."
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
                        "@type": "LocalBusiness",
                        "name": "Nova Enigma",
                        "image": "https://novaenigma.in/logo512.png",
                        "url": "https://novaenigma.in/",
                        "telephone": "",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bangalore",
                            "addressCountry": "India"
                        },
                        "description": "AI Development & Software Solutions Company in Bangalore, India building scalable intelligent systems for modern businesses."
                    }
                `}
                </script>
            </Helmet>

            <Box sx={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: { xs: "80px 20px 20px", md: "100px 40px 40px" },
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
            }}>
                {/* 1. Hero Section */}
                <Box sx={{ textAlign: "center", backgroundColor: "rgba(0,0,0,0.6)", padding: { xs: "2rem", md: "3rem" }, borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <img height={120} src={logo_close_transparent} alt="Nova Enigma AI Development Company Logo" style={{ marginBottom: "1rem" }} />
                    <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: "bold", mb: 2 }}>
                        Nova Enigma
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.2rem", md: "1.8rem" }, fontWeight: "500", mb: 3 }}>
                        AI Development & Software Solutions in Bangalore, India
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", mb: 4, lineHeight: 1.6 }}>
                        We build scalable intelligent systems, Generative AI models, and robust software applications for modern businesses.
                        As a premier AI development company based in Bangalore, India, we focus on delivering high-performance solutions tailored to solve complex business challenges.
                    </Typography>
                </Box>

                {/* 2. Services Preview Section */}
                <Box>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", textAlign: "center", mb: 4, textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
                        Our Core Services
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {['Generative AI', 'Cloud Computing', 'IoT Solutions'].map((service, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <MuiCard sx={{
                                    backgroundColor: "rgba(255,255,255,0.9)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    height: "100%",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow: "0px 15px 30px rgba(0,0,0,0.5)"
                                    }
                                }}>
                                    <CardContent sx={{ textAlign: "center", py: 4 }}>
                                        <Typography variant="h3" component="h3" sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2, color: "#0e48fe" }}>
                                            {service}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                                            Cutting-edge {service.toLowerCase()} solutions driving transformation and efficiency for businesses in Bangalore and across the globe.
                                        </Typography>
                                    </CardContent>
                                </MuiCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* 3. CTA Section */}
                <Box sx={{ textAlign: "center", mt: 2, backgroundColor: "rgba(0,0,0,0.6)", padding: "2rem", borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold", mb: 3 }}>
                        Ready to elevate your business?
                    </Typography>
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
                            "&:hover": { backgroundColor: "#29e6a7", color: "black" }
                        }}
                    >
                        Contact Our Team
                    </Button>
                </Box>
            </Box>
        </PageWrapper>
    );
};

export default LandingPage;