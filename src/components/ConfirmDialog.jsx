import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    Button } from '@mui/material'

export default function ConfirmDialog({title, text, onClose, onConfirm,...otherProps}){
    return(
        <Dialog
        {...{onClose, ...otherProps}}
      >
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    )
}