import React from 'react'

const Flyout = props => {
  return (
    <div className="flyout">
      <div className="flyout-header">
        <i onClick={() => props.flyout()} className="fas fa-times" />
      </div>
      <div className="flyout-body">
        <div className="nav-link-container full">
          <div className="nav-link nav-link-last">
            <i
              className="fas fa-user-circle"
              style={{ fontSize: '20px', paddingRight: '10px' }}
            />
            {`nbonaddio `}
            <i className="fas fa-angle-down" />
          </div>
        </div>
        <div className="nav-link-container full">
          <div className="balance-container">
            <div className="remaining-balance bold">$1,000,000.00</div>
            <div className="remaining-balance">Balance</div>
          </div>
          <div className="btn-add-funds">Add Funds</div>
        </div>

        <div className="nav-link-container full">
          <div className="nav-link nav-link-last">Lobby</div>
        </div>
        <div className="nav-link-container full">
          <div className="nav-link nav-link-last">Upcoming</div>
        </div>
        <div className="nav-link-container full">
          <div className="nav-link nav-link-last">
            Live <i className="fas fa-angle-down" />
          </div>
        </div>
        <div className="nav-link-container full">
          <div className="nav-link nav-link-last">History</div>
        </div>
        <div className="nav-link-container full">
          <div className="nav-link nav-link-last">Help</div>
        </div>
      </div>
    </div>
  )
}

export default Flyout
