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
                        Next-Generation AI & Software Solutions Delivered in Bangalore, India
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                        At Nova Enigma, we provide a multidisciplinary approach to solving your most complex technical challenges. From ideation to deployment, we leverage cutting-edge technologies to drive digital transformation. Whether it is building custom Generative AI tools, deploying highly scalable cloud architectures, or architecting enterprise-grade IoT platforms, our comprehensive suite of services ensures your organization remains at the absolute forefront of industry innovation. We don't just write code; we engineer scalable, highly secure business value.
                    </Typography>
                </Box>

                {/* 2. Services Grid using MUI Cards instead of basic wrapper */}
                <Box>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", textAlign: "center", mb: 4, textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
                        Comprehensive Service Offerings
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <ServiceCard img={tech1} title="Generative AI" description="Implement advanced AI models, bespoke Large Language Models (LLMs), and intelligent chatbots. We train systems to automate manual workflows, generate highly accurate strategic content, and uncover deep predictive insights from unstructured data." />
                        <ServiceCard img={tech2} title="IT Consulting" description="Strategic software development and thorough IT consulting perfectly tailored for your target audience. We guide businesses through complex digital transformations, modernizing legacy systems and designing high-performance enterprise architectures." />
                        <ServiceCard img={tech3} title="IoT Solutions" description="Seamlessly connect, control, and monitor distributed hardware fleets globally. Our IoT frameworks establish secure, low-latency communication channels and real-time data processing for smart manufacturing, connected agriculture, and smart cities." />
                        <ServiceCard img={tech4} title="Cloud Computing" description="Migrate and infinitely scale your server resources. We specialize in designing secure, multi-availability zone cloud infrastructure using Azure, AWS, and GCP ensuring zero downtime, strict compliance, and cost-effective database orchestration." />
                    </Grid>
                </Box>

                {/* 3. Our Methodology */}
                <Box sx={{ backgroundColor: "rgba(0,0,0,0.7)", padding: { xs: "2rem", md: "4rem" }, borderRadius: "12px", backdropFilter: "blur(5px)", mt: 2 }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: "bold", textAlign: "center", mb: 4 }}>
                        Our Engineering Process
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "900px", margin: "0 auto", mb: 4, lineHeight: 1.6, textAlign: "justify" }}>
                        Great software is not built by accident. It requires rigorous planning, immaculate architecture, and steadfast testing. Our battle-tested agile methodology guarantees successful deployments across healthcare, fintech, supply chain, and retail domains.
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "#29e6a7", mb: 1 }}>
                                1. Discovery
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                We analyze your infrastructure, identifying bottlenecks and areas where AI and customized software can maximize ROI.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "#29e6a7", mb: 1 }}>
                                2. Architecture
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                Our architects draft comprehensive technical roadmaps focusing on security, database optimization, and cloud elasticity.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "#29e6a7", mb: 1 }}>
                                3. Development
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                Utilizing robust CI/CD pipelines, our engineering teams write extremely lean, scalable code adhering strictly to best practices.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "#29e6a7", mb: 1 }}>
                                4. Deployment
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                Rigorous automated testing dictates release cycles, guaranteeing a smooth deployment transitioning flawlessly into active maintenance.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* 4. CTA Section */}
                <Box sx={{ textAlign: "center", mt: 2, backgroundColor: "rgba(0,0,0,0.6)", padding: "4rem 2rem", borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold", mb: 3 }}>
                        Initiate Your Technical Transformation
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", mb: 4, lineHeight: 1.6 }}>
                        Discuss your product ideas, IoT hardware complexities, or enterprise software challenges with our Bangalore team. Let us build the solutions that power your future today.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
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
                                padding: "14px 40px",
                                borderRadius: "30px",
                                fontWeight: "bold",
                                borderWidth: "2px",
                                "&:hover": { borderColor: "#29e6a7", color: "#29e6a7", borderWidth: "2px", transform: "translateY(-3px)", backgroundColor: "rgba(41, 230, 167, 0.1)" },
                                transition: "all 0.3s ease"
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
