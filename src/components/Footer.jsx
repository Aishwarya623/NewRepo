import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.85)', color: 'white', py: 5, mt: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 4 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'Poppins, sans-serif' }}>Nova Enigma</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                        AI Development & Software Solutions<br />
                        Bangalore, Karnataka, India
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
                    <Link to="/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Services</Link>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Contact</Link>
                    <Link to="/faq" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>FAQ</Link>
                </Box>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', mx: 'auto' }}>
                &copy; {new Date().getFullYear()} Nova Enigma. All rights reserved.
            </Typography>
        </Box>
    );
}
