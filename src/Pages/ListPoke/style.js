import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    listPoke: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto"
    },
    header: {
        padding: "10px 0 10px 0",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: "#ffffff"
    },
    conHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleHeader: {
        fontSize: "32px",
        fontWeight: 700,
    },
    titlePokemons: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titlePokemon: {
        fontSize: "22px",
        fontWeight: 600, 
        margin: "20px 0 10px 0",
    },
    containerListPoke: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh"
    },
    pokemonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    allContainer: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
    loadMore: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "20px 0 20px 0",
        position: "relative",
        transition: "transform 0.2s",
        "&:hover": {
            cursor: "pointer",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            transform: "scale(1.05)"
        }
    },
    btnLoadMore: {
        border: 0,
        borderRadius: 3,
        color: "#ffffff",
        background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
        height: 48,
        minWidth: "100%",
        padding: "0 30px",
        fontSize: 16,
        "&:hover": {
            cursor: "pointer",
        }
    },
}));