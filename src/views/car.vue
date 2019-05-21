<template>
  <div class="car">
    fsdfsfsdfsdfsdf
    <h1>מספר רכב</h1>
    <div>mycar.owner</div>

  </div>
</template>

<script>
import { cars } from '../data/data.js'
mycar=cars[cars.num.find(carnumber)]

export default {
  name: "car",
  props: ['carnumber']
}
</script>