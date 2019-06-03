<template>
  <div class="car">
    <div style="margin-left:38%;margin-bottom:2%; width:24%;">
        <el-button @click="insertTipul()" style="color:red; width:33%">הוסף טיפול</el-button>     
      <router-link :to="`/costumer/${ownerInArr.name}`">
        <el-button  style="color:blue;width:33%">עבור לדף לקוח</el-button>
      </router-link>
      <router-link :to="`/`" >
        <el-button  style="color:blue; width:33%">דף ראשי</el-button>
      </router-link>
    </div>
    <div style="margin-left:35%; width:30%; border: 0.5rem outset blue;border-radius: 12px;">
      <h1>{{carnumber}}:  {{carInArr.firm}} מספר</h1>   
      <h1> בעלים: {{ownerInArr.name}} </h1>
    </div>
    <h1>
        <span style=" color:blue;margin-left:20px">היסטורית טיפולים</span> 
    </h1>
    <el-table :data="tipulimInCar" style="width: 40% ; margin-left:34%" >
      
      <el-table-column  tipulNamber="id" label=""> 
         <template slot-scope="scope">       
           <router-link :to="`/tipul/${scope.row.id}`" >
             <el-button size="mini"  @click="visible = true">{{scope.row.id}}לטיפול</el-button>
           </router-link> 
         </template>       
      </el-table-column>
      <el-table-column prop="paid" label="שולם"></el-table-column>
      <el-table-column prop="price" label="מחיר"></el-table-column>
       <el-table-column prop="dateout" label="ת. יציאה" ></el-table-column>
      <el-table-column prop="datein" label="ת. כניסה" ></el-table-column>     
      <el-table-column prop="problem" label="בעיה"></el-table-column>    
     
    </el-table>
  
    <!-- <div>{{carInArr}}</div>
    <div>{{ownerInArr}}</div>-->
    <!-- <div>{{$root.costumers[0]}}</div> -->
    <!-- <div>{{$root.cars[findcar (carnumber)]}}</div> -->
  </div>
</template>

<script>
// import Vue from 'vue';

export default {
  name: "car",
  props: ["carnumber"],
  data () {
    return { tipulNamber: '1'}
  },
  computed: {
    carInArr() {
      let car = this.$root.cars.find(car => car.num === this.carnumber);
      return car;
    },
    ownerInArr() {
      let owner = this.$root.costumers.find(
        owner => owner.id === this.carInArr.owner
      );
      return owner;
    },
    // tipulInArr(n)
    // {
    //   let tipul = this.$root.tipulim.find(tipul => tipul.id === n)
    //   return tipul;
    // },
    tipulimInCar() {
      const tipulim = this.carInArr.tipulim;
      return this.$root.tipulim.filter(tipul => tipulim.includes(tipul.id));
    }
  },
  methods: {
      insertTipul() {
        this.$root.lastTipulid.last++;
        this.carInArr.tipulim.push(this.$root.lastTipulid.last);
        this.$root.tipulim.push({id:this.$root.lastTipulid.last ,datein: "0", dateout: "0", carNum: this.carnumber, problem: "ערוך", price: "0", paid: "0"})
      }
    }
  
  }
</script>
