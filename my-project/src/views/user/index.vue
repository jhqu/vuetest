<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.stu_name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.stu_name }}</p>
          <p>住址: {{ scope.row.stu_sex}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.stu_sex }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          stu_name: '王小虎',
          stu_sex: '男',
          },
           {
          stu_name: '王小虎',
          stu_sex: '男',
          },{
          stu_name: '王小虎',
          stu_sex: '男',
          },{
          stu_name: '王小虎',
          stu_sex: '男',
          },]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>