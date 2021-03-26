
//import { Card, Button } from 'react-bootstrap';
import { deepOrange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
// import CleaningPic from "../Images/cleaning.jpg"
// import FarmingPic from "../Images/farming.jpeg";
// import TechPic from "../Images/tech.jpeg";


//import "./Services.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Services() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="container-fluid services">
            <h1>Our Services.</h1>
            <div className="row">
                <Card className="root col-sm-12 col-md-4">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>C </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="CISP CLEANING SERVICE"
                        subheader="Our reputation is spotless"
                    />
                   <Image
                        src="/cleaning.jpg"
                        alt="Picture of the author"
                        width={600}
                        height={400}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            We work to improve your lifestyle
                            Make your home pleasant sparkling clean and disinfect all areas
                            Our cleaners are well screened, trained and excellent human beings.
        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                We understand first impression counts for your clients.
                                A spotless cleaning can help you look more professional and dedication to details.
                                We come to you understand your needs and create scope of work and achieve it every day.
          </Typography>
                            <Typography paragraph>
                                We work to improve your lifestyle
                                Make your home pleasant sparkling clean and disinfect all areas
                                Our cleaners are well screened, trained and excellent human beings.
          </Typography>
                            <Typography paragraph>
                                Health sectors are a vital organ of our community who care for our elderly and the sick.
                                We understand one of the major requirements in this sector are infection control and disinfection.
                                We understand the sensitivity of these industry and have prepared and trained our cleaners accordingly.
          </Typography>
                            <Typography>
                                As we have an eye for detailed cleaning.
                                Our dedicated team who work with precision will deliver a sharp looking retail shop and shopping complex.
                                We also offer continuous attendant for your shopping complex to maintain cleanness and hygiene.
          </Typography>
                        </CardContent>
                    </Collapse>
                </Card>


                <Card className="root col-sm-12 col-md-4">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>F </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="CISP FARM SERVICE"
                        subheader="Cultivating Ideas for Growth"
                    />
                    <Image
                        src="/farming.jpeg"
                        alt="Picture of the author"
                        width={600}
                        height={400}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            We work to improve your lifestyle
                            Make your home pleasant sparkling clean and disinfect all areas
                            Our cleaners are well screened, trained and excellent human beings.
        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                We understand first impression counts for your clients.
                                A spotless cleaning can help you look more professional and dedication to details.
                                We come to you understand your needs and create scope of work and achieve it every day.
          </Typography>
                            <Typography paragraph>
                                We work to improve your lifestyle
                                Make your home pleasant sparkling clean and disinfect all areas
                                Our cleaners are well screened, trained and excellent human beings.
          </Typography>
                            <Typography paragraph>
                                Health sectors are a vital organ of our community who care for our elderly and the sick.
                                We understand one of the major requirements in this sector are infection control and disinfection.
                                We understand the sensitivity of these industry and have prepared and trained our cleaners accordingly.
          </Typography>
                            <Typography>
                                As we have an eye for detailed cleaning.
                                Our dedicated team who work with precision will deliver a sharp looking retail shop and shopping complex.
                                We also offer continuous attendant for your shopping complex to maintain cleanness and hygiene.
          </Typography>
                        </CardContent>
                    </Collapse>
                </Card>



                <Card className="root col-sm-12 col-md-4">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>T </Avatar>
                        }
                        
                        title="CISP TECH SERVICE"
                        subheader="When Performance Matters."
                    />
                  <Image
                        src="/tech.jpeg"
                        alt="Picture of the author"
                        width={600}
                        height={400}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            We work to improve your lifestyle
                            Make your home pleasant sparkling clean and disinfect all areas
                            Our cleaners are well screened, trained and excellent human beings.
        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                We understand first impression counts for your clients.
                                A spotless cleaning can help you look more professional and dedication to details.
                                We come to you understand your needs and create scope of work and achieve it every day.
          </Typography>
                            <Typography paragraph>
                                We work to improve your lifestyle
                                Make your home pleasant sparkling clean and disinfect all areas
                                Our cleaners are well screened, trained and excellent human beings.
          </Typography>
                            <Typography paragraph>
                                Health sectors are a vital organ of our community who care for our elderly and the sick.
                                We understand one of the major requirements in this sector are infection control and disinfection.
                                We understand the sensitivity of these industry and have prepared and trained our cleaners accordingly.
          </Typography>
                            <Typography>
                                As we have an eye for detailed cleaning.
                                Our dedicated team who work with precision will deliver a sharp looking retail shop and shopping complex.
                                We also offer continuous attendant for your shopping complex to maintain cleanness and hygiene.
          </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </div>
    );
}
