import React from 'react'

const PlayByPlay = props => {
  return (
    <div className="game-info-column play-by-play">
      <div className="header">PLAY BY PLAY</div>
      <div className="recent-play">
        <img
          className="recent-play-player-img"
          alt="Stephen Curry Golden State Warriors"
          src="/public/images/StephCurry.png"
        />
        <div className="recent-play-column">
          <div className="recent-play-description">
            <div className="recent-play-time">7:34 4th</div>
            <div>
              <span className="bold">Stephen Curry</span> makes 13 foot jumper.
            </div>
            <div>
              Assisted by <span className="bold">Draymond Green.</span>
            </div>
          </div>
          <div className="recent-play-score bold">96-81, GS</div>
        </div>
      </div>
      <div className="recent-play">
        <img
          className="recent-play-player-img"
          alt="Kevin Durant Oklahoma City Thunder"
          src="/public/images/KevinDurant.png"
        />
        <div className="recent-play-column">
          <div className="recent-play-description">
            <div className="recent-play-time">7:46 4th</div>
            <div>
              <span className="bold">Kevin Durant</span> misses 2-foot layup.
            </div>
            <div>
              Rebounded by <span className="bold">Andrew Bogut.</span>
            </div>
          </div>
          <div className="recent-play-score bold">94-81, GS</div>
        </div>
      </div>
      <div className="recent-play">
        <img
          className="recent-play-player-img"
          alt="Klay Thompson Golden State Warriors"
          src="/public/images/KlayThompson.png"
        />
        <div className="recent-play-column">
          <div className="recent-play-description">
            <div className="recent-play-time">7:55 4th</div>
            <div>
              <span className="bold">Klay Thompson</span> misses 24-foot jumper.
            </div>
            <div>
              Rebounded by<span className="bold"> Serge Ibaka.</span>
            </div>
          </div>
          <div className="recent-play-score bold">94-81, GS</div>
        </div>
      </div>
      <div className="recent-play">
        <img
          className="recent-play-player-img"
          alt="Kevin Durant Oklahoma City Thunder"
          src="/public/images/KevinDurant.png"
        />
        <div className="recent-play-column">
          <div className="recent-play-description">
            <div className="recent-play-time">8:17 4th</div>
            <div>
              <span className="bold">Kevin Durant</span> turnover.
            </div>
          </div>
          <div className="recent-play-score bold">94-81, GS</div>
        </div>
      </div>
      <div className="recent-play">
        <img
          className="recent-play-player-img"
          alt="Stephen Curry Golden State Warriors"
          src="/public/images/StephCurry.png"
        />
        <div className="recent-play-column">
          <div className="recent-play-description">
            <div className="recent-play-time">8:27 4th</div>
            <div>
              <span className="bold">Stephen Curry</span> makes free throw.
            </div>
          </div>
          <div className="recent-play-score bold">94-81, GS</div>
        </div>
      </div>
    </div>
  )
}

export default PlayByPlay
