import sizes from './sizes'
export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
        background: '#333',
        color: 'white'
    },
    Logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        background: '#333',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'white'
        },
        [sizes.down('xs')]: {
            display: 'none',
            width: '100%'
        }
    },
    Slider: {
        width: '300px',
        margin: '0 10px',
        display: 'inline-block',
        '& .rc-slider-track': {
            background: 'transparent'
        },
        '& .rc-slider-rail': {  
            height: '8px'
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus ': {
            background: 'pink',
            outline: 'none',
            border: '2px solid pink',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px'
        },
        [sizes.down('md')]: {
            width: '180px'
        }
        
    },
    SelectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
        '& div': {
            color: 'white'
        }
    }
    
}