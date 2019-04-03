import React from 'react'

const ShootingStats = props => {
  return (
    <div className="shooting-stats-column">
      {props.shootingStats.map((stat, idx) => {
        return (
          <div key={idx} className="shooting-stats shooting-stats-border">
            <div>{`${stat.title}`}</div>
            <div className="home stat">{`${stat.perc}`}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ShootingStats
