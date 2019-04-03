import React from 'react'

class Gamecast extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <section className="main-body">
        <div className="main-body-left">
          <div className="main-body-left-row scorecard">
            <div className="live-score">
              <div className="home-team team-box">
                <div className="home-team-name home">
                  <div>GOLDEN STATE</div>
                  <div className="bold">WARRIORS</div>
                </div>
                <div className="score">
                  <div className="home bold">96</div>
                </div>
              </div>
              <div className="game-clock">
                <div>7:34 4th</div>
                <div className="arena-info">
                  <div>Oracle Arena</div>
                  <div>Oakland, CA</div>
                </div>
              </div>
              <div className="away-team team-box">
                <div className="away-team-name away">
                  <div>OKLAHOMA CITY</div>
                  <div className="bold">THUNDER</div>
                </div>
                <div className="score">
                  <div className="away bold">81</div>
                </div>
              </div>
            </div>
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
                  <div className="shooting-stats-column">
                    <div className="shooting-stats shooting-stats-border">
                      <div>FG%</div>
                      <div className="home stat">55.7%</div>
                    </div>
                    <div className="shooting-stats shooting-stats-border">
                      <div>FT%</div>
                      <div className="home stat">60.0%</div>
                    </div>
                    <div className="shooting-stats">
                      <div>3P%</div>
                      <div className="home stat">55.5%</div>
                    </div>
                  </div>
                  <img
                    className="shotchart"
                    alt="FanDuel Game Cast"
                    src="/public/images/court.png"
                  />
                  <div className="shooting-stats-column">
                    <div className="shooting-stats shooting-stats-border">
                      <div>FG%</div>
                      <div className="away stat">47.1%</div>
                    </div>
                    <div className="shooting-stats shooting-stats-border">
                      <div>FT%</div>
                      <div className="away stat">80.0%</div>
                    </div>
                    <div className="shooting-stats">
                      <div>3P%</div>
                      <div className="away stat">36.4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-body-left-row">
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
                      <span className="bold">Stephen Curry</span> makes 13 foot
                      jumper.
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
                      <span className="bold">Kevin Durant</span> misses 2-foot
                      layup.
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
                      <span className="bold">Klay Thompson</span> misses 24-foot
                      jumper.
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
                      <span className="bold">Stephen Curry</span> makes free
                      throw.
                    </div>
                  </div>
                  <div className="recent-play-score bold">94-81, GS</div>
                </div>
              </div>
            </div>
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

export default Gamecast
