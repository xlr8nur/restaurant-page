function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Ekmek",
        "Ekmek","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Karides",
        "Karides","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Karışık",
        "Zeytin","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Zeytinli",
        "Ekmek","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Sucuklu",
        "Ekmek","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Acılı",
        "Ekmek","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Acısız",
        "Ekmek","Mozarella, Tereyağı, Sarımsak"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Sucuksuz",
        "Ekmek","Mozarella, Tereyağı, Sarımsak"
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/tost/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;