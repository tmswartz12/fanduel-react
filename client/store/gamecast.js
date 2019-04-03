import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_GAMECAST = 'GET_GAMECAST'

/**
 * INITIAL STATE
 */
const defaultGamecast = {
  game_id: 0,
  arena: '',
  location: '',
  quarter: 0,
  time_left: '',
  away_team: {
    abbrev: '',
    name: '',
    location: '',
    shooting_stats: [
      {
        title: '',
        perc: ''
      },
      {
        title: '',
        perc: ''
      },
      {
        title: '',
        perc: ''
      }
    ],
    score: 0
  },
  home_team: {
    abbrev: '',
    name: '',
    location: '',
    shooting_stats: [
      {
        title: '',
        perc: ''
      },
      {
        title: '',
        perc: ''
      },
      {
        title: '',
        perc: ''
      }
    ],
    score: 81
  }
}

/**
 * ACTION CREATORS
 */
const getGamecast = gamecast => ({ type: GET_GAMECAST, gamecast })

/**
 * THUNK CREATORS
 */
export const fetchGamecast = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/game_stats'
    )
    dispatch(getGamecast(data || defaultGamecast))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultGamecast, action) {
  switch (action.type) {
    case GET_GAMECAST:
      return action.gamecast
    default:
      return state
  }
}
