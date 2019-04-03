import React from 'react'
import { connect } from 'react-redux'
import { fetchGamecast, fetchPlayByPlay } from '../../store'
import Livescore from './Livescore'
import ShootingStats from './ShootingStats'
import PlayByPlay from './PlayByPlay'

class Gamecast extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchGamecast()
    this.props.fetchPlayByPlay()
  }

  render() {
    return (
      <section className="main-body">
        <div className="main-body-left">
          <div className="main-body-left-row scorecard">
            <Livescore gamecastData={this.props.gamecastData} />
            <div className="game-cast">
              <div className="game-cast-last-play">
                LAST PLAY: TV TIMEOUT. GO GET A SNACK.
              </div>
              <div className="game-cast-scoreboard">
                <div className="game-cast-shot-toggle">
                  SHOW:
                  <span className="bold">
                    RECENT SHOTS <i className="fas fa-angle-down" />
                  </span>
                </div>
                <div className="game-cast-shooting-stats">
                  <ShootingStats
                    shootingStats={
                      this.props.gamecastData.away_team.shooting_stats
                    }
                    team="home"
                  />
                  <img
                    className="shotchart"
                    alt="FanDuel Game Cast"
                    src="images/court.png"
                  />
                  <ShootingStats
                    shootingStats={
                      this.props.gamecastData.home_team.shooting_stats
                    }
                    team="away"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="main-body-left-row">
            <PlayByPlay
              playByPlay={this.props.playByPlayData}
              home={this.props.gamecastData.home_team.abbrev}
              away={this.props.gamecastData.away_team.abbrev}
            />
            <div className="game-info-column stats">
              <div className="header">STATS</div>
            </div>
          </div>
        </div>
        <div className="main-body-right">
          <div className="header">YOUR SCORING</div>
          <div className="your-games">
            <div className="your-games-options games-options-active">
              THIS GAME
            </div>
            <div className="your-games-options">ALL GAMES</div>
          </div>
        </div>
      </section>
    )
  }
}

const mapProps = state => {
  return {
    gamecastData: state.gamecast,
    playByPlayData: state.playByPlay.results
  }
}

const mapDispatch = dispatch => {
  return {
    fetchGamecast: () => dispatch(fetchGamecast()),
    fetchPlayByPlay: () => dispatch(fetchPlayByPlay())
  }
}

const Connected = connect(
  mapProps,
  mapDispatch
)(Gamecast)

export default Connected
