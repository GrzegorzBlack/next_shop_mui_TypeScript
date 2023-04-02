import { useReducer, createContext, useContext, Dispatch } from "react";

const userLoggedData = {
  isLogged: false,
  userName: "",
};

export interface UserData {
  isLogged: boolean;
  userName: string;
};


interface ACTIONTYPE extends UserData {
  type: string;
};

type UserContextType = {
  state: UserData;
  dispatch: React.Dispatch<any>
};

type Action = {
  type: string;
  userName: string;
  isLogged: boolean;

  payload: (payload: UserData) => void;
};

type LogUnlog = {
  Log: "LOGGED_UNLOGGED",
};

// type Payload = {
//   type: any;
//   ["LOGGED_UNLOGGED"]: {
//     isLogged: boolean;
//     userName: string;
//   };
// }

type Payload = {
  type: "LOGGED_UNLOGGED";
  payload: {
    userName: string;
    isLogged: boolean;
  };
}


// const UserContext = createContext<UserContextType | null>(null);

const UserContext = createContext<{ state: UserData; dispatch: Dispatch<Payload>; }>({
  state: userLoggedData,
  dispatch: () => null
});

const userReducer = (state: UserData, action: Payload) => {

  switch (action.type) {
    case "LOGGED_UNLOGGED":
      return {
        ...state,
        isLogged: action.payload.isLogged
      };
    default:
      throw new Error("Something went wrong with userlogiin!");
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userLoggedData);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
