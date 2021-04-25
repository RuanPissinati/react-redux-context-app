const isAuthenticated = () => {
  // consulta o estado atual da autentificação do user no Redux;
};

const userAuthenticate = (login) => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (login.user === "admin" && login.password === "12345" ? 
      resolve(true) : reject(false)),
      2500
    )
  );
};
