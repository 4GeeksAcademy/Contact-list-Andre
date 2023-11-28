import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FormUpdate } from "../component/formUpdate.js";

// Componente funcional para la vista de un solo contacto
export const Single = (props) => {
  // Accede al estado global y las acciones mediante el contexto
  const { store, actions } = useContext(Context);

  // Obtiene los parámetros de la URL utilizando react-router-dom
  const params = useParams();
  const contact_id = params.theid;

  return (
    <div className="text-center">
      {/* Renderiza el componente FormUpdate y pasa el ID del contacto como prop */}
      <FormUpdate contact_id={contact_id} />
    </div>
  );
};

// Propiedades esperadas para el componente Single
Single.propTypes = {
  match: PropTypes.object,
};
