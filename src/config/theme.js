const theme = {
    colors: {
        black: '#1A1A1A',
        grey: '#333333',
        background: '#F8F8F8',
        white: '#ffffff',
        main: '#79009F',
        dark: '#360047'
    },
    typography: {
        fontFamily: 'Roboto',
        h1: {
            
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em",
        },
        h3: {
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: 400,
            fontSize: "2.125rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em",
        },
        h5: {
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em",
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em",
        },
        p:{
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight:  1.5,
            letterSpacing: "0.00938em",
        }
    },
    breakpoints: {
        s: '600px',
        m: '960px',
        l: '1280px'
    },
    shadows: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    buttons: {
        border: "none",
        padding: "8px 16px",
        borderRadius: "16px",
        fontFamily: "roboto",
        fontSize: "24px"
    },
    backgroundImage:{
        url: "../img/coffee-2242213_1920.jpg"
    },
    box:{
        padding: "16px",
        borderRadius: "16px"
    }
}
export default theme;