require("./bootstrap");

import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

createApp({
    components:{
        ExampleComponent,
        HeaderComponent
    }
}).mount('#app')

// const Counter = {
//     data() {
//         return {
//             counter: 0,
//         };
//     },
//     mounted() {
//         setInterval(() => {
//             this.counter++;
//         }, 1000);
//     },
// };

// Vue.createApp(Counter).mount("#counter");