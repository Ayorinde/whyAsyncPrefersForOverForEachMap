import "./styles.css";

let issueEventTicket = (ticketId, ticketPerPerson, fullName, email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = { name: fullName, email, ticketId, now: Date.now() };
      // console.log("res inside: ", result);
      resolve(result);
    }, 6000);
  });
};
//let classids = { "5b9f865a8ead0e71038b464b": 1, "5d29a0d78ead0ef2638b4728": 1 };
let people = {
  "5b9f865a8ead0e71038b464b": [
    {
      firstName: "Makinde",
      lastName: "Teniola",
      email: "brainiacten@gmail.com",
      phone: "8065230812"
    }
  ],
  "5d29a0d78ead0ef2638b4728": [
    {
      firstName: "image",
      lastName: "nigga",
      phone: "484585858",
      email: "makinde@nairabox.com"
    }
  ]
};

(async function() {
  //Object.keys(people).forEach(async keyPeople => {
  let peopleKeys = Object.keys(people);
  for (let index1 = 0; index1 < peopleKeys.length; index1++) {
    let keyPeople = peopleKeys[index1];
    let people4ticket = people[keyPeople];

    for (let index = 0; index < people4ticket.length; index++) {
      const iterator = people4ticket[index];

      console.log("iterator", iterator);
      let count = 1;
      let ticketIssued = await issueEventTicket(
        keyPeople,
        count,
        iterator.firstName + " " + iterator.lastName,
        iterator.email
      );
      console.log("ticket issued: ", ticketIssued);
    }
  }
})();
