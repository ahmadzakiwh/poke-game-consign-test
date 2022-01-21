import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    imag: {
        width: "140px",
        height: "140px",
    },
    detailWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "10px",
        "& h3": {
            margin: 0,
        }
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        border: 0,
        boxShadow:  '0 2px 3px 1px rgba(0, 0, 0, 1)',
        padding: "15px", 
        backgroundColor: "#ffffff",
        borderRadius: "15px",
    },
    stats: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "10px"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between"
    },
    col: {
        display: "flex",
        flexDirection: "column",
    },
    hp: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 5,
        "& h5": {
            margin: 0,
        }
    },
    attack: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 5,
        "& h5": {
            margin: 0,
        }
    },
    defense: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 5,
        "& h5": {
            margin: 0,
        }
    },
    speed: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 5,
        "& h5": {
            margin: 0,
        }
    },
    specialAttack: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        "& h5": {
            margin: 0,
        }
    },
    specialDefense: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        "& h5": {
            margin: 0,
        }
    },
}));