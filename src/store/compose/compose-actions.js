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


export const Fetching = () => {
    return async (dispatch) => {
      const loggedInUserMail = localStorage.getItem('email')
      const userMail = loggedInUserMail.split('.').join('')
      const fetchAllMails = async () => {
        const response = await axios.get(
          `https://mail-box-client-7f5fa-default-rtdb.firebaseio.com/${userMail}.json`,
          
        );
        const loadedEmail = [];
        for (const key in response.data) {
            loadedEmail.push({
            id: key,
            email: response.data[key].email,
            text: response.data[key].text,
          });
        }
       return loadedEmail
      };
      try {
        const data = await fetchAllMails();
        console.log(data)
        dispatch(composeActions.fetchEmail(data))
      } catch (error) {
        console.log(error);
      }
    };
  };