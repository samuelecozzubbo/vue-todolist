const { createApp } = Vue ;

createApp( {   
    data() {   
        return {
            logoImage:"img/logo.jpg",
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
    },
    mounted() {
        console.log("the component is now mounted");
    }
}).mount('#app')  