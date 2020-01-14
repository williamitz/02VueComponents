const app = new Vue({
    el: '#containerApp',
    data: {
        newItem: '',
        activities: [],
        errors: []
    },
    methods: {
        addVewItem() {
            // e.preventDefault();
            this.errors = [];
            // console.log('validación actividad', this.validItem() );
            if (! this.validItem()  ) {
                this.errors.push('El nombre de la actividad es requerida');
                return true;
            }

            let arrItem = JSON.parse( localStorage.getItem('items') ) || [];
            arrItem.push( this.newItem );
            localStorage.setItem('items', JSON.stringify(arrItem ));
            this.activities = arrItem;
            this.newItem = '';
            
        },

        validItem () {
            let patt = /[a-zA-Z áéíóúÁÉÍÓÚ]{3,100}/;
            return patt.test( this.newItem );
        },

        deleteItem( index ) {
            this.activities[index] = null;
            this.activities = this.activities.filter( activity => activity !== null );
            localStorage.setItem('items', JSON.stringify(this.activities ));
        }
    },
    //  ciclo de vida de vue
    beforeCreate() {
        console.log('antes de crear vue');
    },
    created() {
        console.log('despues de crear vue')
        let arrItem = JSON.parse(localStorage.getItem('items')) || [];
        this.activities = arrItem;
    },

    beforeMount() {
        console.log('antes de insertar los valores al template');
    },

    mounted() {
        console.log('después de haber cargado valor al html')
    },

    beforeUpdate() {
        console.log('antes de cambiar el contenido');
    },

    updated() {
        console.log('cuando cambia el contenido')
    }
});