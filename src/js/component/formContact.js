import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

// Componente funcional que representa el formulario de contacto
export const FormContact = () => {
  // Obtiene el estado global y las acciones del contexto
  const { store, actions } = useContext(Context);

  // Hook de navegación para redireccionar después de crear un nuevo contacto
  const navigate = useNavigate();

  // Estados locales para los campos del formulario
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Manejador de la creación de un nuevo contacto
  const handleCreateContact = async (event) => {
    event.preventDefault();
    
    // Actualiza la lista de contactos
    actions.contactsList();
    
    // Llama a la acción para crear un nuevo contacto
    actions.createContactBook(full_name, email, phone, address);
    
    // Redirige a la página principal después de la creación del contacto
    navigate("/");
  };

  // Renderiza el formulario de contacto
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="titel mt-5">
              <h2>
                <strong>Nuevo contacto</strong>
              </h2>
            </div>

            {/* Formulario de contacto */}
            <form
              className="text-start mt-5 mb-2"
              onSubmit={handleCreateContact}
            >
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
                  placeholder="Nombre completo"
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
              <div className="mb-5">
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
