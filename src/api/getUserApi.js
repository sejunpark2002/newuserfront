export const getUserAPI = async () =>{


const res = await fetch(`${process.env.REACT_APP_API_ADDRESS_DEV}`,{
  method: 'GET',
  headers: {
    'Content-Type' : 'application/json'
  }
});
const {result} = await res.json();
return result

//  dispatch(createUserAction(newUser))
}

