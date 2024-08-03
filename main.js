
const { createApp } = Vue
createApp({
    data(){
        return{
            nombre: 'Diego',
            edad: 34,
            imagen: 'https://images.vexels.com/media/users/3/135251/isolated/preview/ab893f9074d536e3e940d61f0fc62b39-los-usuarios-firman-en-rojo.png',
            contador: 0,
            logueado: false,
            clase: 'btn btn-primary bi bi-box-arrow-in-right',
            tareas:[
                {numero: 0, nombreTarea: 'Interpolación', terminada: true },
                {numero: 1, nombreTarea: 'v-bind', terminada: true },
                {numero: 2, nombreTarea: 'v-on', terminada: true },
                {numero: 3, nombreTarea: 'v-if', terminada: false },
                {numero: 4, nombreTarea: 'v-for', terminada: true },
            ],
            texto: '',
            productos:[
                {nombre: 'Televisor', precio: 120000, stock: 4},
                {nombre: 'Tablet', precio: 30000, stock: 0},
                {nombre: 'Celular', precio: 150000, stock: 32},
                {nombre: 'Parlante', precio: 20000, stock: 42},
            ],
            lenguajes:[
                {nombrePersona: 'José', java: false, php: true, python: true},
                {nombrePersona: 'Juan', java: true, php: true, python: true},
                {nombrePersona: 'Pedro', java: true, php: false, python: false},
            ],
            personas:[
                {nombrePersona: 'Pedro', edad: 23},
                {nombrePersona: 'Maria', edad: 35},
                {nombrePersona: 'Juan', edad: 47},
                {nombrePersona: 'Pablo', edad: 50},
                {nombrePersona: 'Diego', edad: 67},
                {nombrePersona: 'Mario', edad: 18},
                {nombrePersona: 'Pepe', edad: 37},
            ],
            edadDesde:0,
            edadHasta:100,
            colorTarea: 'text-white bg-dark'
        }
    },

    methods: {
        cambiar(){
            this.logueado = !this.logueado;

            if (this.logueado) {
                this.clase = 'btn btn-danger bi bi-box-arrow-in-left'
            } else {
                this.clase = 'btn btn-primary bi bi-box-arrow-in-right'
            }

        },

        agregarLenguaje(){
            this.lenguajes.push(
                {
                  nombrePersona: this.nombrePersona,
                  java: this.java,
                  php: this.php,
                  python: this.python,
                }
            )
            this.nombrePersona = ''
            this.java = false
            this.php = false
            this.python = false
        },

        agregarTarea(){
            this.tareas.push(
                {
                numero: this.numero,
                nombreTarea: this.nombreTarea,
                terminada: this.terminada,
                }
            )
            this.numero = 0
            this.nombreTarea = ''
            this.terminada = false
        },

        eliminarTarea(index) {
            this.tareas = this.tareas.filter((tarea, i) => i !== index)
          },
    }
}).mount('#app')

