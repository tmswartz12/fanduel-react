import React from 'react'
import { connect } from 'react-redux'
import { fetchFooter } from '../store'
import { ordinalHelper } from '../utils'

class Footer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchFooter()
    this.setState({ loaded: true })
  }

  render() {
    let footerData = this.props.footerData
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
                <div key={game.game_id} className="active-boxscore">
                  <div className="active-boxscore-row">
                    <div className="active-boxscore-column">
                      <div className="boxscore-team">
                        <div className="boxscore-team-home">{`${
                          game.away_team.name
                        }`}</div>
                        <div className="boxscore-team-away">{`${
                          game.home_team.name
                        }`}</div>
                      </div>
                      <div className="boxscore-score bold">
                        <div>{`${game.away_team.score}`}</div>
                        <div>{`${game.home_team.score}`}</div>
                      </div>
                    </div>
                    <div className="top-player">
                      <div className="team-column">{`${
                        game.top_performers[0].team
                      }`}</div>
                      <div className="top-player-column">
                        <div>{`${game.top_performers[0].name}, ${
                          game.top_performers[0].position
                        }`}</div>
                        <div className="top-player-stats">
                          {`${game.top_performers[0].points} points, ${
                            game.top_performers[0].rebounds
                          } assists`}
                        </div>
                      </div>
                    </div>
                    <div className="top-player">
                      <div className="team-column">{`${
                        game.top_performers[1].team
                      }`}</div>
                      <div className="top-player-column">
                        <div>{`${game.top_performers[1].name}, ${
                          game.top_performers[1].position
                        }`}</div>
                        <div className="top-player-stats">
                          {`${game.top_performers[1].points} points, ${
                            game.top_performers[1].rebounds
                          } assists`}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="active-boxscore-game-clock">
                    {`${game.time_left} ${game.quarter}${ordinal} TV: ESPN`}
                  </div>
                </div>
              )
            } else {
              return (
                <div key={game.game_id}>
                  <div className="unactive-boxscore">
                    <div className="unactive-boxscore-row">
                      <div className="unactive-boxscore-team-column">
                        <div>{`${game.away_team.abbrev}`}</div>
                        <div>{`${game.home_team.abbrev}`}</div>
                      </div>
                      <div className="unactive-boxscore-score-column">
                        <div>{`${game.away_team.score}`}</div>
                        <div>{`${game.home_team.score}`}</div>
                      </div>
                    </div>
                    <div className="unactive-boxscore-game-clock">{`${
                      game.time_left
                    } ${game.quarter}${ordinal}`}</div>
                  </div>
                </div>
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
