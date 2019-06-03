
export const costumers = [
    { name: "יוסי כהן", id: "000000001", car: ["001", "002"], bill: "800" },
    { name: "אבי לוי ", id: "000000002", car: ["003"], bill: "0" }
  ];
export const cars = [
    { num: "001", owner: "000000001", firm: "סוברו אימפריזה", tipulim: [1,2] },
    { num: "002", owner: "000000001", firm: "פורד פוקוס", tipulim: [] },
    { num: "003", owner: "000000002", firm: "טויוטה קורולה", tipulim: [] }
  ];
export const tipulim = [
    {
      id: 1,
      datein: "2019-01-08",
      dateout: "3/1/2019",
      carNum: "001",
      problem: "ברקס",
      price: "500",
      paid: "0",
      comments: " "
    },
    {
      id: 2,
      datein: "0",
      dateout: "0",
      carNum: "001",
      problem: "מנוע",
      price: "300",
      paid: "0",
      comments: " "
    },
  ];
export const lastTipulid = { last: "2" };
