<template>
  <div class="auth-login">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="authenticateUser">
              <div class="form-group">
                <label for="username" class="text-primary font-weight-bold
                 font-size-sm">Username</label>
                 <input 
                  type="text" 
                  id="username"
                  class="form-control"
                  placeholder= "Username"
                  v-model="user.username"
                  />
              </div>
              <div class="form-group">
                <label for="password" class="text-primary font-weight-bold
                 font-size-sm">Password</label>
                 <input 
                  type="password" 
                  placeholder= "Password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                  />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">Login</button>
              </div>
              <div class="form-group">
                <router-link to="/auth/register">Necesitas una cuenta? ¡Regístrate ahora!</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data:() => ({
      user:{
        username: "",
        password: "",

      },
  }),
  methods: {
    authenticateUser(){
      console.log("USER", this.user);
    },
  },
};
</script>
