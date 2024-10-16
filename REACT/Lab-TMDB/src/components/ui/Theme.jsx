import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#FF0000', // Red primary color
        },
        secondary: {
            main: '#000000', // Black secondary color
        },
        background: {
            paper: 'rgba(0, 0, 0 , 0.5)', // Dark background for the Paper component
        },
        text: {
            primary: '#FFFFFF', // White text
            secondary: '#B3B3B3', // Light grey text
        },
    },
});

export default function ThemedPaper({ children }) {
    return (
        <ThemeProvider theme={customTheme}>
            <Paper
                sx={{
                    padding: 0,
                    margin: 0,
                    textAlign: 'center',
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderRadius: '0px',
                }}
            >
                {children}
            </Paper>
        </ThemeProvider>
    );
}