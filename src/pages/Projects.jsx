import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Grid2,
} from "@mui/material";

function Projects() {
    return (
      <Container component="main">
        <br/>
        <Typography variant="h2" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid2 container columns={1} justifyContent="center">
        <Grid2 item="true" my={2} size={4}>
            <Card raised>
              <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                My Portfolio Website (ReactJS)
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                This is the very website you're on right now. 
                This portfolio was built using React and Vite, featuring Material UI components and Vercel deployment.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                GitHub Repo Link: <a 
                  href="https://github.com/Mg9k/MatteoGPortfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  > https://github.com/Mg9k/MatteoGPortfolio </a>
              </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item="true" my={2} size={4}>
            <Card raised>
              <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Customer Order Assembly Line Program (C++)
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                This program takes customer orders from a text file and fills out the order by putting it through an assembly line.
                The assembly line is composed of workstations and a line manager, which contains the workstations. 
                The information for both of the above is pulled from a text file. 
                The customer's orders are pushed through the assembly line, where the items within the orders are processed at their respective station.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                GitHub Repo Link: <a 
                  href="https://github.com/Mg9k/AssemblyLineProjectCPP"
                  target="_blank"
                  rel="noopener noreferrer"
                  > https://github.com/Mg9k/AssemblyLineProjectCPP </a>
              </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item="true" my={2} size={4}>
            <Card raised>
              <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                BabySitterConnect (ReactJS)
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                This is a full-stack application made using ReactJS and MongoDB. 
                This was developed collaboratively with a team through a series of project management courses I took within my program.
                The application acts as a platform for parents to connect with babysitters. 
                Additionally, users can read and write reviews for babysitters, view their availability hours, and glance through their resumes.
                New babysitters are pormpted to fill out an application form to be verified by an administrator. Only verified babysitters will be publicly shown to users.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Program Link: <a 
                  href="https://group-14-lemon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  > https://group-14-lemon.vercel.app/ </a>
              </Typography>
              </CardContent>
            </Card>
          </Grid2>
          
        </Grid2>
      </Container>
    );
  }
  
  export default Projects