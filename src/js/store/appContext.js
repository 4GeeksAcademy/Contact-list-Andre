import React, { useState, useEffect } from "react";

// Importa la función `getState` del archivo `flux.js`
import getState from "./flux.js";

// Crea un contexto de React
export const Context = React.createContext(null);

// Función para envolver un componente y proporcionar el contexto
const injectContext = (PassedComponent) => {
  // Componente funcional que actúa como un contenedor para el estado global y las acciones
  const StoreWrapper = (props) => {
    // Define el estado local utilizando el estado inicial proporcionado por `getState`
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    // Efecto que se ejecuta después de que el componente se monta
    useEffect(() => {
      // Llama a la acción `ContactsList` para cargar la lista de contactos
      state.actions.contactsList();
      
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    // Renderiza el componente envuelto en el contexto proporcionado
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  // Retorna el componente envuelto
  return StoreWrapper;
};

// Exporta la función `injectContext`
export default injectContext;
