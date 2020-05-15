<template>
  <div
    class="modal fade "
    id="modalEdit"
    data-backdrop="static"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalEditLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditLabel">
            Editando el Producto:
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group row">
            <label for="txtTitleEdit" class="col-sm-2 col-form-label">
              Nombre
            </label>
            <div class="col-sm-10">
              <input
                v-model="product.title"
                type="text"
                class="form-control"
                id="txtTitleEdit"
                placeholder="Nombre del Producto"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="txtCostEdit" class="col-sm-2 col-form-label">
              Costo
            </label>
            <div class="col-sm-10">
              <input
                v-model="product.cost"
                type="number"
                class="form-control"
                id="txtCostEdit"
                placeholder="Costo del Producto"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="txtDescEdit" class="col-sm-2 col-form-label">
              Descripción
            </label>
            <div class="col-sm-10">
              <textarea
                v-model="product.desc"
                class="form-control"
                id="txtDescEdit"
                placeholder="Descripción del Producto"
                required
              ></textarea>
            </div>
            <div class="invalid-feedback">
              No exceda el máximo de 255 caracteres
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-2">Estado</div>
            <div class="col-sm-10">
              <div class="custom-control custom-switch">
                <input
                  v-model="product.status"
                  type="checkbox"
                  class="custom-control-input"
                  id="txtStatusEdit"
                  required
                />
                <label class="custom-control-label" for="txtStatusEdit">
                  Producto
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#" class="btn btn-secondary" data-dismiss="modal">
            Cancelar
          </a>
          <a href="#" class="btn btn-outline-success" v-on:click="updatedData">
            Guardar Cambios
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/config/firebase";
import router from "@/router";

export default {
  name: "productEditModel",
  props: {
    editId: String,
    product: Object
  },
  data() {
    return {
      loading: true,
      model: "products"
    };
  },
  methods: {
    updatedData() {
      db.collection(this.model)
        .doc(this.editId)
        .update(this.product)
        .then(function() {
          console.log("Transaction successfully committed!");
          //router.reload();
          router.push({ name: "Products" }).catch(err => { console.log(err) });
          //window.$("#modalEdit").modal("hide");

        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      /*
      var sfDocRef = db.collection(this.model).doc(this.editId);
      return db
        .runTransaction(function(transaction) {
          // This code may get re-run multiple times if there are conflicts.
          return transaction.get(sfDocRef).then(function(sfDoc) {
            if (!sfDoc.exists) {
              throw "Document does not exist!";
            }
            var newPopulation = sfDoc.data().population + 1;
            transaction.update(sfDocRef, { population: newPopulation });
          });
        })
        .then(function() {
          console.log("Transaction successfully committed!");
        })
        .catch(function(error) {
          console.log("Transaction failed: ", error);
        });
        */
    }
  }
};
</script>
