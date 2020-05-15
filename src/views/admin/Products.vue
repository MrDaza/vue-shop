<template>
  <div class="container p-5 h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <h2>Products</h2>
        <p>
          This is a responsive sidebar template on bootstrap framework.
        </p>
        <form @submit.prevent="saveData" novalidate="true" class="col">
          <div class="form-group row">
            <label for="txtTitle" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
              <input
                v-model="product.title"
                type="text"
                class="form-control"
                id="txtTitle"
                placeholder="Nombre del Producto"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="txtCost" class="col-sm-2 col-form-label">Costo</label>
            <div class="col-sm-10">
              <input
                v-model="product.cost"
                type="number"
                class="form-control"
                id="txtCost"
                placeholder="Costo del Producto"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="txtDesc" class="col-sm-2 col-form-label">
              Descripción
            </label>
            <div class="col-sm-10">
              <textarea
                v-model="product.desc"
                class="form-control"
                id="txtDesc"
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
                  id="txtStatus"
                  required
                />
                <label class="custom-control-label" for="txtStatus">
                  Estado del Producto
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div v-if="!editForm" class="col-sm-10">
              <button type="submit" class="btn btn-outline-success">
                Guardar
              </button>
            </div>
            <div v-else class="col-sm-10">
              <a
                href="#"
                v-on:click="editDataCancel"
                class="btn btn-secondary mr-2"
              >
                Cancelar
              </a>
              <a
                href="#edit"
                class="btn btn-outline-success"
                v-on:click="updatedData"
              >
                Guardar Cambios
              </a>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/images/admin_product.svg"
          alt="Overview"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="row">
      <table class="table table-hover table-sm col">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Costo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Estado</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td>Cargando...</td>
          </tr>
          <tr v-else v-for="(product, index) in products" :key="product.id">
            <th scope="row">{{ index }}</th>
            <td>{{ product.data().title }}</td>
            <td>{{ product.data().cost }}</td>
            <td>{{ product.data().desc }}</td>
            <td>
              <span
                v-if="product.data().status"
                class="badge badge-pill badge-success"
              >
                {{ product.data().status }}
              </span>
              <span v-else class="badge badge-pill badge-danger">
                {{ product.data().status }}
              </span>
            </td>
            <td>
              <a
                @click="editData(product)"
                href="#edit"
                class="btn btn-sm btn-info"
              >
                Editar
              </a>
              <a
                @click="deleteData(product.id)"
                href="#delete"
                class="btn btn-sm btn-danger ml-4"
              >
                Eliminar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Toast v-bind:toast="toast"></Toast>
    <!--
    <ProductEdit v-bind:product="product" v-bind:editId="editId"></ProductEdit>
    -->
  </div>
</template>

<script>
import { db } from "@/config/firebase";
//import ProductEdit from "@/views/admin/ProductEdit";

export default {
  name: "products",
  created() {
    //this.reset();
    this.listData();
    //window.$(".toast").toast("show");
  },
  mounted() {
    //this.reset();
    //this.listData();
  },
  data() {
    return {
      toast: {
        title: "Productos",
        time: "",
        message: "",
        class: "bg-danger"
      },
      loading: true,
      editForm: false,
      model: "products",
      editId: null,
      products: [],
      product: {
        title: "",
        cost: null,
        desc: "",
        status: false
      }
    };
  },
  components: {
    //ProductEdit
  },
  methods: {
    listData() {
      this.loading = true;
      db.collection(this.model)
        .get()
        .then(
          querySnapshot => {
            //this.products = querySnapshot;
            querySnapshot.forEach(doc => {
              //console.log(doc.id + " => ", doc.data());
              this.products.push(doc);
            });
            //console.log(this.products);
            this.loading = false;
          },
          function(error) {
            alert("Opps. [" + error.code + "] " + error.message);
            console.log(error.code);
          }
        );
    },
    deleteData(id) {
      if (
        confirm(
          "Estas seguro? \nSe Procedera a elimnar el producto [" + id + "] ? "
        )
      ) {
        db.collection(this.model)
          .doc(id)
          .delete()
          .then(() => {
            this.reset();
            this.toast = {
              title: "Producto Eliminado",
              time: "",
              message: "Document successfully deleted!",
              class: "bg-warning"
            };
            window.$(".toast").toast({
              animation: true,
              autohide: true,
              delay: 2000
            });
            window.$(".toast").toast("show");
            //alert("Transaction successfully committed!");
            this.listData();
          })
          .catch(function(error) {
            this.toast = {
              title: "Error",
              time: error.code,
              message: error,
              class: "bg-danger text-white"
            };
            window.$(".toast").toast({
              animation: true,
              autohide: true,
              delay: 6000
            });
            window.$(".toast").toast("show");
          });
      }
    },
    editDataCancel() {
      this.reset();
      this.listData();
    },
    editData(product) {
      console.log(product.id);
      this.editId = product.id;
      this.product = product.data();
      this.editForm = true;
    },
    updatedData() {
      db.collection(this.model)
        .doc(this.editId)
        .update(this.product)
        .then(() => {
          this.reset();
          this.toast = {
            title: "Producto - Editado",
            time: "",
            message: "Transaction successfully committed!",
            class: "bg-info text-white"
          };
          window.$(".toast").toast({
            animation: true,
            autohide: true,
            delay: 2000
          });
          window.$(".toast").toast("show");
          //alert("Transaction successfully committed!");
          this.listData();
        })
        .catch(function(error) {
          this.toast = {
            title: "Error",
            time: error.code,
            message: error,
            class: "bg-danger text-white"
          };
          window.$(".toast").toast({
            animation: true,
            autohide: true,
            delay: 6000
          });
          window.$(".toast").toast("show");
        });
    },
    saveData(event) {
      event.preventDefault();
      // Add a second document with a generated ID.
      console.log("product:", this.product);
      db.collection(this.model)
        .add(this.product)
        .then(docRef => {
          this.reset();
          this.toast = {
            title: "Producto " + docRef.id,
            time: "",
            message: "Transaction successfully committed!",
            class: "bg-success text-white"
          };
          window.$(".toast").toast({
            animation: true,
            autohide: true,
            delay: 2000
          });
          window.$(".toast").toast("show");
          this.listData();
        })
        .catch(function(error) {
          this.toast = {
            title: "Error",
            time: error.code,
            message: error,
            class: "bg-danger text-white"
          };
          window.$(".toast").toast({
            animation: true,
            autohide: true,
            delay: 6000
          });
          window.$(".toast").toast("show");
        });
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
};
</script>
