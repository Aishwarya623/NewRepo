import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import contactBg from '../resources/img/contact.jpg';
import { Button, Grid, TextField, Typography, Alert, Box } from '@mui/material';
import { sendEmail } from '../services/EmailService';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("Something went wrong!");
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setShowAlert(false);
            setSuccessMessage('');

            const trimmedEmail = email?.trim();
            const trimmedName = name?.trim();

            if (!trimmedEmail || !trimmedName) {
                setShowAlert(true);
                setAlertMessage("Oops! Invalid input.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const nameRegex = /^[a-zA-Z\s'-]+$/;

            if (!emailRegex.test(trimmedEmail) || !nameRegex.test(trimmedName)) {
                setShowAlert(true);
                setAlertMessage("Oops! Invalid input.");
                return;
            }

            const request = { name: trimmedName, email: trimmedEmail };
            const responseData = await sendEmail(request);
            console.log("responseData: ", responseData);
            setSuccessMessage("Message sent successfully!");
            setName('');
            setEmail('');
        } catch (error) {
            setShowAlert(true);
            setAlertMessage("Something went wrong!");
            console.log("Error: ", error.message);
        }
    };

    return (
        <PageWrapper
            title="Contact Us - Nova Enigma | IT & AI Solutions in Bangalore"
            metaDescription="Contact Nova Enigma in Bangalore, India for business inquiries, custom software solutions, and generative AI development."
            canonicalUrl="https://novaenigma.in/contact"
            bgUrl={contactBg}
            sectionId="fifth"
            className="fifth"
        >
            <Helmet>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Nova Enigma",
                        "description": "Get in touch with Nova Enigma for AI and Software solutions in Bangalore, India.",
                        "url": "https://novaenigma.in/contact"
                    }
                `}
                </script>
            </Helmet>

            <Box sx={{
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto",
                padding: { xs: "80px 20px 20px", md: "100px 40px 40px" },
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
            }}>
                {/* 1. Hero Section */}
                <Box sx={{ textAlign: "center", backgroundColor: "rgba(0,0,0,0.7)", padding: { xs: "2rem", md: "2rem" }, borderRadius: "12px", backdropFilter: "blur(5px)" }}>
                    <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", mb: 2 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: { xs: "1.2rem", md: "1.5rem" }, fontWeight: "500", mb: 3 }}>
                        Partner with the leading AI Development Company in Bangalore, India
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                        Whether you need scalable cloud solutions, IoT integration, or Generative AI models, our team is ready to help you achieve your business goals. Reach out today.
                    </Typography>
                </Box>

                <Grid container spacing={4} alignItems="stretch">
                    {/* 2. Contact Information / Internal Links */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                            color: "white",
                            backdropFilter: "blur(5px)",
                            height: "100%"
                        }}>
                            <Typography variant="h3" sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 3, color: "#29e6a7" }}>
                                Let's Connect
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#ccc", mb: 1 }}>Location</Typography>
                                <Typography variant="body1">Bangalore, Karnataka, India</Typography>
                            </Box>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#ccc", mb: 1 }}>Working Hours</Typography>
                                <Typography variant="body1">Monday - Friday: 9:00 AM - 6:00 PM</Typography>
                            </Box>

                            <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                                <Typography variant="h4" sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 2 }}>
                                    Have quick questions?
                                </Typography>
                                <Button
                                    component={Link}
                                    to="/faq"
                                    variant="outlined"
                                    sx={{
                                        borderColor: "#0e48fe",
                                        color: "white",
                                        "&:hover": { borderColor: "#29e6a7", backgroundColor: "rgba(41, 230, 167, 0.1)" }
                                    }}
                                >
                                    Read our FAQs
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* 3. Form */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                            height: "100%"
                        }}>
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h3" sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 3, color: "#161d34" }}>
                                    Send us a message
                                </Typography>

                                {showAlert && (
                                    <Alert severity="error" onClose={() => setShowAlert(false)} sx={{ mb: 3 }}>
                                        {alertMessage}
                                    </Alert>
                                )}
                                {successMessage && (
                                    <Alert severity="success" onClose={() => setSuccessMessage('')} sx={{ mb: 3 }}>
                                        {successMessage}
                                    </Alert>
                                )}
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontWeight: "600", color: "#4f546c", textAlign: 'left', mb: 1 }} variant="subtitle2">Full Name</Typography>
                                        <TextField
                                            placeholder="Enter your name"
                                            fullWidth
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            variant="outlined"
                                            InputProps={{
                                                sx: { backgroundColor: "white" }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontWeight: "600", color: "#4f546c", textAlign: 'left', mb: 1 }} variant="subtitle2">Email Address</Typography>
                                        <TextField
                                            placeholder="Enter your email"
                                            fullWidth
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            variant="outlined"
                                            InputProps={{
                                                sx: { backgroundColor: "white" }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ mt: 1 }}>
                                        <Button variant="contained" sx={{
                                            width: '100%',
                                            padding: '12px 0',
                                            color: "#ffffff",
                                            backgroundColor: "#0e48fe",
                                            fontWeight: "bold",
                                            fontSize: "1.1rem",
                                            borderRadius: "30px",
                                            "&:hover": {
                                                backgroundColor: "#29e6a7",
                                                color: "black",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
                                            },
                                            transition: "all 0.3s ease"
                                        }} type='submit'>
                                            Submit Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageWrapper>
    );
};

export default Contact;
