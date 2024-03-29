const root = "https://socialnetwork-dev-stbs.2.ie-1.fl0.io/api/";

export const loginMe = async (credenciales) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenciales),
  };

  try {
    const response = await fetch(`${root}auth/login`, options);

    const data = await response.json();
    
    if(!data.success) {
      throw new Error(data.message)
    }

    return data;
  } catch (error) {
   return error
  }
};
