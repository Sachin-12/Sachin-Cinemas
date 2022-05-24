import { WarningOutlined } from '@mui/icons-material'
import { Button, Dialog as DialogLib, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'


function Dialog({ isOpen, onClose, primaryActionText, title }) {
  return (
    <DialogLib open={isOpen}>
      <DialogTitle sx={{ display: "flex", justifyContent: "center" }}><WarningOutlined /></DialogTitle>
      <DialogContent >
        <DialogContentText>
          {title}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{primaryActionText}</Button>
      </DialogActions>
    </DialogLib>
  )
}

export default Dialog

