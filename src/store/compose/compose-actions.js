import axios from "axios";
import { composeActions } from "./compose-reducers";

export const composeMail = (email, text) => {
  return async (dispatch) => {
    const loggedInUserMail = localStorage.getItem("email");
    const senderMail = loggedInUserMail?.split(".").join("");
    const userMail = email?.split(".").join("");
    const postData = async () => {
      const response = await axios.post(
        `https://mail-box-client-7f5fa-default-rtdb.firebaseio.com/${userMail}/inbox.json`,
        (senderMail,
        {
          email,
          text,
          senderEmail: senderMail,
          read: "red",
        })
      );
       await axios.post(
        `https://mail-box-client-7f5fa-default-rtdb.firebaseio.com/${senderMail}/sent.json`,
        (senderMail,
        {
          email,
          text,
          senderEmail: senderMail,
          read: "red",
        })
      );
      console.log(response.data);
      return response.data;
    };
    try {
       await postData();
    //   const obj = { id: data.name, email: email, text: text, read: "red" };
    //   dispatch(composeActions.composeNewMail(obj));
    } catch (error) {
      console.log(error);
    }
  };
};

export const afterReadingMail = (email, text, id) => {
  return async (dispatch) => {
    const loggedInUserMail = localStorage.getItem("email");
    const senderMail = loggedInUserMail?.split(".").join("");
    const userMail = email?.split(".").join("");
    console.log(email)
    if (id !== undefined) {
      const postData = async () => {
        console.log('hello put')
        const response = await axios.put(
          `https://mail-box-client-7f5fa-default-rtdb.firebaseio.com/${userMail}/inbox/${id}.json`,
          (senderMail,
            {
              email,
              text,
              senderEmail: senderMail,
              read: 'blue',
            })
        );
        return response.data;
      };
      try {
        const data = await postData();
        const obj = {
          id: id,
          email: data.email,
          text: data.text,
          senderEmail: senderMail,
        };
        console.log(id);
        dispatch(composeActions.onRead(obj));
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };
};

export const FetchingDataInbox = () => {
  return async (dispatch) => {
    const loggedInUserMail = localStorage.getItem("email");
    const userMail = loggedInUserMail?.split(".").join("");
    const fetchAllMails = async () => {
      const response = await axios.get(
        `https://mail-box-client-7f5fa-default-rtdb.firebaseio.com/${userMail}/inbox.json`
      );
      const loadedEmail = [];
      for (const key in response.data) {
        loadedEmail.push({
          id: key,
          email: response.data[key].email,
          text: response.data[key].text,
          read: response.data[key].read,
          senderEmail: response.data[key].senderEmail,
        });
      }
      return loadedEmail;
    };
    try {
      const data = await fetchAllMails();
      console.log(data);
      dispatch(composeActions.fetchEmail(data));
    } catch (error) {
      console.log(error);
    }
  };
};
