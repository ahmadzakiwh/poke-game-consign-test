import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    imag: {
        width: "120px",
        height: "120px",
    },
    detaiWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    details: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: 0,
        fontSize: 14,
        width: "100%",
        borderRadius: 3,
        color: "#ffffff",
        padding: "5px 20px",
        marginBottom: 5,
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)"
        }
    },
    favorite: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        border: 0,
        fontSize: 14,
        width: "100%",
        borderRadius: 3,
        color: "#ffffff",
        padding: "5px 20px",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)"
        }
    }
}));