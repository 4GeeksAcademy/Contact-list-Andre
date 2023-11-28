import React, { useContext } from "react";
import { FormContact } from "./formContact.js";
import { FormUpdate } from "./formUpdate.js";
import { Link, Route } from "react-router-dom";

// Importa el contexto de la aplicación
import { Context } from "../store/appContext.js";

// Importa el componente Modal
import { Modal } from "./modal.js";

// Importa el componente Single
import { Single } from "../views/single.js";

// Componente funcional que representa la lista de contactos
export const ListContact = () => {
  // Obtiene el estado global y las acciones del contexto
  const { store, actions } = useContext(Context);

  // Renderiza la lista de contactos
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <div className="button-form m-3">
              {/* Enlace para agregar un nuevo contacto */}
              <Link to="/demo">
                <button type="button" className="btn btn-success">
                  Agregar Nuevo Contacto
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group m-3">
              {/* Mapea la lista de contactos */}
              {store.contacts.map((item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <div className="row">
                      {/* Columna para la imagen del contacto */}
                      <div className="col-2 d-flex justify-content-start">
                        <picture className="m-4">
                          <img
                            src="https://picsum.photos/250/250"
                            alt=""
                            className="rounded"
                          />
                        </picture>
                      </div>
                      {/* Columna para la información del contacto */}
                      <div className="col-7">
                        <div className="infoContact text-start m-4">
                          <h4>{item.full_name}</h4>
                          <p className="mb-1 fs-5 text-secondary">
                            <i className="fa-solid fa-location-dot fa-bounce m-5"></i>
                            {item.address}
                          </p>
                          <p className="mb-1 fs-5 text-secondary">
                            <i className="fa-solid fa-phone fa-rotate-270 m-1"></i>
                            {item.phone}
                          </p>
                          <p className="mb-1 fs-5 text-secondary">
                            <i className="fa-solid fa-envelope m-1"></i>
                            {item.email}
                          </p>
                        </div>
                      </div>
                      {/* Columna para las acciones del contacto */}
                      <div className="col-3">
                        <div className="Action m-4 d-flex justify-content-evenly">
                          {/* Enlace para editar el contacto */}
                          <Link to={`/single/` + item.id}>
                            <p
                              type="button"
                              className="btn btn-primary"
                            >
                              <i className="fa-solid fa-pencil"></i>
                            </p>
                          </Link>
                          {/* Botón para eliminar el contacto con apertura de modal */}
                          <p
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target={`#exampleModal${item.id}`}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </p>
                          {/* Modal para confirmar la eliminación del contacto */}
                          <Modal
                            id={`exampleModal${item.id}`}
                            contact_id={item.id}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
