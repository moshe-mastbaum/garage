<template>
  <div class="customer">
    <div style="margin-left:35%;margin-bottom:1%; width:24%;">
      <el-button @click= "check()" style="color:red; width:32%; text-align:center">שמור</el-button>

      <router-link :to="`/`">
        <el-button style="color:blue; width:32%">דף ראשי</el-button>
      </router-link>
    </div>
    <!-- <div> {{editcustomer? editcustomer:"nnn"}} </div>  -->
    <table style="margin-left:37%;margin-top:2%; width:21%; font-size:25px; ">
      <tr>
        <td>
          <input
            type="text"
            id="name"
            name="name"
            style="font-size:18px"
            v-model="editcustomer.name"
          >
        </td>
        <td>שם</td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            id="name"
            name="name"
            style="font-size:18px"
            v-model="editcustomer.tel"
          >
        </td>
        <td>טלפון</td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            id="name"
            name="name"
            style="font-size:18px"
            v-model="editcustomer.adress"
          >
        </td>
        <td>כתובת</td>
      </tr>
      <tr>
        <td>
          <input type="text" id="name" name="name" style="font-size:18px" v-model="editcustomer.id">
        </td>
        <td>ת.ז.</td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            id="name"
            name="name"
            style="font-size:18px"
            v-model="editcustomer.bill"
          >
        </td>
        <td>חשבון</td>
      </tr>
    </table>
    <h1>רכבים</h1>
    <div style="margin-left:35%;margin-bottom:1%; width:30%;">
      <el-button
        @click="insertcar({carnumber,firm})"
        style="margin:0px; color:blue; width:24%; text-align:center "
      >הוסף רכב</el-button>
      <el-input style="color:red ;width:150px" type="number" placeholder="מספר רכב" v-model="carnumber"></el-input>
      <el-input style="color:red ;width:150px" placeholder="דגם" v-model="firm"></el-input>
    </div>

    <el-table :data="ownerCars" style="width: 30% ; margin-left:34%">
      <el-table-column tipulNamber="id" label>
        <template slot-scope="scope">
          <router-link :to="`/car/${scope.row.num}`">
            <el-button size="mini" @click="visible = true">דף רכב</el-button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="num" label="מספר רכב"></el-table-column>
      <el-table-column prop="firm" label="דגם"></el-table-column>
    </el-table>
     <!-- <p> {{vcustomername}} vvvvv </p>
    <p> {{customers}}  </p>
    <p> {{editcustomer}} </p>
    <button @click="check()"></button>
     <p> {{vcustomername}} </p> -->
    
  </div>
</template>
<script>
export default {
  name: "customer",
  props: ["customername"],
   data() {
    return {
      vcustumername: '' ,
      customers:[this.$axios.get('http://localhost:3000/customers').then((response) => this.customers = response.data)],
      carnumber: '',
      firm: '',
      // editcustomer: customers.find( custumer => custumer.name === this.customername),      
      // editcustomer: { name: " ", id: " ", car: [],   bill: " ",  tel: " ", adress: " "}
      
    };
  }, 

  computed: {
    // ownerInArr() {
    //   let owner = this.customers.find(
    //     owner => owner.name === this.customername
    //   );
    //   return owner;
    // },
    // tipulimInCar() {
    //   const tipuli = this.carInArr.tipulim;
    //   return this.$root.tipulim.filter(tipul => tipuli.includes(tipul.id));
    // },
    // ownerCars() {
    //   const ownecars = this.editcustomer.car;
    //   return this.$root.cars.filter(car => ownecars.includes(car.num));
    // },
    editcustomer ()  {
      return  this.customers.find( customer => customer.name === this.customername);
    },
  } ,  
  methods: {
    insertcar(newcar) {
      this.editcustomer.car.push(newcar.carnumber);
      this.$root.cars.push( { num: newcar.carnumber, owner: this.editcustomer.id, firm: newcar.firm, tipulim: [] })
    },
    check (){
     alert (this.customername);
     alert (this.editcustomer._id);
     
      // this.$axios.put('http://localhost:3000/customers', this.editcustomer).then((response) => this.cars = response.data); 
      this.$axios.put('http://localhost:3000/customers', this.editcustomer)
    },
    // fcustumer(){
    //   return this.customers.find( customer => customer.name === this.customername)
    // },
  },

  mounted() {
    //  this.vcustomername=this.customername
    // this.editcustomer = this.$root.customers.find(
    //   costumer => costumer.$root.name === this.customername
      // this.editcustomer = this.customers.find( customer => customer.name === this.customername    );
    //  this.editcustomer=this.fcustumer() 
  },
 
};
</script>
