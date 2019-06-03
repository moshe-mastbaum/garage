<template>
  <div class="tipul">
    <h1>טיפול {{tipulNumber}}</h1>
    <div style="margin-left:35%; width:30%; border: 0.5rem outset blue;border-radius: 12px;">
      <h1>{{carInArr ? carInArr.num : ''}}: {{carInArr ? carInArr.firm : ''}} מספר</h1>
      <h1>בעלים: {{ownerInArr ? ownerInArr.name : ''}}</h1>
    </div>

    <!-- <font size="8">  -->
    <table style="margin-left:30%;margin-top:2%; width:40%; font-size:25px">
      <tr>
         <td>  <input type="date" id="name"  name="name" size="20"  style="font-size:18px"
                v-model="editedTipul.datein">
        </td>        
        <td>תאריך כניסה</td>
      </tr>
      <tr>
        <td>
          <input type="date" id="name" name="name" size="3" style="font-size:18px" v-model="editedTipul.dateout">
        </td>       
        <td>תאריך יציאה</td>
      </tr>
      <tr>       
        <td>
          <input type="text" id="name" name="name" size="20" style="font-size:18px">
        </td>
        <td>{{editedTipul.problem}}</td>
        <td>תקלה</td>
      </tr>
      <tr>       
        <td>
          <input type="number" id="name" name="name" size="10" style="font-size:18px">
        </td>
        <td>{{editedTipul.price}}</td>
        <td>מחיר</td>
      </tr>
      <tr>
        <td>
          <input type="number" id="name" name="name" size="3" style="font-size:18px">
        </td>
        <td>{{editedTipul.paid}}</td>
        <td>שולם</td>
      </tr>
      <tr>
        <td>
          <input type="text" id="name" name="name" size="20" style="font-size:18px">
        </td>
        <td>{{editedTipul.comments}}</td>
        <td>הערות</td>
      </tr>
    </table>
    <!-- </font> -->
  </div>
</template> 

<script>
import { METHODS } from "http";

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
        owner = this.$root.costumers.find(
          owner => owner.id === this.carInArr.owner
        );
      }
      return owner;
    }
  },
  mounted() {
    this.editedTipul = this.$root.tipulim.find(
        tipul => tipul.id == this.tipulNumber
    );
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