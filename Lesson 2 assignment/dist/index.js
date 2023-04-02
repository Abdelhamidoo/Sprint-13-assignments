"use strict";
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["morning"] = "Good morning";
    TimeOfDay["afternoon"] = "Good afternoon";
    TimeOfDay["evening"] = "Good evening";
})(TimeOfDay || (TimeOfDay = {}));
;
;
const gabriel = {
    customerName: "Gabriel",
    loyaltyStatus: true,
    numberOfVisits: 2,
};
const customerGreeting = (time, customer) => {
    let greeting = `${time} ${customer.customerName}. `;
    const message1 = "Thank you for being a loyal customer!";
    const message2 = "It would be really great if you join our loyalty program, you won't regret trust us!";
    greeting += customer.loyaltyStatus ? message1 : message2;
    return greeting;
};
console.log(customerGreeting(TimeOfDay.morning, gabriel));
