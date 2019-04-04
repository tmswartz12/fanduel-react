import React from 'react'

const UnactiveBoxscore = props => {
  return (
    <div
      onClick={() => props.handleFooterClick(props.idx)}
      key={props.data.game_id}
    >
      <div className="unactive-boxscore">
        <div className="unactive-boxscore-row">
          <div className="unactive-boxscore-team-column">
            <div>{`${props.data.away_team.abbrev}`}</div>
            <div>{`${props.data.home_team.abbrev}`}</div>
          </div>
          <div className="unactive-boxscore-score-column">
            <div>{`${props.data.away_team.score}`}</div>
            <div>{`${props.data.home_team.score}`}</div>
          </div>
        </div>
        <div className="unactive-boxscore-game-clock">{`${
          props.data.time_left
        } ${props.data.quarter}${props.ordinal}`}</div>
      </div>
    </div>
  )
}

export default UnactiveBoxscore
