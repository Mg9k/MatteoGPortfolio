import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid2,
  IconButton,
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Contact() {
  return (
    <Container component="main">
      <br/>
      <Typography variant="h2" align="center" gutterBottom> Contact Me </Typography>
      <Card raised>
        <CardContent>
          <Grid2 container>
            <Grid2 item="true" my={2} size={4}>
              <Typography align="center" variant="h5"> Email Me </Typography>
              <Typography align="center" variant="subtitle1"> 
                <a href="mailto:matteogrutta9000@gmail.com">matteogrutta9000@gmail.com</a>
              </Typography>
            </Grid2>
            <Grid2 item="true" my={2} size={4}>
              <Typography align="center" variant="h5"> Call or Text Me </Typography>
              <Typography align="center" variant="subtitle1"> 
                <a href="tel:416-949-1229">+1 (416) 949-1229</a>
              </Typography>
            </Grid2>
            <Grid2 item="true" my={2} size={4}>
              <Typography align="center" variant="h5"> My Social Media </Typography>
              <Typography align="center"> 
                <IconButton 
                  href="https://www.linkedin.com/in/matteo-grutta" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <LinkedInIcon/>
                </IconButton>
                <IconButton 
                  href="https://github.com/Mg9k" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHubIcon/>
                </IconButton>
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Container>
  );
}
  
  export default Contact