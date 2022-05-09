import { 
    ListItem as MuiAppBar, 
    IconButton, 
    List, 
    ListItemButton, 
    Checkbox, 
    ListItemText,
    Stack,
    Fab
} from '@mui/material'
import { 
    Edit as EditIcon, 
    Delete as DeleteIcon, 
    Add as AddIcon 
} from '@mui/icons-material'
import { useState, useEffect } from 'react'
import ConfirmDialog from './ConfirmDialog.jsx'
import PageBox from './PageBox.jsx'



export default function ListItems(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if (!sessionStorage.token) {
            navigateToLogin()
            return
        }

        fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Token ${sessionStorage.token}`,
            },
        })
        .then((res) => res.json())
        .then(setTodos)
    }, [])

    const handleItemClick = index => () => {
        // checkbox.false => checkbox.true
    }

    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false)

    const handleDeleteConfirmOpen = id => () => setIsDeleteConfirmOpen(true)

    const handleDeleteConfirmClose = () => setIsDeleteConfirmOpen(false)

    return(
        <PageBox>
            <List sx={{ p:2, }}>
            {todos.map((todoItem) => {
                <ListItem
                    key={todoItem.id}
                    secondaryAction={
                        <Stack direction='row' spacing={3}>
                            <IconButton edge="end">
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" onClick={handleDeleteConfirmOpen{todoItem.id}}>
                                <DeleteIcon />
                            </IconButton>
                            
                        </Stack>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={handleToggle(todoItem.id)} dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        checked={todoItem.done}
                        tabIndex={-1}
                        disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={todoItem.description} />
                    </ListItemButton>
                </ListItem>
            })}
        </List>
        <Fab color="primary" sx={{ position: 'fixed', bottom: 24, right: 24}}>
            <AddIcon />
        </Fab>
        <ConfirmDialog title='delete to-do item' 
        text='are you sure?' 
        open={isDeleteConfirmOpen}
        onClose={handleDeleteConfirmClose}/>
    </PageBox>
    )
}