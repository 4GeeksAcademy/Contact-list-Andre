import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Modal } from "./modal.js";
import { Single } from "../views/single.js";

export const ListContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <div className="button-form m-3">
              <Link to="/demo">
                <button type="button" className="btn btn-success">
                  Agregar Nuevo Contacto
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {store.contacts.map((item, index) => (
            <div className="col-10 col-md-10" key={index}>
              <div className="list-group-item mb-3">
                <div className="row">
                  <div className="col-12 col-md-4 d-flex justify-content-center mb-3">
                    <picture className="m-4">
                      <img
                        src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
                        alt=""
                        className="rounded-circle img-thumbnail"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="infoContact text-start m-4">
                      <h4>{item.full_name}</h4>
                      <p className="mb-1 fs-5 text-secondary">
                      <i className="fa-solid fa-location-dot p-2"></i>
                        {item.address}
                      </p>
                      <p className="mb-1 fs-5 text-secondary">
                      <i className="fa-solid fa-phone-flip p-2"></i>
                        {item.phone}
                      </p>
                      <p className="mb-1 fs-5 text-secondary">
                      <i className="fa-solid fa-envelope p-2"></i>
                        {item.email}
                      </p>
                      {/* Agrega el siguiente console.log para verificar los datos */}
                     {console.log("Address:", item.address, "Phone:", item.phone)}
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="Action m-4 d-flex justify-content-evenly">
                      <Link to={`/single/${item.id}`}>
                        <button type="button" className="btn btn-secondary">
                        <i className="fa fa-pen"></i>
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${item.id}`}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                      <Modal id={`exampleModal${item.id}`} contact_id={item.id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
