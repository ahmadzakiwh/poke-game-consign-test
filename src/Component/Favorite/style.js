import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    favorite: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        border: 0,
        fontSize: 12,
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