import sizes from './sizes';
const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover svg ': {
            color: 'white',
            transform: 'scale(1.2)'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: '5%'
        }
    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0',
        bottom: '0',
        color: 'black',
        letterspacing: '1px',
        textTransform: 'uppercase',
        fontSize:' 12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        color: '#333',
        transition: 'all 0.2s ease-out'
    }
}

export default styles