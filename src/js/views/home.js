import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FormContact } from "../component/formContact.js";
import { FormUpdate } from "../component/formUpdate.js";
import { ListContact } from "../component/listContact.js";

// Componente funcional para la vista principal (Home)
export const Home = () => (
  <div className="text-center mt-5">
    {/* Renderiza el componente ListContact, que probablemente muestra la lista de contactos */}
    <ListContact />
  </div>
);
