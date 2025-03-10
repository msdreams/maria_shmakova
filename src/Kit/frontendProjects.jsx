import { kidtyImagesSet, monetaImagesSet, phonesImagesSet, potsImagesSet } from "./ImagesSets";


export const frontendProjects = [
  {
    id: "moneta", 
    url: "https://my.budgetapp.space/" , 
    img: monetaImagesSet,
    title: "Finance Dashboard Web App",
    technologies: "React, TypeScript, Tailewindcss, React Router, Recharts library, Fetch, REST API.",
    describtion: " MONETA serves as an expense tracking application that allows users to manage their finances effectively.Users can easily log their expenses, visualize their spending habits through interactive charts, and gain insights into their financial behavior. The app aims to empower users to take control of their budgeting and make informed financial decisions."
  },
  {
    id: "kidty", 
    url: "https://msdreams.github.io/kidty/#/account" , 
    img: kidtyImagesSet,
    title: "Data Visualization Web App",
    technologies: "React, TypeScript, React Router, D3 library, Fetch, REST API, Docker.",
    describtion: "Pet Project under construction, customizable data visualizations."
  },
  {
    id: "phoneCatalog",
    url: "https://msdreams.github.io/phone_catalog/#/",
    img: phonesImagesSet,
    title: "Online Store project",
    technologies: "React, TypeScript, React Router, UseContext, Custom useLocalStorage Hook.",
    describtion: "Product Catalog, Category Filtering, Favorites Selection."
  },
  {
    id: "potr_pots", 
    url: "https://msdreams.github.io/Potr_Pots_landing" , 
    img: potsImagesSet,
    title: "Potr Pots Landing Page",
    technologies: "HTML, SCSS.",
    describtion: "Pet project focuses on creating a responsive design with clean and scalable CSS architecture."
  },
]