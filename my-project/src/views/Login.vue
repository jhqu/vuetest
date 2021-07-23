<template>
<el-container class="loginCount">
  <el-card class="box-card">
   <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
  <el-form-item label="用户名" prop="User">
    <el-input type='text' v-model="ruleForm.User" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="passWord">
    <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item class="loginbutton">
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </el-card>
</el-container>
</template>
<script>

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输用户名'));
        } else {
        
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
      return {
        ruleForm: {
          User: '',
          passWord: '',
          age: ''
        },
        rules: {
          User: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passWord: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        

    
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
             this.$axios.post('/Api/getTangPoetry', {
                    page: 1,
                    count:20
                }).then(res=>{
                  if(res.data.code==200){
                    this.$router.push('/main');
                  }
                  console.log(res);
                })
           // this.$router.push('/main');
            //alert('submit!');
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
.demo-ruleForm{
  margin-top: 60px;
  margin-left: -20px;
 
  
}
.loginbutton{
margin-top: 90px;
}
 .loginCount{
  
   position:absolute/fixed;
   left:0;
   right:0;
   top:0;
   bottom:0;
   margin:auto;
  
   
  
 }
 .el-card{
   position: absolute;
   top: 50%;
   left: 50%;
   margin: -175px 0 0 -200px;
    width: 400px;
    height: 350px;
    background: #fff;
    padding: 30px 10px 10px 10px;
    
    

 }
</style>
