import React, { useState } from 'react'

const ServerMultiTopping = (props) => {
  const [toppings, addTopping] = useState([{
    toppingCount: 0,
    toppingList: ""
  }]);
  const setTopping = (str) => {
    if (toppings[1] === undefined) {
      toppings[0] = 0;
      toppings[1] = "";
    }
    // alert(toppings[0] +"  " + toppings[1]);
    if (toppings[0] > 3) {
      toppings[1] = toppings[1].substring(toppings[1].indexOf(",") + 1);
      toppings[0]--;
    }
    toppings[1] = toppings[1] + str + ","
    // alert(toppings[1]);
    toppings[0]++;
    // alert(toppings[0] +"  " + toppings[1]);

  }

  function createItem() {
    let order = "Multi Topping*" + document.getElementById("sauces").value + "*" + document.getElementById("crusts").value + "*" + toppings[1] + "|";
    // alert(order);
    toppings[0] = 0;
    toppings[1] = "";
    return order;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const str = createItem();
    props.onSubmit(e, str);
  }

  return (
    <div>
      <div id="OrderButtonMenu">
        <div id="Sauce">
          <label htmlFor="sauces" class="dropdown-choices-label">Sauce:</label>
          <select name="sauces" id="sauces" class="dropdown-choices">
            <option value="Red Sauce" selected>Red Sauce</option>
            <option value="White Sauce">White Sauce</option>
            <option value="Zesty Red Sauce">Zesty Red Sauce</option>
          </select>
        </div>
        <div id="Crust">
          <label htmlFor="crusts" class="dropdown-choices-label">Crust:</label>
          <select name="crusts" id="crusts" class="dropdown-choices">
            <option value="Regular Crust" selected>Regular</option>
            <option value="Cauliflower Crust">Cauliflower</option>
          </select>
        </div>
        <div id="Meat" class="dropdown">
          <label class="dropdown-choices-label">Meats:</label>
          <div class="dropdown-choices">
            <button onClick={() => setTopping("Bacon")}>Bacon</button>
            <button onClick={() => setTopping("Black Forest Ham")}>Black Forest Ham</button>
            <button onClick={() => setTopping("Italian Sausage")}>Italian Sausage</button>
            <button onClick={() => setTopping("Meatball")}>Meatball</button>
            <button onClick={() => setTopping("Pepperoni")}>Pepperoni</button>
            <button onClick={() => setTopping("Salami")}>Salami</button>
            <button onClick={() => setTopping("Smoked Chicken")}>Smoked Chicken</button>
          </div>
        </div>
        <div id="Vegetable" class="dropdown">
          <label class="dropdown-choices-label">Vegetable:</label>
          <div class="dropdown-choices">
            <button onClick={() => setTopping("Cherry Tomato")}>Cherry Tomato</button>
            <button onClick={() => setTopping("Red Onions")}>Red Onions</button>
            <button onClick={() => setTopping("Black Olives")}>Black Olives</button>
            <button onClick={() => setTopping("Spinach")}>Spinach</button>
            <button onClick={() => setTopping("Kalmata Olives")}>Kalmata Olives</button>
            <button onClick={() => setTopping("Jalapenos")}>Jalapenos</button>
            <button onClick={() => setTopping("Green Peppers")}>Green Peppers</button>
            <button onClick={() => setTopping("Banana Peppers")}>Banana Peppers</button>
            <button onClick={() => setTopping("Brocoli")}>Brocolli</button>
            <button onClick={() => setTopping("Caramelized Onions")}>Caramelized Onions</button>
            <button onClick={() => setTopping("Garlic")}>Garlic</button>
            <button onClick={() => setTopping("Mushrooms")}>Mushrooms</button>
          </div>
        </div>
        <div id="Drizzle" class="dropdown">
          <label class="dropdown-choices-label">Drizzle:</label>
          <div class="dropdown-choices">
            <button onClick={() => setTopping("BBQ Sauce")}>BBQ Sauce</button>
            <button onClick={() => setTopping("Balsamic Glaze")}>Balsamic Glaze</button>
            <button onClick={() => setTopping("Sriracha")}>Sriracha</button>
            <button onClick={() => setTopping("Olive Oil")}>Olive Oil</button>
            <button onClick={() => setTopping("Oregano")}>Oregano</button>
            <button onClick={() => setTopping("Basil Pesto")}>Basil Pesto</button>
          </div>
        </div>

      </div>
      <div id="OrderList">
      </div>
      <form id="BottomRow" onSubmit={handleSubmit}>
        <button type="submit" id="AddToOrder">Add to Order</button>
      </form>
    </div>
  )
}

export default ServerMultiTopping