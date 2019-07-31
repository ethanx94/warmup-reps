import React from 'react';
import { AlertDialog } from 'react-onsenui';

const WarningAlertDialog = ({ dialogOpen, setDialogIsOpen, callback }) => (
  <AlertDialog
    isOpen={dialogOpen}
    onCancel={() => setDialogIsOpen(false)}
    cancelable
    modifier="rowfooter"
  >
    <div className="alert-dialog-title">Warning</div>
    <div className="alert-dialog-content">
      Are you sure you wish to clear all saved data?
    </div>
    <div className="alert-dialog-footer">
      <button
        onClick={() => {
          callback();
          setDialogIsOpen(false);
        }}
        className="alert-dialog-button"
      >
        Delete
      </button>
      <button
        onClick={() => setDialogIsOpen(false)}
        className="alert-dialog-button"
      >
        Cancel
      </button>
    </div>
  </AlertDialog>
);

export default WarningAlertDialog;
