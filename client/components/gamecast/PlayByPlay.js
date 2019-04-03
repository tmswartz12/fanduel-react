import React from 'react'
import {
  ordinalHelper,
  scoringPlayerHelper,
  descriptionHelper
} from '../../utils'

const PlayByPlay = props => {
  return (
    <div className="game-info-column play-by-play">
      <div className="header">PLAY BY PLAY</div>

      {props.playByPlay.map(play => {
        let ordinal = ordinalHelper(play.quarter)
        let scoringPlayer = scoringPlayerHelper(play.scoring_player)
        let updatedDescription = descriptionHelper(play.description)
        let homeScore = play.home_score
        let awayScore = play.away_score

        let firstScore
        let secondScore
        let teamAbbrev

        if (homeScore >= awayScore) {
          firstScore = homeScore
          secondScore = awayScore
          teamAbbrev = props.home
        } else {
          secondScore = homeScore
          firstScore = awayScore
          teamAbbrev = props.away
        }

        return (
          <div key={play.id} className="recent-play">
            <img
              src={`images/${play.scoring_player}.png`}
              className="recent-play-player-img"
              alt={`${scoringPlayer}`}
            />
            <div className="recent-play-column">
              <div className="recent-play-description">
                <div className="recent-play-time">{`${play.time_left} ${
                  play.quarter
                }${ordinal}`}</div>
                <div>
                  <span className="bold">{`${scoringPlayer}`}</span>{' '}
                  {`${updatedDescription[0]}`}
                </div>
                {updatedDescription[1] && (
                  <div>{`${updatedDescription[1]}`}</div>
                )}
              </div>
              <div className="recent-play-score bold">{`${firstScore} - ${secondScore}, ${teamAbbrev}`}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PlayByPlay
