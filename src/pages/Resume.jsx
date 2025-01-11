import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Grid2,
} from "@mui/material";
import jobExp from '../data/jobExp.json'

function Resume() {

    return (
      <Container component="main">
        <br/>
        <Typography variant="h2" align="center" gutterBottom>
          My Resume
        </Typography>
        
        <Grid2 container justifyContent="center">
          <Grid2 item="true">
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1eaZ_v4rA6y0_qW6uiyYzMbiT2SbRdhJx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: '20px' }}
            >Download my Resume (pdf)</Button>
          </Grid2>
        </Grid2>
        
        <Typography variant="h4" align="left" gutterBottom> Job Experience: </Typography>
  
        <Grid2 container justifyContent="center">  
          {jobExp.map((exp, i) => 
          <Grid2 item="true" my={2} size={12} key={i}>
            <Card raised>
              <CardContent>
                <Typography align="center" fontWeight="bold" variant="h5"> {exp.title} @ {exp.company} </Typography>
                <Typography align="center" variant="h6"> {exp.duration} </Typography>
                <Typography align="center" variant="h6"> {exp.location} </Typography>
                <br/>
                {exp.description.map((desc, j) => 
                  <Typography variant="body1" key={j}> • {desc} </Typography>
                )}
              </CardContent>
            </Card>
          </Grid2>
          )}
        </Grid2>
        <Grid2 container spacing={5}>
          <Grid2 item="true" mt={2} size={{xs: 12, sm: 7}}>
            <Typography variant="h4" align="left" gutterBottom> Education: </Typography>
            <Card raised>
              <CardContent>
                <Typography variant="h5" align="left" > Honours Bachelor of Technology - Software Development </Typography>
                <Typography variant="h6" align="left" > Seneca Polytechnic </Typography>
                <Typography variant="body1" align="left"> In Progress - Third of Four-Year Program </Typography>
              </CardContent>
            </Card>
            <br/>
            <Card raised>
              <CardContent>
                <Typography variant="h5" align="left"> Ontario Secondary School Diploma </Typography>
                <Typography variant="h6" align="left"> St. Joan of Arc Catholic High School </Typography>
                <Typography variant="body1" align="left"> Graduated June 2020 </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item="true" mt={{xs: 0, sm: 2}} size={{xs: 12, sm: 5}}>
            <Typography variant="h4" align="left" gutterBottom> Skills: </Typography>
            <Card raised>
              <CardContent>
                <Typography variant="h5" align="left" gutterBottom> Programming-Related: </Typography>
                <Typography variant="body1" align="left" gutterBottom> 
                  C, C++, Python, Javascript, HTML, CSS, ReactJS, MongoDB, SQL, GUI Design, GitHub, Full-Stack 
                </Typography>
                <Typography variant="h5" align="left" gutterBottom> General Skills: </Typography>
                <Typography variant="body1" align="left"> 
                  Teamwork, Organization, Customer Service, Computer Skills, Working Under Pressure, 
                  Adaptability, Attention to Detail, Collaboration, Time Management, Project Management
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    );
  }
  
  export default Resume