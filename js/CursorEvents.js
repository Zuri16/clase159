AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handleClickEvents: function () {
    this.el.addEventListener("click",(e) => {
      const contenedorMini=document.querySelector("#places-container")
      const {state} = contenedorMini.getAttribute("tour")
      //revisa si el estado es el inicial
      if(state === "places-list"){
        const idLugar = this.el.getAttribute("id")
        const placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"]
        //ve si el id elegido esta incluido en las opciones que tengo
        if(placesId.includes(idLugar)){
          contenedorMini.setAttribute("tour", {
            state:"view",
            selectedCard:idLugar
          })
        }
      }
    })
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Evento 'mouseenter' del cursor.
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Evento 'mouseleave' del cursor.
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },

});
