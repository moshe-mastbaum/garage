<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ברוכים הבאים למוסך גו-קוד שדרות</h1>
    <p>
      <router-link :to="`${linkto}`" >
      <el-button @click="checkname()">חפש</el-button>
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
       <router-link :to="`${linkto}`">
      <el-button @click="checknum">חפש</el-button>
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
     <!-- <button @click="carss">ccc</button>   -->
    <p>{{cars}}מכונית</p>
    <p>{{customers}}לקוחות</p> 
  </div>  
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      linkto:"/",
      cars:[this.$axios.get('http://localhost:3000/cars').then((response) => this.cars = response.data)],
      customers:[this.$axios.get('http://localhost:3000/customers').then((response) => this.customers = response.data)],
      // customers: [this.$customer],
      customerss:[],
      customername: '',
      carnumber: ''
    }
  },
  // computed:{
  //    carss (){
  //     return this.$axios.get('http://localhost:3000/cars').then((response) => this.cars = response.data);
  //     },  
  // },

  methods: {
     
      querySearch(queryString, cb) {
        // customers = this.$axios.get('http://localhost:3000/customers').then((response) => this.customerss = response.data);
        // const customers = this.$root.customers;
        var results = queryString ? this.customers.filter(this.createFilter(queryString)) :this.customers;
        // console.log('results', results);        
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (customer) => {
          return (customer.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },  
      querySearchc(queryString, cb) {
        // const cars = this.$root.cars;
        var results = queryString ? this.cars.filter(this.createFilterc(queryString)) : this.cars;                
        // call callback function to return suggestions
        cb(results);
      },
      createFilterc(queryString) {
        return (car) => {           
          return (car.num.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      }, 
      checkname() {
         if (this.customers.find(customer => customer.name==this.customername)){
          this.linkto="/customer/"+this.customername
          } 
       else
       alert("אין שם כזה")
      }, 
      checknum() {
         if (this.cars.find(car => car.num==this.carnumber)){
          this.linkto="/car/"+this.carnumber
          } 
       else
       alert("אין מספר כזה")
      }   
      
      
    }
    }

</script>
