import React, {useState} from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import {Button,Typography,Divider, makeStyles, Paper} from "@material-ui/core";
import NewComment from './NewComment';
import parse from 'html-react-parser';

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
      ['bold', 'italic', 'underline', 'strike', 'link'],  
      [{ color: [] }],
    [{ list: 'ordered'}, { list: 'bullet' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ],
  };
  const placeholder = 'Add a comment...';
  const formats = ['bold', 'italic', 'underline', 'strike', 'link', 'color', 'list', 'size'];
  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });
  const [savedText, setSavedText] = useState('');
  const [allNotes, setAllNotes]= useState([]);
  
  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        let html = parse(quill.root.innerHTML); 
        setSavedText(html);
      });
    }
  }, [quill]); //saves updated content to state

  const deleteNote = id => {
    const modifiedNote = allNotes.filter(eachNote => {
      return eachNote.id !== id;
    });
    setAllNotes(modifiedNote);
  };
 
  const saveNote = (event) => {
    event.preventDefault(); 
    const id = Date.now();
    let length = quill.getLength();
    setAllNotes([...allNotes, { savedText, id }])
    quill.deleteText(0, length);
  };
 
  return (
    <div >
    <Paper elevation={7} className={classes.root} square={false}>
    <Typography variant="h4">Project Comments</Typography>
    <br/>
    <Divider/>
    {allNotes.map(eachNote => {
      return (
        <NewComment
        id={eachNote.id}
        key={eachNote.id}
        savedText={eachNote.savedText}
        deleteNote={deleteNote}/>
      );
    })}
    <form onSubmit={saveNote}>
    <div style={{ width: 'auto', height: 200, border: '1px solid lightgray' }}>
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
