<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ברוכים הבאים למוסך גו-קוד שדרות</h1>
    <p>
      <el-button @click="visible = true">חפש</el-button>
      <el-input
        style="color:blue ;width:300px"
        placeholder="שם לקוח"
        prefix-icon="el-icon-search"
        v-model="input2"
      ></el-input>
    </p>
    <p>
      <el-button @click="visible = true">חפש</el-button>
      <el-input
        style="color:red ;width:300px"
        placeholder="מספר רכב"
        prefix-icon="el-icon-search"
        v-model="input2"
      ></el-input>
    </p>
    <el-button @click="visible = true">הכנס לקוח חדש</el-button>
  </div>
</template>

<script>
import { once } from "events";
// @ is an alias to /src

const customers = [
  { name: "יוסי כהן", id: "000000001", car: ["001", "002"], bill: "500" },
  { name: "אבי לוי ", id: "000000002", car: ["003"], bill: "0" }
];
const cars = [
  { num: "001", owner: "000000001", fifm: "subaro", tipulim: ["1"] },
  { num: "002", owner: "000000001", fifm: "ford", tipulim: [] },
  { num: "003", owner: "000000002", fifm: "toyota", tipulim: [] }
];
const Tipulim = [
  {
    id: "1",
    datein: "0",
    dateout: "0",
    carNum: "001",
    problem: "brex",
    price: "500",
    paid: "0"
  }
];

export default {
  name: "home"
};
</script>
