import React from 'react'

const ShootingStats = props => {
  console.log(props)
  return (
    <div className="shooting-stats-column">
      {props.shootingStats.map((stat, idx) => {
        return (
          <div key={idx} className="shooting-stats shooting-stats-border">
            <div>{`${stat.title}`}</div>
            <div className={`${props.team} stat`}>{`${stat.perc}`}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ShootingStats
