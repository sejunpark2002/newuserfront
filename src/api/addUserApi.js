export const addUserAPI = async (newUser) => {
  // try catch
  //  api view (header,layout) component

  const res = await fetch(`${process.env.REACT_APP_API_ADDRESS_DEV}`, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await res.json();
  return result;

  //  dispatch(createUserAction(newUser))
};
