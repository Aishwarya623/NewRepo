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
                        Leading AI Development & Software Solutions in Bangalore, India
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", mb: 4, lineHeight: 1.6 }}>
                        Welcome to Nova Enigma, the premier AI development and custom software engineering firm based in the tech capital of India, Bangalore. We specialize in building scalable intelligent systems, Generative AI models, and robust enterprise applications designed to propel modern businesses into the future. With an ever-evolving digital landscape, we offer tailored digital transformation strategies that empower organizations to automate complex workflows, unlock deep data insights, and dramatically minimize operational costs. Don't settle for off-the-shelf software when you can have a tailored ecosystem perfectly designed for your enterprise.
                    </Typography>
                </Box>

                {/* 2. Services Preview Section */}
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", textAlign: "center", mb: 4, textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
                        Our Core Capabilities
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {['Generative AI', 'Cloud Computing', 'IoT Solutions'].map((service, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <MuiCard className="card-modern" sx={{
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
                                            Cutting-edge {service.toLowerCase()} solutions that drive robust technological transformation, massive scalability, and unprecedented efficiency for high-performing businesses in Bangalore and across the global market.
                                        </Typography>
                                    </CardContent>
                                </MuiCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* 3. Why Choose Nova Enigma? */}
                <Box sx={{ backgroundColor: "rgba(0,0,0,0.7)", padding: { xs: "2rem", md: "4rem" }, borderRadius: "12px", backdropFilter: "blur(5px)", mt: 2 }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", textAlign: "center", mb: 4 }}>
                        Why Choose Us as Your Technology Partner?
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "900px", margin: "0 auto", mb: 4, lineHeight: 1.6, textAlign: "justify" }}>
                        In today's highly competitive market, having a reliable technology partner can make the difference between stagnation and explosive growth. Nova Enigma brings years of multi-domain expertise, marrying deep technical knowledge with strategic business acumen. Here is why dozens of enterprises choose us to lead their digital transformation:
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.3rem", fontWeight: "bold", color: "#29e6a7", mb: 2 }}>
                                Proven AI Expertise
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.6 }}>
                                We do not just use AI APIs; our seasoned engineers train, fine-tune, and deploy bespoke machine learning models, custom Large Language Models (LLMs), and highly accurate predictive algorithms that directly align with your unique business challenges.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.3rem", fontWeight: "bold", color: "#29e6a7", mb: 2 }}>
                                Agile Development
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.6 }}>
                                Speed to market is vital. By leveraging an agile framework, continuous integration/continuous deployment (CI/CD) pipelines, and rigorous automated testing, we deliver pixel-perfect software quickly without ever compromising on code quality or architecture security.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.3rem", fontWeight: "bold", color: "#29e6a7", mb: 2 }}>
                                Transparent Collaboration
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.6 }}>
                                Communication is the cornerstone of our methodology. We maintain complete transparency over timelines, project budgets, and architectural decisions, ensuring our clients are always informed and in control from project discovery to final deployment.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* 4. Industries We Serve */}
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", textAlign: "center", mb: 4, textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
                        Industries We Empower
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "900px", margin: "0 auto", mb: 4, lineHeight: 1.6, textAlign: "center" }}>
                        From optimizing supply chain logistics to revolutionizing healthcare diagnostics, Nova Enigma creates software that transcends industry boundaries. We proudly build tailored architectures for FinTech, Healthcare, Retail & E-Commerce, Manufacturing, and Education sectors across India and globally.
                    </Typography>
                </Box>

                {/* 5. CTA Section */}
                <Box sx={{ textAlign: "center", mt: 2, backgroundColor: "rgba(0,0,0,0.6)", padding: "4rem 2rem", borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", mb: 3 }}>
                        Ready to elevate your business?
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", mb: 4, lineHeight: 1.6 }}>
                        Take the first step toward a revolutionary digital upgrade. Contact our technical team in Bangalore to discuss how our AI development and software solutions can multiply your operational efficiency today.
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        className="btn-primary"
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#0e48fe",
                            color: "white",
                            fontSize: "1.1rem",
                            padding: "14px 40px",
                            borderRadius: "30px",
                            fontWeight: "bold",
                            "&:hover": { backgroundColor: "#29e6a7", color: "black", transform: "translateY(-3px)", boxShadow: "0 8px 20px rgba(0,0,0,0.3)" },
                            transition: "all 0.3s ease"
                        }}
                    >
                        Schedule a Consultation
                    </Button>
                </Box>
            </Box>
        </PageWrapper>
    );
};

export default LandingPage;