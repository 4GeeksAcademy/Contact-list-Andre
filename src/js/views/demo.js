import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Importa el contexto de la aplicación
import { Context } from "../store/appContext";

// Importa el archivo de estilos para esta vista
import "../../styles/demo.css";

// Importa el componente FormContact
import { FormContact } from "../component/formContact.js";

// Componente funcional para la vista Demo
export const Demo = () => {
  // Accede al estado global y las acciones a través del contexto
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      {/* Renderiza el componente FormContact */}
      <FormContact />
    </div>
  );
};
