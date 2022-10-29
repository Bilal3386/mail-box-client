import axios from "axios";
import { composeActions } from "./compose-reducers";

export const composeMail = (email, text) => {
  return async (dispatch) => {
    const loggedInUserMail = localStorage.getItem('email')
    const userMail = loggedInUserMail.split('.').join('')
    const postData = async () => {
      const response = await axios.post(
        `https://mail-box-client-7f5fa-default-rtdb.firebaseio.com/${userMail}.json`,
        {
          email,
          text,
        }
      );
      console.log(response.data);
    };
    try {
      await postData();
      dispatch(composeActions.cleanEmail(userMail))
    } catch (error) {
      console.log(error);
    }
  };
};
