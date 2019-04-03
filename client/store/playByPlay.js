import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PLAY_BY_PLAY = 'GET_PLAY_BY_PLAY'

/**
 * INITIAL STATE
 */
const defaultPlayByPlay = {
  results: [
    {
      id: 0,
      away_score: 0,
      home_score: 0,
      description: '',
      quarter: 0,
      time_left: '',
      scoring_player: ''
    },
    {
      id: 0,
      away_score: 0,
      home_score: 0,
      description: '',
      quarter: 0,
      time_left: '',
      scoring_player: ''
    },
    {
      id: 0,
      away_score: 0,
      home_score: 0,
      description: '',
      quarter: 0,
      time_left: '',
      scoring_player: ''
    }
  ]
}

/**
 * ACTION CREATORS
 */
const getPlayByPlay = playByPlay => ({ type: GET_PLAY_BY_PLAY, playByPlay })

/**
 * THUNK CREATORS
 */
export const fetchPlayByPlay = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/plays'
    )
    dispatch(getPlayByPlay(data || defaultPlayByPlay))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultPlayByPlay, action) {
  switch (action.type) {
    case GET_PLAY_BY_PLAY:
      return { ...state, results: action.playByPlay }
    default:
      return state
  }
}
