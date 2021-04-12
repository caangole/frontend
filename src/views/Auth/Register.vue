<template>
  <div class="auth-register">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Registro</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signUpUser">
              <div class="form-group">
                <label for="firstName" class="text-primary font-weight-bold
                 font-size-sm">Primer nombre</label>
                 <input 
                  type="text" 
                  placeholder= "First Name"
                  v-model="user.firstName"
                  class="form-control"
                  id="firstName"
                  />
              </div>
              <div class="form-group">
                <label for="lastName" class="text-primary font-weight-bold
                 font-size-sm">Apellido</label>
                 <input 
                  type="text" 
                  placeholder= "Last Name"
                  v-model="user.lastName"
                  class="form-control"
                  id="lastName"
                  />
              </div>
              <div class="form-group">
                <label for="username" class="text-primary font-weight-bold
                 font-size-sm">Username</label>
                 <input 
                  type="text" 
                  placeholder= "Username"
                  v-model="user.username"
                  class="form-control"
                  id="username"
                  />
              </div>
              <div class="form-group">
                <label for="email" class="text-primary font-weight-bold
                 font-size-sm">Email</label>
                 <input 
                  type="email" 
                  placeholder= "Email"
                  v-model="user.email"
                  class="form-control"
                  id="email"
                  />
              </div>
              <div class="form-group">
                <label for="password" class="text-primary font-weight-bold
                 font-size-sm">Password</label>
                 <input 
                  type="password" 
                  placeholder= "Password"
                  class="form-control"
                  v-model="user.password"
                  id="password"
                  />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">Registrarme</button>
              </div>
              <div class="form-group">
                <router-link to="/auth/login">Ya una cuenta. ¡Entrar!</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'; 

export default {
  data:() => ({
      user:{
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
      },
  }),
  methods: {
    ...mapActions({
      registerUser: 'Auth/registerUser'
    }),
    signUpUser(){
      console.log("USER", this.user);
      this.registerUser(this.user);
    },
  },
};
</script>
