const getState = ({ getStore, getActions, setStore }) => {
	const url = "https://playground.4geeks.com/apis/fake/contact/";
  
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
		contact: {},
		contacts: [],
	  },
	  actions: {
		// Función de ejemplo que utiliza la acción changeColor
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		
		// Acción que carga datos (aún por implementar)
		loadSomeData: () => {
		  // TODO: Implementar la carga de datos
		},
		
		// Acción para cambiar el color de un elemento en el array demo
		changeColor: (index, color) => {
		  const store = getStore();
  
		  // Modifica el array demo para cambiar el color del elemento en la posición index
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  // Actualiza el estado con el nuevo array demo
		  setStore({ demo: demo });
		},
		
		// Acción para crear un nuevo contacto
		createContactBook: async (full_name, email, address, phone) => {
		  try {
			const response = await fetch(url, {
			  method: "POST",
			  body: JSON.stringify({
				full_name: full_name,
				email: email,
				agenda_slug: "ANDRE",
				address: address,
				phone: phone,
			  }),
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  // Si la respuesta es exitosa, actualiza la lista de contactos
			  const actions = getActions();
			  actions.contactsList();
			  return await response.json();
			} else {
			  console.log("Contact already exists");
			}
		  } catch (error) {
			console.log("Post error: ", error);
		  }
		},
		
		// Acción para obtener la lista de contactos
		contactsList: async () => {
		  const store = getStore();
  
		  try {
			const response = await fetch(url + "agenda/ANDRE", {
			  method: "GET",
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  // Si la respuesta es exitosa, actualiza el estado con la lista de contactos
			  const body = await response.json();
			  setStore({ contacts: body });
			  return;
			}
		  } catch (error) {
			console.log(error);
		  }
		},
		
		// Acción para eliminar un contacto
		deleteContact: async (contact_id) => {
		  try {
			const response = await fetch(url + `${contact_id}`, {
			  method: "DELETE",
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  // Si la respuesta es exitosa, actualiza la lista de contactos
			  const actions = getActions();
			  actions.contactsList();
			  console.log("Deleted");
			}
		  } catch (error) {
			console.log(error);
		  }
		},
  
		// Acción para obtener un contacto específico
		getContact: async (contact_id) => {
		  console.log("Contact id: ", contact_id);
		  try {
			const response = await fetch(url + `${contact_id}`, {
			  method: "GET",
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  // Si la respuesta es exitosa, actualiza el estado con el contacto específico
			  console.log("Correct GET");
			  const actions = getActions();
			  const body = await response.json();
			  setStore({ contact: body });
			  return body; 
			}
		  } catch (error) {
			console.log(error);
		  }
		},
  
		// Acción para actualizar un contacto
		updateContact: async (contact_id, full_name, email, address, phone) => {
		  console.log("Contact id: ", contact_id);
		  try {
			const response = await fetch(url + `${contact_id}`, {
			  method: "PUT",
			  body: JSON.stringify({
				full_name: full_name,
				email: email,
				agenda_slug: "gaha20",
				address: address,
				phone: phone,
			  }),
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  // Si la respuesta es exitosa, actualiza la lista de contactos
			  console.log("Correctly updated");
			  const actions = getActions();
			  actions.contactsList();
			}
		  } catch (error) {
			console.log(error);
		  }
		},
	  },
	};
  };
  
  export default getState;
  
