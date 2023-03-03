<template>
    <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                <form>
                    <div class="form-outline mb-3">
                        <label class="form-label" for="form3Example5">Full Name</label>
                        <input type="text" id="form3Example5" class="form-control" placeholder="Enter name" v-model="form.name"/>
                        <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
                    </div>
                    <div class="form-outline mb-3">
                        <label class="form-label" for="form3Example3">Email address</label>
                        <input type="email" id="form3Example3" class="form-control" placeholder="Enter a valid email address" v-model="form.email"/>
                        <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
                    </div>
                    <div class="form-outline mb-3">
                        <label class="form-label" for="form3Example4">Password</label>
                        <input type="password" id="form3Example4" class="form-control" placeholder="Enter password" v-model="form.password"/>
                        <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
                    </div>
                    <div class="form-outline mb-3">
                        <label class="form-label" for="form3Example6">Confirm Password</label>
                        <input type="password" id="form3Example6" class="form-control" placeholder="Enter confirm password" v-model="form.password_confirmation"/>
                        <small class="form-text text-danger" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</small>
                    </div>
                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" @click.prevent="saveForm" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">If you already have an account! <router-link to='/login' class="link-danger">Login</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name: '',
                email: '',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            axios.post('/api/register', this.form).then(() =>{
                this.$router.push({ name: "Login"});
                console.log('User Sucessfully Created Account');
            }).catch((error) =>{
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>
