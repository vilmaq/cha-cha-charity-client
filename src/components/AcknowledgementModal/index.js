import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    textAlign: "center",
  },
}));

const AcknowledgementModal = ({ open, onClose, title, subTitle }) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Divider />
      <Typography variant="h6" component="p">
        {subTitle}
      </Typography>
    </div>
  );

  return (
    <Modal open={open} onClose={onClose}>
      {body}
    </Modal>
  );
};

export default AcknowledgementModal;
