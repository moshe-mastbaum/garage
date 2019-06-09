<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ברוכים הבאים למוסך גו-קוד שדרות</h1>
    <p>
      <router-link :to="`/customer/${customername}`" >
      <el-button @click="visible = true">חפש</el-button>
      </router-link>

      <el-autocomplete
      class="inline-input"
      v-model="customername"
      :fetch-suggestions="querySearch"
      placeholder="שם לקוח"
      value-key="name"    
    ></el-autocomplete>     
    </p>
    <p>
       <router-link :to="`/car/${carnumber}`">
      <el-button @click="visible = true">חפש</el-button>
      </router-link>
      <el-autocomplete
      class="inline-input"
      v-model="carnumber"
      :fetch-suggestions="querySearchc"
      placeholder="מספר רכב"
      value-key="num"     
    ></el-autocomplete>
    </p>
    <router-link to="/newcustomer" >
      <el-button @click="visible = true">הכנס לקוח חדש</el-button>
    </router-link>   
  </div>  
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      customername: '',
      carnumber: ''
    }
  },
  methods: {
      querySearch(queryString, cb) {
        const customers = this.$root.customers;
        var results = queryString ? customers.filter(this.createFilter(queryString)) : customers;
        console.log('results', results);        
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (customer) => {
          return (customer.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },  
      querySearchc(queryString, cb) {
        const cars = this.$root.cars;
        var results = queryString ? cars.filter(this.createFilterc(queryString)) : cars;                
        // call callback function to return suggestions
        cb(results);
      },
      createFilterc(queryString) {
        return (car) => {           
          return (car.num.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },     
    }
    }

</script>
