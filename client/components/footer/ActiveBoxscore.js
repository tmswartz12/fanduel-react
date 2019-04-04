import React from 'react'

const ActiveBoxscore = props => {
  return (
    <div className="active-boxscore">
      <div className="active-boxscore-row">
        <div className="active-boxscore-column">
          <div className="boxscore-team">
            <div className="boxscore-team-home">{`${
              props.data.away_team.name
            }`}</div>
            <div className="boxscore-team-away">{`${
              props.data.home_team.name
            }`}</div>
          </div>
          <div className="boxscore-score bold">
            <div>{`${props.data.away_team.score}`}</div>
            <div>{`${props.data.home_team.score}`}</div>
          </div>
        </div>
        <div className="top-player">
          <div className="team-column">{`${
            props.data.top_performers[0].team
          }`}</div>
          <div className="top-player-column">
            <div>{`${props.data.top_performers[0].name}, ${
              props.data.top_performers[0].position
            }`}</div>
            <div className="top-player-stats">
              {`${props.data.top_performers[0].points} points, ${
                props.data.top_performers[0].rebounds
              } assists`}
            </div>
          </div>
        </div>
        <div className="top-player">
          <div className="team-column">{`${
            props.data.top_performers[1].team
          }`}</div>
          <div className="top-player-column">
            <div>{`${props.data.top_performers[1].name}, ${
              props.data.top_performers[1].position
            }`}</div>
            <div className="top-player-stats">
              {`${props.data.top_performers[1].points} points, ${
                props.data.top_performers[1].rebounds
              } assists`}
            </div>
          </div>
        </div>
      </div>
      <div className="active-boxscore-game-clock">
        {`${props.data.time_left} ${props.data.quarter}${
          props.ordinal
        } TV: ESPN`}
      </div>
    </div>
  )
}

export default ActiveBoxscore
