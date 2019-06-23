
export const customers =
[
 
  {
    name: "yosi cohen",
    id: "123456789",
    car: ["001", "002"],
    bill: "800",
    tel: "081234567",
    adress: "בן גוריון 2 שדרות"
  },
  {
    name: "אבי לוי",
    id: "000000002",
    car: ["003"],
    bill: "0",
    tel: "081114567",
    adress: "אברהם אבינו 2 שדרות"
  }
  ];
export const cars = [
  { num: "001", owner: "123456789", firm: "סוברו אימפריזה", tipulim: [1, 2] },
    { num: "002", owner: "123456789", firm: "פורד פוקוס", tipulim: [] },
    { num: "003", owner: "000000002", firm: "טויוטה קורולה", tipulim: [] }
  ];
export const tipulim = [
    {
      id: 1,
      datein: "2019-01-08",
      dateout: "2019-01-11",
      carNum: "001",
      problem: "ברקס",
      price: "500",
      paid: "0",
      comments: "אשרי יושבי ביתך  עוד יהללוך סלה  אשרי העם שככה לו אשרי  "
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
