import { useReducer, createContext, useContext, Dispatch } from "react";

let isLogged = false;

type AdminTypes = true | false;


type Payload = {
  type: "LOGGED" | "UNLOGGED";
  payload?: boolean;
}

const AdminContext = createContext<{ state: AdminTypes; dispatch: Dispatch<Payload>; }>({
  state: isLogged,
  dispatch: () => null
});

const adminReducer = (state: AdminTypes, action: Payload) => {
  switch (action.type) {
    case "LOGGED":
      return (state = true);
    case "UNLOGGED":
      return (state = false);

    default:
      throw new Error("Something went wrong admin!");
  }
};

const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, isLogged);

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;

export const useAdmin = () => useContext(AdminContext);
