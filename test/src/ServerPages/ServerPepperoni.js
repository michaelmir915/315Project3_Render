import React from 'react'

const ServerPepperoni = (props) => {
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
        <div id="AddOn_Drink">
          <label htmlFor="addon_drinks" class="dropdown-choices-label">Drink:</label>
          <select name="addon_drinks" id="addon_drinks" class="dropdown-choices">
            <option value="no_drink">--Select An Option--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div id="Crust">
          <label htmlFor="crusts" class="dropdown-choices-label">Crust:</label>
          <select name="crusts" id="crusts" class="dropdown-choices">
            <option value="Regular Crust" selected>Regular</option>
            <option value="Cauliflower Crust">Cauliflower</option>
          </select>
        </div>

      </div>
      <div id="OrderList">
      </div>
      <p></p>
      <form id="BottomRow" onSubmit={handleSubmit}>
        <button type="submit" id="AddToOrder">Add to Order</button>
      </form>
    </div>
  )
}

function createItem() {
  let order = "Pepperoni*" + document.getElementById("sauces").value + "*" + document.getElementById("crusts").value + "*" + document.getElementById("addon_drinks").value + "|";
  // alert(order);
  return order;
}

export default ServerPepperoni