export const signUp = (email, confirmPassword) => {
  return async (dispatch) => {
    const signingUp = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB24rJ_iLte4r2Hn8ZZBQ97KN1KhqAEkEI",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: confirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        return response.json().then((response) => {
          throw new Error(response.error.message);
        });
      }

      const data = await response.json();
      console.log(data);
    };
    try {
      await signingUp();
    } catch (error) {
      alert(error);
    }
  };
};
