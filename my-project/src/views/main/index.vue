<template>
  <el-container style="height:100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
       
        <template slot="title"><i class="el-icon-menu"></i>导航一</template>
        
      
        <el-submenu v-for="(item,key) in $router.options.routes[1].children" :key="key"  
        :index="'1-'+key+1">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="(item1,key1) in item.children" :key="key1" 
          :index="'1-'+key+1+'-'+key1+1">{{item1.name}}
          </el-menu-item>
          
        </el-submenu>
          <!-- <el-submenu index="1-2">
          <template slot="title">产品管理</template>
          <el-menu-item index="1-2-1">菜单管理</el-menu-item>
           <el-menu-item index="1-2-2">订单管理</el-menu-item>
        </el-submenu> -->
      </el-submenu>
   
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
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
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
        tableData: Array(20).fill(item)
      }
    },
    created(){
       
       console.log ('dfd' + this.routers)
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
