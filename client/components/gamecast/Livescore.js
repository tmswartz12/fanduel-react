import React from 'react'
import { ordinalHelper } from '../../utils'

const Livescore = props => {
  console.log('gameCastData', props.gamecastData)

  let ordinal = ordinalHelper(props.gamecastData.quarter)

  let homeTeamName = props.gamecastData.home_team.name.toUpperCase()
  let awayTeamName = props.gamecastData.away_team.name.toUpperCase()

  let homeTeamScore = props.gamecastData.home_team.score
  let awayTeamScore = props.gamecastData.away_team.score

  let homeTeamLocation = props.gamecastData.home_team.location.toUpperCase()
  let awayTeamLocation = props.gamecastData.away_team.location.toUpperCase()

  let timeLeft = props.gamecastData.time_left
  let quarter = props.gamecastData.quarter
  let arena = props.gamecastData.arena
  let location = props.gamecastData.location

  return (
    <div className="live-score">
      <div className="home-team team-box">
        <div className="home-team-name home">
          <div>{`${awayTeamLocation}`}</div>
          <div className="bold">{`${awayTeamName}`}</div>
        </div>
        <div className="score">
          <div className="home bold">{`${awayTeamScore}`}</div>
        </div>
      </div>
      <div className="game-clock">
        <div>{`${timeLeft} ${quarter}${ordinal}`}</div>
        <div className="arena-info">
          <div>{`${arena}`}</div>
          <div>{`${location}`}</div>
        </div>
      </div>
      <div className="away-team team-box">
        <div className="away-team-name away">
          <div>{`${homeTeamLocation}`}</div>
          <div className="bold">{`${homeTeamName}`}</div>
        </div>
        <div className="score">
          <div className="away bold">{`${homeTeamScore}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Livescore
