<template>

  <div class="tipul">
     
    <div style="margin-left:38%;margin-bottom:1%; width:24%;">
        <el-button  style="color:red; width:25%; text-align:center">שמור</el-button>     
      <router-link :to="`/customer/${ownerInArr.name}`">
        <el-button  style="color:blue;width:25%">לדף לקוח</el-button>
      </router-link>
       <router-link :to="`/car/${ carInArr.num}`">
        <el-button  style="color:blue;width:25%">לדף רכב</el-button>
      </router-link>
      <router-link :to="`/`" >
        <el-button  style="color:blue; width:25%">דף ראשי</el-button>
      </router-link>
    </div>
    <div>טיפול {{tipulNumber}}</div>
    <div style="margin-left:35%; width:30%; border: 0.5rem outset blue;border-radius: 12px;">
      <h1>{{carInArr ? carInArr.num : ''}}: {{carInArr ? carInArr.firm : ''}} מספר</h1>
      <h1>בעלים: {{ownerInArr ? ownerInArr.name : ''}}</h1>
    </div>

    
    <table style="margin-left:30%;margin-top:2%; width:40%; font-size:25px; " >
      <tr>
         <td>  <input type="date" id="name"  name="name"   style="font-size:18px"
                v-model="editedTipul.datein">
        </td>        
        <td>תאריך כניסה</td>
      </tr>
      <tr>
        <td>
          <input type="date" id="name" name="name"  style="font-size:18px" v-model="editedTipul.dateout">
        </td>       
        <td>תאריך יציאה</td>
      </tr>
      <tr >       
        <td >
          <input type="text" id="name" name="name"  style="font-size:18px; text-align:center"  v-model="editedTipul.problem">
        </td>       
        <td>תקלה</td>
      </tr>
      <tr>       
        <td>
          <input type="number" id="name" name="name"  style="font-size:18px; text-align:center" v-model="editedTipul.price">
        </td>       
        <td>מחיר</td>
      </tr>
      <tr>
        <td>
          <input type="number" id="name" name="name"  style="font-size:18px; text-align:center" v-model="editedTipul.paid">
        </td>       
        <td>שולם</td>
      </tr>
      <tr>
        <td>
          <textarea name="Text1" cols="18" rows="5" v-model="editedTipul.comments" style="font-size:20px"></textarea>
          <!-- <input type="text" id="name" name="name"  style="font-size:18px; text-align:center; height:140px" v-model="editedTipul.comments"> -->
        </td>       
        <td>הערות</td>
      </tr>
    </table> 
     <el-button size="mini"  @click="visible = true" style="font-size:20px;" >שמור</el-button> 
  </div>
</template> 

<script>
// import { METHODS } from "http";

export default {
  name: "tipul",
  props: ["tipulNumber"],
  computed: {
    // tipulinArr() {
    //   let tipul = this.$root.tipulim.find(
    //     tipul => tipul.id == this.tipulNumber
    //   );
    //   return tipul;
    // },
    carInArr() {
      let car = this.$root.cars.find(car => car.num === this.editedTipul.carNum);
      return car;
    },
    ownerInArr() {
      let owner = {};
      if (this.carInArr) {
        owner = this.$root.customers.find(
          owner => owner.id === this.carInArr.owner
        );
      }
      return owner;
    }
  },
  mounted() {
    this.editedTipul = this.$root.tipulim.find(tipul => tipul.id == this.tipulNumber);
  },
  data() {
    return {
      editedTipul: {
        datein: '',
        dateout: '',
        carNum: '',
        problem: '',
        price: '',
        place: '',
        comments: ''
      }
    };
  },
  methods: {
    editdatein() {
      // tipulinArr.editdatein = "01/01/2000";
    }
  }
};
</script>