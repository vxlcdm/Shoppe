import { Box, Typography, Link, Container, Stack } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#121212',
                color: '#ccc',
                py: 4,
                mt: 2,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} SHOPPE Deals. All rights reserved.
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Link href="#" underline="hover" color="inherit">
                            Privacy
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Terms
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Contact
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
