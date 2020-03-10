import React from 'react';

function WelcomeModal() {

  return (
    <div className="modal d-flex" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Welcome to Bujo Central</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Please note that this website is a content mangagement application created for the purpose of demostration. Check the box below to acknowledge that the merchandise shown here
              is not available for purchase, that you will ot provide genuine financial or personal information, and that you are aware no purchase will truly be processed.
            </p>
            <input className="d-inline" type="checkbox" aria-label="Checkbox for following text input" />
            <p className="d-inline">I acknowledge that this is strictly a demo application</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;