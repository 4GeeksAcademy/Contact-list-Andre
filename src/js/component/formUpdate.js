import React, { useContext, useState, useEffect } from "react";
import { Link, Route, useNavigate } from "react-router-dom";

// Importa el contexto de la aplicación
import { Context } from "../store/appContext.js";

// Componente funcional que representa el formulario de actualización de contacto
export const FormUpdate = ({ contact_id }) => {
  console.log("This is the form", contact_id);

  // Obtiene el estado global y las acciones del contexto
  const { store, actions } = useContext(Context);

  // Estados locales para los campos del formulario
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Hook de navegación para redireccionar después de actualizar el contacto
  const navigate = useNavigate();

  // Manejador de la actualización del contacto
  const handleUpdateContact = (event) => {
    event.preventDefault();
    actions.updateContact(contact_id, full_name, email, address, phone);
    // Redirige a la página principal después de la actualización
    navigate("/");
  };

  // Hook de efecto para cargar los datos del contacto al montar el componente
  useEffect(() => {
    handleData();
  }, []);

  // Función para cargar los datos del contacto
  const handleData = async () => {
    // Obtiene la información del contacto mediante la acción GetContact
    const getOneContact = await actions.GetContact(contact_id);
    console.log(getOneContact);

    // Actualiza los estados locales con la información del contacto
    setFull_name(getOneContact.full_name);
    setEmail(getOneContact.email);
    setPhone(getOneContact.phone);
    setAddress(getOneContact.address);
  };

  // Renderiza el formulario de actualización de contacto
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title mt-5">
              <h2>
                <strong>Editar Contacto</strong>
              </h2>
            </div>

            {/* Formulario de actualización de contacto */}
            <form onSubmit={handleUpdateContact} className="text-start mb-2">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText"
                  className="form-label fs-5 text-black"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="exampleInputText"
                  aria-describedby="textlHelp"
                  placeholder="Nombre Completo"
                  value={full_name}
                  onChange={(event) => {
                    setFull_name(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-5 text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control w-50"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhone"
                  className="form-label fs-5 text-black"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control w-50"
                  id="exampleInputPhone"
                  aria-describedby="phoneHelp"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText1"
                  className="form-label fs-5 text-black"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="exampleInputText1"
                  aria-describedby="text1lHelp"
                  placeholder="Dirección"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-secondary w-50">
                  Guardar
                </button>
              </div>
            </form>

            {/* Enlace para volver a la lista de contactos */}
            <div className="mb-3 text-start">
              <Link to={"/"}>
                <p>Regresar</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
