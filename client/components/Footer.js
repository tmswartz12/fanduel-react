import React from 'react'

const Footer = () => {
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
        <div className="active-boxscore">
          <div className="active-boxscore-row">
            <div className="active-boxscore-column">
              <div className="boxscore-team">
                <div className="boxscore-team-home">WARRIORS</div>
                <div className="boxscore-team-away">THUNDER</div>
              </div>
              <div className="boxscore-score bold">
                <div>96</div>
                <div>81</div>
              </div>
            </div>
            <div className="top-player">
              <div className="team-column">GSW</div>
              <div className="top-player-column">
                <div>S. Curry, PG</div>
                <div className="top-player-stats">23 points, 6 assists</div>
              </div>
            </div>
            <div className="top-player">
              <div className="team-column">OKC</div>
              <div className="top-player-column">
                <div>K. Durant, SF</div>
                <div className="top-player-stats">30 points, 9 rebounds</div>
              </div>
            </div>
          </div>
          <div className="active-boxscore-game-clock">7:34 4th TV: ESPN</div>
        </div>
        <div className="unactive-boxscore">
          <div className="unactive-boxscore-row">
            <div className="unactive-boxscore-team-column">
              <div>CHI</div>
              <div>BOS</div>
            </div>
            <div className="unactive-boxscore-score-column">
              <div>56</div>
              <div>54</div>
            </div>
          </div>
          <div className="unactive-boxscore-game-clock">6:33 3rd</div>
        </div>
        <div className="unactive-boxscore">
          <div className="unactive-boxscore-row">
            <div className="unactive-boxscore-team-column">
              <div>ATL</div>
              <div>MEM</div>
            </div>
            <div className="unactive-boxscore-score-column">
              <div>26</div>
              <div>24</div>
            </div>
          </div>
          <div className="unactive-boxscore-game-clock">12:00 2nd</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
