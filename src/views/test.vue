<template>
  <div class="test">
    <el-form  action="/data.js" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Activity name" prop="name">
      <el-input name="ttest" v-model="ruleForm.name"></el-input>
    </el-form-item>
     <el-form-item>
      <router-link disabled="true" :to="`${tt}`" > 
    <el-button  type="primary" @click="submitForm('ruleForm')">Create</el-button>
      </router-link>
  </el-form-item>
  {{cars}}
   </el-form> 
  </div>

</template>

<script>

  export default {
    data() {
      return {
        cars: [],
        tt:"/test",
        ruleForm: {
          name :''  
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
        }
        
      };
    },
    methods: {
      submitForm(formName) {
        this.$axios.get('http://localhost:3000/cars').then((response) => this.cars = response.data);
        // this.$axios.post('http://localhost:3000/cars', {num: 123}).then((response) => this.cars = response.data);
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     this.tt="/"; 
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
     
    }
  }
</script>
