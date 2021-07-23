<template>
  <el-container style="height:100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1','2']" >
    
       <el-submenu  v-for="(item,index) in routers" :index='(index+1).toString()' :key="index">
          <template slot="title">{{item.name}}{{index}}</template>
          <el-menu-item v-for="(item2,index2) in item.children" 
          :key="index2" 
          :index="item2.path"
          :class=" $route.path == item2.path?'is-active':''">
            <!-- <router-link :to="item2.path">{{item2.name}}</router-link>  -->
            {{item2.name}}
           
            </el-menu-item>
           

        </el-submenu>


          <!-- <el-submenu index="1">
          <template slot="title">产品管理</template>
          <el-menu-item index="1-1">菜单管理</el-menu-item>
           <el-menu-item index="1-2-2">订单管理</el-menu-item>
        </el-submenu>
     -->
   
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
     

      <router-view></router-view>

    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
    data(){
        const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        routers:[]
      }
    },
    created(){
       
       console.log ('dfd' + this.$router.options)
       this.routers = this.$router.options.routes.filter((item,index)=>{
                 if(index==1||index==2)
                 {
                  return item;
                 }
       })
       
    },
    methods:{
        getId:function(length){
            return Number(Math.random().toString().substr(3,length));
        }
     
}
}
</script>
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
