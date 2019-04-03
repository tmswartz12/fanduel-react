import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_FOOTER = 'GET_FOOTER'

/**
 * INITIAL STATE
 */
const defaultFooter = {
  results: [
    {
      game_id: 0,
      time_left: '',
      quarter: 0,
      home_team: {
        abbrev: '',
        location: '',
        name: '',
        score: ''
      },
      away_team: {
        abbrev: '',
        location: '',
        name: '',
        score: ''
      },
      top_performers: [
        {
          name: '',
          position: '',
          team: '',
          points: 0,
          rebounds: 0
        },
        {
          name: '',
          position: '',
          team: '',
          points: 0,
          rebounds: 0
        }
      ]
    }
  ]
}

/**
 * ACTION CREATORS
 */
const getFooter = footer => ({ type: GET_FOOTER, footer })

/**
 * THUNK CREATORS
 */
export const fetchFooter = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/footer_scoreboard'
    )
    dispatch(getFooter(data || defaultFooter))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultFooter, action) {
  switch (action.type) {
    case GET_FOOTER:
      return { ...state, results: action.footer }
    default:
      return state
  }
}
