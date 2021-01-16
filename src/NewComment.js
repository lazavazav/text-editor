import React from 'react';
import {Box,Button,Avatar,makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

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
 
  return (
    <Box style={{ display: 'flex', width: 'auto', height: 'auto', border: '1px solid lightgray'}}
    >
    <Avatar className={classes.avatar}/>
   <div style={{flexGrow: 1}}>{savedText}</div>
    <Button onClick={() => deleteNote(id)} className={classes.button} startIcon={<DeleteIcon  />}>Delete</Button>
    </Box>
  );
};
export default NewComment;
