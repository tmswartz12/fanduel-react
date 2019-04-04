import React from 'react'
import { connect } from 'react-redux'
import { fetchFooter } from '../../store'
import { ordinalHelper, inPlaceSwap } from '../../utils'
import ActiveBoxscore from './ActiveBoxscore'
import UnactiveBoxscore from './UnactiveBoxscore'

class Footer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      footerData: []
    }
    this.handleFooterClick = this.handleFooterClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchFooter()
  }

  handleFooterClick(idx) {
    let footerData = inPlaceSwap(this.props.footerData, idx)
    this.setState({ footerData })
  }

  render() {
    let footerData = this.state.footerData.length
      ? this.state.footerData
      : this.props.footerData

    return (
      <footer className="footer">
        <div className="league-row">
          <div className="league league-active">NBA</div>
          <div className="league">MLB</div>
          <div className="league">NCAAF</div>
        </div>
        <div className="boxscore">
          <div className="previous-boxscore">
            <i className="fas fa-angle-left" />
          </div>
          {footerData.map((game, idx) => {
            let ordinal = ordinalHelper(game.quarter)
            if (idx === 0) {
              return (
                <ActiveBoxscore
                  key={game.game_id}
                  data={game}
                  ordinal={ordinal}
                />
              )
            } else {
              return (
                <UnactiveBoxscore
                  key={game.game_id}
                  data={game}
                  ordinal={ordinal}
                  idx={idx}
                  handleFooterClick={this.handleFooterClick}
                />
              )
            }
          })}
        </div>
      </footer>
    )
  }
}

const mapProps = state => {
  return {
    footerData: state.footer.results
  }
}

const mapDispatch = dispatch => {
  return {
    fetchFooter: () => dispatch(fetchFooter())
  }
}

const Connected = connect(
  mapProps,
  mapDispatch
)(Footer)

export default Connected
