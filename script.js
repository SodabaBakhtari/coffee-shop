function startAssistant() {
  let username = prompt("Enter username ➡ 'admin, user':");
  let password = prompt("Enter password ➡ '1234':");

  if ((username === "admin" || username === "user") && password === "1234") {
    let role = username === "admin" ? "high" : "low";
    alert("Access granted! Role: " + role);
  } else {
    alert("Access denied!");
    return;
  }

  let name = prompt("Your name:");
  let age = parseInt(prompt("Your age:"));
  let coffee = prompt("Choose coffee: espresso, latte, Hot chocolate ... other").toLowerCase();
  let quantity = parseInt(prompt("How many cups?"));

  let price = 0;
  if (coffee === "espresso") price = 2.5;
  else if (coffee === "latte") price = 3.5;
  else if (coffee === "Hot chocolate") price = 4.0;
  else if (coffee === "americano") price = 3.0;
  else if (coffee === "mocha") price = 4.5;
  else if (coffee === "turkish coffee") price = 2.0;
  else{
    alert("Invalid coffee type!");
    return;
  }

  let originalTotal = price * quantity;
  let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
  let finalTotal = originalTotal - discount;

  let people = parseInt(prompt("How many people splitting the bill? (1-3)"));
  let tipPercent = parseInt(prompt("Tip percentage (0, 5, 10, 15):"));
  let tip = finalTotal * (tipPercent / 100);
  let totalWithTip = finalTotal + tip;
  let perPerson = totalWithTip / people;

  alert(`Hello ${name}!
You ordered ${quantity} ${coffee}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tip.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${people} people: $${perPerson.toFixed(2)} each`);
}
  