
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
    appBar: {
        backgroundColor: "rgb(255,255,255)",
        height:"100px",
        marginTop:"10px"
    },
    logo:{
        margin:"10px",
        marginLeft:"50px",
       width:"50px",
       maxHeight:"auto",
       transform:"scale(2)"
    }

}));

export default useStyles;