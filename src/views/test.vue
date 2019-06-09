<template>
  <div class="test">
<el-row class="demo-autocomplete">
  <el-col :span="24">
    
    <el-autocomplete
      class="inline-input"
      v-model="selectedCustomer"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      value-key="name"
     
    ></el-autocomplete>
  </el-col>
  <!-- <el-col :span="12">
    <div class="sub-title">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col> -->
</el-row>
 <!-- <div> {{this.$root.customers}} </div> -->
 </div>

</template>

<script>
  export default {
    data() {
      return {
        selectedCustomer: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        const customers = this.$root.customers;
        var results = queryString ? customers.filter(this.createFilter(queryString)) : customers;
        // console.log('results', results);
        
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (customer) => {
            // console.log('customer.name.toLowerCase()', customer.name.toLowerCase());
            // console.log('queryString.toLowerCase()', queryString.toLowerCase());
            
          return (customer.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      // handleSelect(item) {
        // console.log(item);
      // }
    }
  }
</script>
