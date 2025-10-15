import { watch } from "vue";

export function watchCount(count){
    watch(count,(newVal,oldVal)=>{
    console.log('newVal',newVal);
    console.log('oldVal',oldVal);
})
}