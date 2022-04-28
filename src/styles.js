import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#eee",
    padding: "20px",
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //Aspect ratio : 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "grey",
    padding: "50px",
  },
}));

export default useStyles;
