<template>
  <div class="costumer" >
    <h1>   שם לקוח   :{{costumername}} </h1>
    <h1>   חשבון   :{{ownerInArr.bill}} ש"ח</h1>
    <h1>   רכבים</h1>

  </div>
</template>
<script>
export default {
  name: "costumer",
  props: ["costumername"],

  computed :{
     ownerInArr(){
      let owner = this.$root.costumers.find(owner => owner.name === this.costumername)
      return owner;
    }
  }
}
</script>
