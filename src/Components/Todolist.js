import React, { useState } from 'react';
import './../ComponentStyles/Todolist.css';
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
}));

function Todolist(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
    }

    const editStyle= {
        float: "left",
        marginLeft: "13px"
    };

    const deleteStyle= {
        float: "left"
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>

            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Due Today" />
                </ListItem>
                <EditIcon style={editStyle} onClick={e => setOpen(true)}></EditIcon>
                <DeleteForeverIcon style={deleteStyle} onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
            </List>
        </div>
    )
}

export default Todolist
