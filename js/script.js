const { createApp } = Vue ;

createApp( {   
    data() {   
        return {
            logoImage:"img/logo.jpg",
            newTask:[
                {
                    text: "",
                    done: false,
                }
            ],
            inputError: false,
            tasks:[
                {
                    text: "fare il bucato",
                    done: true,
                },
                {
                    text: "fare i compiti",
                    done: false,
                },
                {
                    text: "fare la spesa",
                    done: true,
                },
            ]
        }
    },
    methods: {
        deleteTask(i){
            this.tasks.splice(i, 1)
        },
        addTask(){
            //aggiungo task all'inizio
            //condizione di check validità input
            if(this.newTask.text !== '' && this.newTask.text.length >= 5){
                this.tasks.unshift(this.newTask);
                this.inputError = false;
            }else{
                this.inputError = true;
            }
            //svuoto il valore di new task
            this.newTask = "";
            
        },
    },
    mounted() {
        console.log("the component is now mounted");
    }
}).mount('#app')  