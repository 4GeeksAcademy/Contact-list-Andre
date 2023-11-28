import React, { useContext } from "react";

// Importa el contexto de la aplicación
import { Context } from "../store/appContext";

// Componente funcional que representa un modal de confirmación para eliminar un contacto
export const Modal = ({ id, contact_id }) => {
  console.log("contact id: ", contact_id);

  // Obtiene el estado global y las acciones del contexto
  const { store, actions } = useContext(Context);

  // Función que maneja la eliminación del contacto
  const handleDeleteContact = () => {
    // Actualiza la lista de contactos
    actions.contactsList();
    
    // Llama a la acción para eliminar el contacto
    actions.deleteContact(contact_id);
  };

  // Renderiza el modal
  return (
    <React.Fragment>
      {/* Modal */}
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}Label`}>
                Quiere eliminar el contacto?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Está seguro?
            </div>
            <div className="modal-footer">
              {/* Botón de cancelar */}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              
              {/* Botón de confirmación para eliminar el contacto */}
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleDeleteContact();
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
