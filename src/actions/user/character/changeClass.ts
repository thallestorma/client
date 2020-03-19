import axios from 'axios';

// Types
import { SET_CHARACTER_LOADER } from 'redux/types/actions';

// Redux
import AppState from 'redux/types/app';
import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Actions
import { notice } from 'actions/utils';
import { getChars } from 'actions/user/character';

const changeClass: ActionCreator<ThunkAction<void, AppState, any, Action>> = (
  name: string,
  newClass: number
) => async dispatch => {
  dispatch({ type: SET_CHARACTER_LOADER, payload: true });

  try {
    const { data } = await axios.patch(
      process.env.REACT_APP_API_URI + '/user/character/class',
      { name, newClass }
    );

    dispatch(getChars());

    notice(data);
  } catch (error) {
    notice(error);
  }

  dispatch({ type: SET_CHARACTER_LOADER, payload: false });
};

export default changeClass;
