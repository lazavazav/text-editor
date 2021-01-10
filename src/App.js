import React, {useState} from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import {Button,Typography,Divider, makeStyles, Paper} from "@material-ui/core";
import NewComment from './NewComment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    height: 600,
    margin: '0 auto',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    },
}));

const App = () => {
  const classes= useStyles();
  const theme = 'snow';
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'align', 'link'],  
      [{ color: [] }],
    [{ list: 'ordered'}, { list: 'bullet' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ],
  };
  const placeholder = 'Add a comment...';
  const formats = ['bold', 'italic', 'underline', 'strike', 'align', 'link', 'color', 'list', 'size'];
  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });
console.log(quill);
console.log(quillRef);
const content =
  React.useEffect(() => {
    if (quill) {
      quill.on('editor-change', () => {
        const text= quill.getContents();
        console.log(text);  
      }); 
    }
  }, [quill]);
  
  const [allNotes, setAllNotes]= useState([]);
  
 
  const saveNote = (event) => {
  event.preventDefault(); 
      setAllNotes([...allNotes, content]); 

  }

  return (
    <div >
    <Paper elevation={7} className={classes.root} square={false}>
    <Typography variant="h4">Project Comments</Typography>
    <br/>
    <Divider/>
    {allNotes.map(eachNote => {
      return (
        <NewComment
        key={eachNote.index}
        content={eachNote.content}/>
      );
    })}
    <form onSubmit={saveNote}>
    <div style={{ width: 500, height: 200, border: '1px solid lightgray' }}>
      <div ref={quillRef}/>
    </div>
        <Button type="submit" className={classes.button}
>Add Comment</Button>
    </form>
    </Paper>
    </div>
  );
};
export default App;
