Vue.component('v-menu', {
    template: `
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">{{titulo}} {{userPadre}}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">  </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" v-on:click="onChangeWebmaster">WEBMASTER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="onChangeWaiter">WAITER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  v-on:click="onChangeCashier">CASHIER</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <v-template :role="rolePadre" @outUser="userPadre = $event"></v-template>
        </div>
    `,
    data() {
        return {
            titulo: 'Barra de navegación',
            rolePadre: 'WEBMASTER',
            userPadre: ''
        };
    },
    methods: {
        onChangeWebmaster() {
            this.rolePadre = 'WEBMASTER';
        },
        onChangeWaiter() {
            this.rolePadre = 'WAITER';
        },
        onChangeCashier() {
            this.rolePadre = 'CASHIER';
        }
    }
});
