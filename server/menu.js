const fullMenu = [
  {
    subMenu: "antipasti",
    title: "Pepata di Cozze",
    active: false,
    desc: "Mussels, Calabrese peppers, white wine, cherry tomato "
  },

  {
    subMenu: "antipasti",
    title: "Fritto Misto",
    active: true,
    desc: "Fried Shrimp, Calamari, spicy garlic aioli "
  },

  {
    subMenu: "antipasti",
    title: "Polpette (3pcs/5pcs)",
    active: true,
    desc: "Nonnas traditional Meatballs "
  },

  {
    subMenu: "antipasti",
    title: "Pane Misto",
    active: true,
    desc: "Selection of bread, EVOO, Balsamic, spicy olives"
  },

  {
    subMenu: "antipasti",
    title: "Burrata",
    active: true,
    desc: "Italian Burrata, EVOO, selection of bread"
  },

  {
    subMenu: "antipasti",
    title: "La Cantina",
    active: false,
    desc: "artisanal salumi, cheeses, house made preserves"
  },

  {
    subMenu: "insalata",
    title: "Amaro",
    active: false,
    desc: "bitter lettuces, lemon amaro vinaigrette"
  },

  {
    subMenu: "insalata",
    title: "Caesar",
    active: true,
    desc:
      "Romaine Lettuce, house caesar dressing, parmigiano, prosciutto crisps, house made croutons"
  },

  {
    subMenu: "insalata",
    title: "Mista",
    active: false,
    desc: "Mixed Baby greens, balsamic EVOO dressing"
  },
  {
    subMenu: "insalata",
    title: "Funghi Caldi",
    active: true,
    desc:
      "Roasted Mushrooms, roasted red peppers, arugula, goat cheese, balsamic reduction"
  },
  {
    subMenu: "pasta",
    title: "Gnocchi con Pomodoro ",
    active: true,
    desc: "Homemade Gnocchi, house tomato sauce, seasoned ricotta"
  },

  {
    subMenu: "pasta",
    title: "Linguine con Vongole",
    active: true,
    desc: "Clams, white wine, cherry tomato"
  },

  {
    subMenu: "pasta",
    title: "Casarecci con Pesto Genovese",
    active: false,
    desc: "Handmade semolina pasta, house pesto "
  },

  {
    subMenu: "pasta",
    title: "Spaghetti con cacio e pepe",
    active: true,
    desc: "Pecorino, black pepper (Ask your server how to make it calabrese) "
  },

  {
    subMenu: "pasta",
    title: "Bucatini all'amatriciana",
    active: false,
    desc: "Black Pepper, Guanciale, House Tomato sauce "
  },

  {
    subMenu: "pasta",
    title: "Tagliatelle con Funghi e Tartufo",
    active: true,
    desc: "Mushrooms, truffle oil"
  },

  {
    subMenu: "pasta",
    title: "Penne alla Vodka",
    active: false,
    desc: "Pancetta, Tomato cream sauce, scallions"
  },

  {
    subMenu: "pasta",
    title: "Orecchiette con rapini e salsiccia ",
    active: true,
    desc: "Rapini, Fennel Sausage, calabrese peppers"
  },

  {
    subMenu: "pizza",
    title: "Funghi e Tartufo ",
    active: true,
    desc: "Roasted Mushrooms, Truffle paste, Brie"
  },
  {
    subMenu: "pizza",
    title: "Patate",
    active: true,
    desc: "Potatoes, Roasted Pork Jowl, Caramelized onions"
  },
  {
    subMenu: "pizza",
    title: "‘Nduja",
    active: true,
    desc: "'Nduja, stracciatella, cherry bomb peppers"
  },

  {
    subMenu: "pizza",
    title: " Rapini e Salsiccia",
    active: true,
    desc: "  Rapini, Fennel Sausage, Calabrese peppers"
  },

  {
    subMenu: "pizza",
    title: "Quattro Formaggi",
    active: false,
    desc: "Fior di Latte, Parmigiano, Asiago, Aged Cheddar"
  },

  {
    subMenu: "pizza",
    title: "Margherita DOP",
    active: true,
    desc: "Fior Di Latte, Bufala Mozzarella, Basil, EVOO"
  },

  {
    subMenu: "pizza",
    title: "Calabrese",
    active: false,
    desc: "calabrese salami, olives, hot chili oil"
  },

  {
    subMenu: "pizza",
    title: "Capricciosa",
    active: false,
    desc: "artichokes, prosciutto cotto, olives and mushrooms"
  },
  {
    subMenu: "pizza",
    title: "Crudo",
    active: true,
    desc: "Prosciutto crudo, burrata, arugula, cherry tomatoes"
  },
  {
    subMenu: "pizza",
    title: "Vincenzo",
    active: true,
    desc: "Fennel Sausage, Caramelized Cipollini onions, hot chili oil"
  },
  {
    subMenu: "secondi",
    title: " Pollo Piccante",
    active: false,
    desc: " Our Calabrese Marinated, brick pressed Chicken"
  },

  {
    subMenu: "secondi",
    title: "Bistecca",
    active: true,
    desc: " Prime, 28 day Dry Aged Ribeye"
  },

  {
    subMenu: "secondi",
    title: " Agnello",
    active: false,
    desc: "Marinated and Grilled Shoulder and Leg Chops of Ontario Lamb"
  },
  {
    subMenu: "secondi",
    title: "Branzino",
    active: true,
    desc: "Grilled in the wood oven "
  },

  {
    subMenu: "contorni",
    title: "Spicy Rapini",
    active: true,
    desc: ""
  },
  {
    subMenu: "contorni",
    title: "Roasted Peppers, onions and potatoes",
    active: true,
    desc: ""
  },

  {
    subMenu: "contorni",
    title: "Fried Potatoes",
    active: false,
    desc: ""
  },
  {
    subMenu: "contorni",
    title: "Seasonal Vegetables",
    active: false,
    desc: ""
  }
];

const antipasto = [
  {
    title: "Pepata di Cozze",
    active: false,
    desc: "Mussels, Calabrese peppers, white wine, cherry tomato "
  },

  {
    title: "Fritto Misto",
    active: true,
    desc: "Fried Shrimp, Calamari, spicy garlic aioli "
  },

  {
    title: "Polpette (3pcs/5pcs)",
    active: true,
    desc: "Nonnas traditional Meatballs "
  },

  {
    title: "Pane Misto",
    active: true,
    desc: "Selection of bread, EVOO, Balsamic, spicy olives"
  },

  {
    title: "Burrata",
    active: true,
    desc: "Italian Burrata, EVOO, selection of bread"
  },

  {
    title: "La Cantina",
    active: false,
    desc: "artisanal salumi, cheeses, house made preserves"
  }
];

const insalata = [
  {
    title: "Amaro",
    active: false,
    desc: "bitter lettuces, lemon amaro vinaigrette"
  },

  {
    title: "Caesar",
    active: true,
    desc:
      "Romaine Lettuce, house caesar dressing, parmigiano, prosciutto crisps, house made croutons"
  },

  {
    title: "Mista",
    active: false,
    desc: "Mixed Baby greens, balsamic EVOO dressing"
  },
  {
    title: "Funghi Caldi",
    active: true,
    desc:
      "Roasted Mushrooms, roasted red peppers, arugula, goat cheese, balsamic reduction"
  }
];

const pasta = [
  {
    title: "Gnocchi con Pomodoro ",
    active: true,
    desc: "Homemade Gnocchi, house tomato sauce, seasoned ricotta"
  },

  {
    title: "Linguine con Vongole",
    active: true,
    desc: "Clams, white wine, cherry tomato"
  },

  {
    title: "Casarecci con Pesto Genovese",
    active: false,
    desc: "Handmade semolina pasta, house pesto "
  },

  {
    title: "Spaghetti con cacio e pepe",
    active: true,
    desc: "Pecorino, black pepper (Ask your server how to make it calabrese) "
  },

  {
    title: "Bucatini all'amatriciana",
    active: false,
    desc: "Black Pepper, Guanciale, House Tomato sauce "
  },

  {
    title: "Tagliatelle con Funghi e Tartufo",
    active: true,
    desc: "Mushrooms, truffle oil"
  },

  {
    title: "Penne alla Vodka",
    active: false,
    desc: "Pancetta, Tomato cream sauce, scallions"
  },

  {
    title: "Orecchiette con rapini e salsiccia ",
    active: true,
    desc: "Rapini, Fennel Sausage, calabrese peppers"
  }
];

const pizza = [
  {
    title: "Funghi e Tartufo ",
    active: true,
    desc: "Roasted Mushrooms, Truffle paste, Brie"
  },
  {
    title: "Patate",
    active: true,
    desc: "Potatoes, Roasted Pork Jowl, Caramelized onions"
  },
  {
    title: "‘Nduja",
    active: true,
    desc: "'Nduja, stracciatella, cherry bomb peppers"
  },

  {
    title: " Rapini e Salsiccia",
    active: true,
    desc: "  Rapini, Fennel Sausage, Calabrese peppers"
  },

  {
    title: "Quattro Formaggi",
    active: false,
    desc: "Fior di Latte, Parmigiano, Asiago, Aged Cheddar"
  },

  {
    title: "Margherita DOP",
    active: true,
    desc: "Fior Di Latte, Bufala Mozzarella, Basil, EVOO"
  },

  {
    title: "Calabrese",
    active: false,
    desc: "calabrese salami, olives, hot chili oil"
  },

  {
    title: "Capricciosa",
    active: false,
    desc: "artichokes, prosciutto cotto, olives and mushrooms"
  },
  {
    title: "Crudo",
    active: true,
    desc: "Prosciutto crudo, burrata, arugula, cherry tomatoes"
  },
  {
    title: "Vincenzo",
    active: true,
    desc: "Fennel Sausage, Caramelized Cipollini onions, hot chili oil"
  }
];

const secondi = [
  {
    title: " Pollo Piccante",
    active: false,
    desc: " Our Calabrese Marinated, brick pressed Chicken"
  },

  {
    title: "Bistecca",
    active: true,
    desc: " Prime, 28 day Dry Aged Ribeye"
  },

  {
    title: " Agnello",
    active: false,
    desc: "Marinated and Grilled Shoulder and Leg Chops of Ontario Lamb"
  },
  {
    title: "Branzino",
    active: true,
    desc: "Grilled in the wood oven "
  }
];

const Contorni = [
  {
    title: "Spicy Rapini",
    active: true,
    desc: ""
  },
  {
    title: "Roasted Peppers, onions and potatoes",
    active: true,
    desc: ""
  },

  {
    title: "Fried Potatoes",
    active: false,
    desc: ""
  },
  {
    title: "Seasonal Vegetables",
    active: false,
    desc: ""
  }
];

module.exports = {
  fullMenu
  //   antipasto,
  //   Contorni,
  //   pizza,
  //   pasta,
  //   secondi,
  //   insalata
};
