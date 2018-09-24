<template>
    <div class="homepagebox">
        homepagebox
    </div>
</template>

<script>
// 引入localStorage
import { setStorage } from '@common/mUtils.js'
export default {
    name: "Homepage",
    components: {
        
    },
    computed:{
        
    },
    data(){
        return{
            
        } 
    },
    mounted(){
    },
    methods:{
        
    },
    created(){
       setStorage('accessTokened','SID_41913346DB1D398BB59EB689AA06C8D1')
    }
}
</script>

<style scoped lang='sass'>
    
</style>
