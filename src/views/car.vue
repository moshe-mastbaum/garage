<template>
  <div class="car">
    
    <h1>{{carnumber}}  :מספר רכב</h1>
    <h1>{{carInArr.firm}}  :דגם</h1>
    <h1>
    <router-link :to="`/costumer/${ownerInArr.name}`" >
      <el-button @click="visible = true" style="color:blue" >עבור לדף לקוח</el-button>
      </router-link>
       בעלים:  {{ownerInArr.name}}
      </h1>
      <h1>היסטורית טיפולים</h1>
      <ul>
       <li v-for="n in carInArr.tipulim" :key="n">
          {{$root.tipulim[n]}}
       </li>
      </ul>
      

    <!-- <div>{{carInArr}}</div>
    <div>{{ownerInArr}}</div> -->
    <!-- <div>{{$root.costumers[0]}}</div> -->
    <!-- <div>{{$root.cars[findcar (carnumber)]}}</div> -->

  </div>
</template>

<script>
// import Vue from 'vue';

export default
{
  name: "car",
  props: ['carnumber'],
  computed:
  {
    carInArr()
    {
      let car = this.$root.cars.find(car => car.num === this.carnumber)
      return car;
    },
    ownerInArr()
    {
      let owner = this.$root.costumers.find(owner => owner.id === this.carInArr.owner)
      return owner;
    }    
  }  
}
</script>
