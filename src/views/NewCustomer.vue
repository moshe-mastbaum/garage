<template>
  <div class="newcostemer">
    <h1>הכנס לקוח חדש</h1>  
     <p>
      <el-input        
        style="color:blue ;width:300px"
        placeholder="שם לקוח"       
        v-model="input1"
      ></el-input>
    </p>
    <p>
       <el-input
        maxlength="9"
        style="color:blue ;width:300px"
        placeholder="ת.ז. לקוח"        
        v-model="input2"
      ></el-input>
    </p>
    <p>
       <el-input
        style="color:blue ;width:300px"
        placeholder="כתובת לקוח"        
        v-model="input3"
      ></el-input>
    </p>
    <p>
       <el-input
        style="color:blue ;width:300px"
        placeholder="טלפון לקוח"        
        v-model="input4"
      ></el-input>
    </p>
    <p>
       <!-- <router-link :to="`/customer/${input1}`" >  -->
        <router-link :to="`${linkto}`" > 
         <el-button @click="insertcustomer()">
           צור לקוח</el-button>      
       </router-link>   
    </p>
  </div>
</template>
<script>
//  import { customers } from '../data/data.js'
 export default {
   name: "newcustomer",
   data() {
     return {
       customers:[this.$axios.get('http://localhost:3000/customers').then((response) => this.customers = response.data)],
       linkto: '/newcustomer',
       input1: '',
       input2: '',
       input3: '',
       input4: '',
     }
   },
   computed :{
    //  carInArr() {
    //   let car = this.$root.cars.find(car => car.num === this.carnumber);
    //   return car;
    // },
     
   },
    methods: {
       resolt (rt) {
       let tt= this.customers.find(customer => customer.id == rt)  ;
       if (tt)
        return 1 ; 
        return 0 ;     
      },

      insertcustomer() {
        // const resolt = ($root.customers.find(customer=>(customer.id == 123456)) ? yes : no);
        // if (resolt) 
        if (this.resolt(this.input2) == 1)         
          alert('ת.ז. קיימת במערכת')
         else if (this.input2.length<9)
         alert('ת.ז. 9 ספרות')
                
          //  this.$root.customers.push({name:this.input1,id:"קיים שנה",car:[],bill: 0,adress:this.input3,tel:this.input4});      
        else {
           this.linkto= "/customer/"+this.input1;
           alert (this.linkto)
          //  this.$root.customers.push({name:this.input1,id:this.input2,car:[],bill: 0,adress:this.input3,tel:this.input4});
           this.$axios.post('http://localhost:3000/customers', {name:this.input1,id:this.input2,car:[],bill: 0,adress:this.input3,tel:this.input4}).then((response) => this.cars = response.data); 
        }                
       }
    }
 }
 </script>

