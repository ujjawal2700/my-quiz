import { createContext, useContext} from "react";

const AppContext = createContext({
  makeActive: () => {},
  active: ""
});


export function useAppContext() {
  return useContext(AppContext);
}

export const ContextProvider = AppContext.Provider;
