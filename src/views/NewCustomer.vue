<template>
  <div class="newcostemer">
    <h1>הכנס לקוח חדש</h1>
    <p>
      <el-input
        style="color:blue ;width:300px"
        placeholder="שם לקוח"
        prefix-icon="el-icon-search"
        v-model="input1"
      ></el-input>
    </p>
    <p>
       <el-input
        style="color:blue ;width:300px"
        placeholder="ת.ז. לקוח"
        prefix-icon="el-icon-search"
        v-model="input2"
      ></el-input>
    </p>
    <p>
         <el-button @click="insertcustomer()">
           צור לקוח</el-button>                

    </p>

  </div>
</template>
<script>
 import { customers } from '../data/data.js'
 export default {
   name: "newcustomer",
   data() {
     return {
       input1: '',
       input2: ''
     }
   },
    methods: {
      insertcustomer() {
        this.$root.customers.push({name:this.input1,id:this.input2,car:[],bill: 0})
      }
    }
 }
 </script>

