const app = new Vue({

    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''

    },

    methods: {

        // Agregar Tarea
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: true
            });
            console.log(this.tareas);
            this.nuevaTarea='';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        // Cambia el Estado
        editarTarea: function(index){
             this.tareas[index].estado = true;
             localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        // Elimina Tarea
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        }

    },

    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }


})