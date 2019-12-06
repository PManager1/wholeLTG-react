import React from 'react'; 
// import { Col, Row, Container, Form } from 'react-bootstrap';
// import './Footer.scss'; 

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
 function Faq() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
      
          <Grid item xs={4}>
            <div className={classes.paper}>
                xs=3 LTG icon
                <img alt="liberty buys housess" src="/Images/mylogo.png" />
                </div>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}> first + second li</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}> Fb icons </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  


// const Faq = () =>{
//         return <div> 
            
//     </div>

// }

export default Faq; 