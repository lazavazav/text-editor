import React from 'react';
import {Box,Button,Avatar,makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#f7a45c',
    color: 'white',
    variant: 'contained',
    size: 'small',
    },
}));

const NewComment = ({savedText, id, deleteNote}) => {
  const classes = useStyles();
  const now = Date.now();
  console.log(now);
  
  return (
    <>
    <Box style={{ display: 'flex', flexWrap: 'wrap',  width: 'auto', height: 'auto', border: '1px solid lightgray', margin: 5, backgroundColor: '#f2f2f2'}}
    >
    <Avatar className={classes.avatar}/>
    <p style={{marginRight: 5, flexGrow: 1}}>{moment(now).format("lll")}</p>
    <Button onClick={() => deleteNote(id)} className={classes.button} startIcon={<DeleteIcon  />}>Delete</Button>
    </Box>
    <Box style={{marginLeft: 5}}>{savedText}</Box>
   </>   
  );
};
export default NewComment;
