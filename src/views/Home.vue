<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ברוכים הבאים למוסך גו-קוד שדרות</h1>
    <p>
      <router-link :to="`/costumer/${costumername}`" >
      <el-button @click="visible = true">חפש</el-button>
      </router-link>
      <el-input
        style="color:blue ;width:300px"
        placeholder="שם לקוח"
        prefix-icon="el-icon-search"
        v-model="costumername"
      ></el-input>
    </p>
    <p>
       <router-link :to="`/car/${carnumber}`">
      <el-button @click="visible = true">חפש</el-button>
      </router-link>
      <el-input
        style="color:red ;width:300px"
        placeholder="מספר רכב"
        prefix-icon="el-icon-search"
        v-model="carnumber"
      ></el-input>
    </p>
      <router-link to="/newcustomer" >
    <el-button @click="visible = true">הכנס לקוח חדש</el-button>
    </router-link>
    <!-- <ul>
      <li v-for="car in $root.cars" :key="car">
         {{car}}
      </li>
    </ul> -->
     
  </div>
  
</template>


<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      costumername: '',
      carnumber: ''
    }
  }
};
</script>
