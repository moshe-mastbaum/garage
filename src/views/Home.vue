<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ברוכים הבאים למוסך גו-קוד שדרות</h1>
    <p>
      <el-button @click="visible = true">חפש</el-button>
      <el-input
        style="color:blue ;width:300px"
        placeholder="שם לקוח"
        prefix-icon="el-icon-search"
        v-model="input2"
      ></el-input>
    </p>
    <p>
      <el-button @click="visible = true">חפש</el-button>
      <el-input
        style="color:red ;width:300px"
        placeholder="מספר רכב"
        prefix-icon="el-icon-search"
        v-model="input2"
      ></el-input>
    </p>
      <router-link to="/newcustomer" >
    <el-button @click="visible = true">הכנס לקוח חדש</el-button>
    </router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import { customers } from '../data/data.js'

export default {
  name: "home"
};
</script>
