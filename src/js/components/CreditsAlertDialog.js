import React from 'react';
import { AlertDialog } from 'react-onsenui';

const CreditsAlertDialog = ({ dialogOpen, setDialogIsOpen }) => (
  <AlertDialog
    isOpen={dialogOpen}
    onCancel={() => setDialogIsOpen(false)}
    cancelable
  >
    <div className="alert-dialog-title">Credits</div>
    <div className="alert-dialog-content">
      Written and maintained by <br />
      Nicholas Munson © {new Date().getFullYear()}
      <br />
      UI Redesign Ethan Richardson
    </div>
    <div className="alert-dialog-footer">
      <button
        onClick={() => setDialogIsOpen(false)}
        className="alert-dialog-button"
      >
        Ok
      </button>
    </div>
  </AlertDialog>
);

export default CreditsAlertDialog;
