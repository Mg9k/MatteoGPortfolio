import {
  Container,
  Typography,
  Grid2,
  Avatar,

} from "@mui/material";

function Home() {

    return (
      <Container component="main">
        <br/>
        <Typography variant="h2" align="center" gutterBottom> Welcome! </Typography>
        <br/>
        <Grid2 container spacing={5}>
          <Grid2 item="true" size={12}>
            <Avatar src="me.jpg" sx={{height: 225, width: 225, justifyContent: "center", display: "flex", margin: "auto"}}/>
          </Grid2>
          <Grid2 item="true" size={12} >
            <Typography variant="h4" align="center" gutterBottom> Hi! I'm Matteo.</Typography>
            <Typography variant="h6" align="center" gutterBottom> 
              I am a computer science student specializing in software development. 
              I am currently in my third of four years working towards my Bachelor's degree at Seneca Polytechnic. 
              I have a keen interest in the way computers work and I enjoy expanding my knowledge and skills so I can be better at what I do.
            </Typography>
          </Grid2>            
        </Grid2>
      </Container>
    );
  }
  
  export default Home