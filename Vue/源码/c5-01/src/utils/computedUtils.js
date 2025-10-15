import { computed } from "vue";

export function myDemo(msg){
    const demo = computed(()=>{
        return msg.value+"---myDemo"
    })
    return demo
}