import { createContext, useContext} from "react";

const AppContext = createContext({
  makeActive: (index) => {},
  active: ""
});


export function useAppContext() {
  return useContext(AppContext);
}

export const ContextProvider = AppContext.Provider;
