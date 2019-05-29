<template>
  <div class="car">
    <h1>{{carnumber}} :מספר רכב</h1>
    <h1>{{carInArr.firm}} :דגם</h1>
    <h1>
      <router-link :to="`/costumer/${ownerInArr.name}`">
        <el-button @click="visible = true" style="color:blue">עבור לדף לקוח</el-button>
      </router-link>
      בעלים: {{ownerInArr.name}}
    </h1>

    <h1>היסטורית טיפולים</h1>
    <!-- <ul>
      <li v-for="tipul in timpulimInCar" :key="tipul.id">{{tipul}}</li>
    </ul> -->

    <el-table :data="timpulimInCar" style="width: 40% "  >
      <el-table-column prop="id" label="id" width="50"></el-table-column>
      <el-table-column prop="datein" label="Datein" width="100"></el-table-column>
      <el-table-column prop="dateout" label="Dateout" width="100"></el-table-column>
      <el-table-column prop="carNum" label="carNum" width="100"></el-table-column>
      <el-table-column prop="problem" label="problem"></el-table-column>
      <el-table-column prop="price" label="price"></el-table-column>
      <el-table-column prop="paid" label="paid"></el-table-column>
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
    timpulimInCar() {
      const tipulim = this.carInArr.tipulim;
      return this.$root.tipulim.filter(tipul => tipulim.includes(tipul.id));
    }
  },
  
  }
</script>
