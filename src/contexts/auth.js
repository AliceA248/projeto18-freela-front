import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const getUserByEmail = (email, users) =>
  users?.find((user) => user.email === email);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = getUserByEmail(
        JSON.parse(userToken)?.email,
        JSON.parse(usersStorage)
      );

      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = getUserByEmail(email, usersStorage);

    if (hasUser && hasUser.password === password) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("user_token", JSON.stringify({ email, token }));
      setUser(hasUser);
      return;
    }

    return "E-mail ou senha incorretos";
  };

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) ?? [];

    if (getUserByEmail(email, usersStorage)) {
      return "Já tem uma conta com esse E-mail";
    }

    const newUser = [...usersStorage, { email, password }];

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
