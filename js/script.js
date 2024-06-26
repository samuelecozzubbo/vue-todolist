const { createApp } = Vue ;

createApp( {   
    data() {   
        return {
            logoImage:"img/logo.jpg",
            newTask:{
                    text: "",
                    done: false,
                },
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
            console.log(this.newTask.text,this.newTask);
            if(this.newTask.text !== '' && this.newTask.text.length >= 5){
                /* this.tasks.unshift({
                    text:this.newTask.text,
                    done: false,
                }); */
                const newStaticTask = {...this.newTask};
                this.tasks.unshift(newStaticTask);
                this.inputError = false;
            }else{
                this.inputError = true;
            }
            //svuoto il valore di new task
            this.newTask.text = "";
            
        },
    },
    mounted() {
        console.log("the component is now mounted");
    }
}).mount('#app')  