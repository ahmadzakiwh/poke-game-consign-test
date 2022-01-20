import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    listPoke: {
        // backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        boxShadow: "0 0 5px 0 #0000ff",
        padding: "10px 0 10px 0"
    },
    conHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleHeader: {
        fontSize: "32px",
        fontWeight: 700,
    },
    h2: {
        fontSize: "22px",
        fontWeight: 600, 
    },
}));