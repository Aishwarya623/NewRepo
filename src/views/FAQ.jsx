import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link } from 'react-router-dom';

// We reuse nova_main for background as an example
import faqBg from '../resources/img/nova_main.jpeg';

export const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            q: "What AI development services do you provide in Bangalore?",
            a: "We specialize in developing robust Generative AI solutions, integrating Large Language Models (LLMs) into custom business workflows, creating intelligent chatbots, and building data-driven predictive systems tailored for companies globally and in India."
        },
        {
            q: "How can software solutions optimize my business efficiency?",
            a: "Custom software streamlines manual tasks, integrates siloed data, and introduces automation. By addressing the bottleneck processes with scalable architecture, we reduce operational costs while improving overall productivity and accuracy."
        },
        {
            q: "Do you offer Cloud Computing implementation?",
            a: "Yes, we architect, deploy, and manage scalable cloud infrastructures. Our solutions ensure high availability, superior security protocols, and cost-effective resource management tailored to modern enterprise requirements."
        },
        {
            q: "What kind of companies do you work with?",
            a: "Nova Enigma partners with a wide variety of industries ranging from disruptive startups to established enterprises looking to embrace digital transformation, IoT solutions, and actionable AI insights."
        },
        {
            q: "How does the consulting process work?",
            a: "We begin with a comprehensive audit of your existing infrastructure and business goals. Following that, our experts in Bangalore draft a robust technical roadmap and prototype strategy before full-scale development cycles start."
        },
        {
            q: "Are the IoT solutions scalable and secure?",
            a: "Absolutely. Security is central to our IoT development. We establish end-to-end encryption frameworks for device communication while ensuring the data processing backbone can seamlessly scale to millions of sensor requests."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <PageWrapper
            title="Frequently Asked Questions | Nova Enigma - AI Development, Bangalore"
            metaDescription="Find answers to common questions about Nova Enigma's AI development, software solutions, cloud services, and IT consulting in Bangalore, India."
            canonicalUrl="https://novaenigma.in/faq"
            bgUrl={faqBg}
            sectionId="faq-section"
            className="faq-section"
        >
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <Box sx={{
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto",
                padding: { xs: "80px 20px 20px", md: "100px 40px 40px" },
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}>
                <Box sx={{ textAlign: "center", backgroundColor: "rgba(0,0,0,0.7)", padding: { xs: "2rem", md: "3rem" }, borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", mb: 2 }}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.2rem", md: "1.5rem" }, fontWeight: "500", mb: 3 }}>
                        Learn more about our AI Development & Software Solutions in Bangalore
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                        Deciding on the right technology stack, engineering strategy, and software partner involves a myriad of technical questions. Over our years of experience orchestrating digital transformation for companies in India and globally, we've compiled the most common queries regarding our Generative AI, Cloud Computing, and custom software development processes. Read on to discover how Nova Enigma tackles complex engineering challenges.
                    </Typography>
                </Box>

                <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "2rem", borderRadius: "12px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }}>
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            sx={{ mb: 1, backgroundColor: "transparent", borderBottom: "1px solid #ddd", boxShadow: "none", "&:before": { display: "none" } }}
                        >
                            <AccordionSummary
                                expandIcon={<span style={{ color: "#0e48fe", fontSize: "1.2rem", fontWeight: "bold" }}>▼</span>}
                                aria-controls={`panel${index}bh-content`}
                                id={`panel${index}bh-header`}
                            >
                                <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#161d34" }}>
                                    {faq.q}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "#4f546c", lineHeight: 1.6 }}>
                                    {faq.a}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                <Box sx={{ textAlign: "center", mt: 2, backgroundColor: "rgba(0,0,0,0.7)", padding: "2rem", borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold", mb: 3 }}>
                        Still have questions?
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
                        Contact Our Support Team
                    </Button>
                </Box>
            </Box>
        </PageWrapper>
    );
};

export default FAQ;
