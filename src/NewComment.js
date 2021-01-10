import React from 'react';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import {Box,Avatar,makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  avatar: {
    height: 30,
    width: 30
  },
}));

const NewComment = ({content, index}) => {
  const classes = useStyles();
  
  
  return (
    <Box style={{ width: 500, height: 200, border: '1px solid lightgray' }}>
    <Avatar className={classes.avatar}/>
      <Box value={content} id={index} />
    </Box>
  );
};
export default NewComment;