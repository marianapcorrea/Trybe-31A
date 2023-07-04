import fetchAPI from "../../service/fetchAPI"

const REQUEST_STARTED='REQUEST_STARTED'
const REQUEST_SUCCESS='REQUEST_SUCCESS'
const REQUEST_FAILED='REQUEST_FAILED'

const requestStarted = () =>({
  type: REQUEST_STARTED
})

const requestSuccess = (characterData) => ({
  type: REQUEST_SUCCESS,
  characterData
})

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error
})

export const fetchCharacter = async (dispatch, character) => {
    dispatch(requestStarted())
    try {
      const characterData = await fetchAPI(character);
      dispatch(requestSuccess(characterData))
    } catch (error) {
      dispatch(requestFailed(error))
    }
  
}