function login(id, password) {
  return (dispatch, getState) => {
    console.log("LOGIN SUCCESS");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const authenticateAction = { login };
