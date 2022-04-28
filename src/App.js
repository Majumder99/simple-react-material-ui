import {
  Typography,
  Button,
  AppBar,
  Card,
  CssBaseline,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Container,
  ButtonGroup,
} from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
// import { makeStyles } from "@mui/styles";
import useStyles from "./styles";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="primary.main"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Hello everyone this is a photo album and I'm trying to make this
              sentence as long as possible
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      This is a media card. You can use this section to describe
                      the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Something here
        </Typography>
      </footer>
    </>
  );
};

export default App;
