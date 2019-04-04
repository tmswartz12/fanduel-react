import React from 'react'
import Flyout from './Flyout'

class Navbar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      toggled: false
    }

    this.flyout = this.flyout.bind(this)
  }

  flyout() {
    let toggleState = !this.state.toggled
    this.setState({ toggled: toggleState })
  }

  render() {
    return (
      <div className="nav-bar">
        <img
          src="images/logo.png"
          className="fanduel-logo"
          alt="FanDuel Logo"
        />
        <nav className="nav-menu-left">
          <div className="nav-link-container">
            <div className="nav-link">Lobby</div>
          </div>
          <div className="nav-link-container">
            <div className="nav-link">Upcoming</div>
          </div>
          <div className="nav-link-container">
            <div className="nav-link">
              Live <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="nav-link-container">
            <div className="nav-link nav-link-last">History</div>
          </div>
        </nav>

        <nav className="nav-menu-right">
          <div className="nav-link-container">
            <div className="nav-link">
              Help <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="nav-link-container">
            <div className="nav-link nav-link-last">
              <i
                className="fas fa-user-circle"
                style={{ fontSize: '20px', paddingRight: '10px' }}
              />
              {`nbonaddio `}
              <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="balance-container">
            <div className="remaining-balance bold">$1,000,000.00</div>
            <div className="remaining-balance">Balance</div>
          </div>
          <div className="btn-add-funds">Add Funds</div>
        </nav>
        <div className="hamburger" onClick={() => this.flyout()}>
          <i className="fas fa-bars" />
        </div>
        {this.state.toggled && <Flyout flyout={this.flyout} />}
      </div>
    )
  }
}

export default Navbar
