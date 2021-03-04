import { makeStyles } from '@material-ui/core/styles';

//Using custom CSS
const useStyles = makeStyles((theme) => ({
    root: {
      position: "static",
      bottom: 0,
     // maxWidth:"100%",
      backgroundColor: "#FFFFFF"
    },
   socialLink: {
    color: "black"
  }

  }))

  export default useStyles;