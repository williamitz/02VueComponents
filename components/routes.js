Vue.component('v-template', {
    template: `
        <div>
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{titleRoute}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">{{role}}</a>
                    <br>
                    <br>
                    <input type="text" name="userName" v-model="userName" class="form-control" />
                </div>
            </div>
        </div>
    `,

    // en un componente data es una función que retorna un objeto
    data() {
        return {
            titleRoute: 'Hello wordl',
            userName: 'william'
        }
    },
    // los props son los inputs que el componente recibe
    props: ['role'],

    // evento cuando se monta el template
    mounted() {
        this.$emit('outUser', this.userName);
    }
})