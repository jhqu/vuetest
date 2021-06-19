<template>
    <div>我是主页{{msg}}</div>
</template>
<script>
export default {
    data(){
        return{
            msg:'aa'
        }
    },
    created(){
       console.log ('dfd' +this.getId(6))
    },
    methods:{
        getId:function(length){
            return Number(Math.random().toString().substr(3,length));
        }
     
}
}
</script>
