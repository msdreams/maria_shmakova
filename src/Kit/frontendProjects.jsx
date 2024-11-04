
import phoneCatalog from "../assets/images/phoneCatalog.jpg";
import boze from "../assets/images/boze.jpg";
import potr_pots from "../assets/images/potr-pots.jpg";
import kidty from "../assets/images/kidty.jpg";
import game from "../assets/images/2048.jpg";
import todos from "../assets/images/todos.jpg";


export const frontendProjects = [
  {
    id: "phoneCatalog",
    url: "https://msdreams.github.io/phone_catalog/#/",
    img: phoneCatalog,
    title: "Online Store project",
    technologies: "React, TypeScript, React Router, UseContext, Custom useLocalStorage Hook.",
    describtion: "Product Catalog, Category Filtering, Favorites Selection."
  },
  {
    id: "kidty", 
    url: "https://msdreams.github.io/kidty/#/account" , 
    img: kidty,
    title: "Data Visualization Web App",
    technologies: "React, TypeScript, React Router, D3 library, Fetch, REST API, Docker.",
    describtion: "Pet Project under construction, customizable data visualizations."
  },
  {
    id: "game", 
    url: "https://msdreams.github.io/2048_game_js" , 
    img: game,
    title: "Classic 2048 Game",
    technologies: "JavaScript.",
    describtion: "A classic 2048 game implementation using JavaScript class system to manage game logic and state."
    
  },
  {
    id: "potr_pots", 
    url: "https://msdreams.github.io/Potr_Pots_landing" , 
    img: potr_pots,
    title: "Potr Pots Landing Page",
    technologies: "HTML, SCSS.",
    describtion: "Pet project focuses on creating a responsive design with clean and scalable CSS architecture."
  },
  {
    id: "boze",
    url: "https://msdreams.github.io/Boze_landing",
    img: boze,
    title: "Boze Landing Page",
    technologies: "HTML, SCSS.",
    describtion: "Pet project focuses on creating a responsive design with clean and scalable CSS architecture."

  },
  {
    id: "todos", 
    url: "https://msdreams.github.io/todo_app/#/All" ,
    img: todos,
    title: "Todo App",
    technologies: "React, TypeScript, React Router, Redux Toolkit, REST API.",
    describtion: "Task management application with API integration."
  }
]