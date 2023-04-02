enum TimeOfDay{
    morning = "Good morning",
    afternoon = "Good afternoon",
    evening = "Good evening",
};

interface Customer{
    customerName:string;
    loyaltyStatus:boolean;
    numberOfVisits:number;
};

const gabriel: Customer = {
    customerName: "Gabriel",
    loyaltyStatus: true,
    numberOfVisits: 2,
};

const customerGreeting = (time: TimeOfDay, customer: Customer):string => {
    let greeting = `${time} ${customer.customerName}. `;
    const message1 = "Thank you for being a loyal customer!";
    const message2 = "It would be really great if you join our loyalty program, you won't regret trust us!";
    greeting += customer.loyaltyStatus ? message1 : message2
  
    return greeting
};

console.log(customerGreeting(TimeOfDay.morning, gabriel));









